const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io"),
  mongoose = require('mongoose'),
  Restaurant = require('./model/Restaurant'),
  Order = require('./model/Order');

const connectionString = "mongodb://localhost:27017/restaurant-app";

mongoose.connect(connectionString, {useNewUrlParser: true})
    .then( ()    => {console.log("Mongoose connected successfully");},
           error => {console.log("Moongoose could not connect to database: " + error);}
    );

const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restaurants called");
    
    Restaurant.find({$and: [{"city": "Queens"}, {"cuisine": "Delicatessen"}]}, (error, documents) => {
      if(error) console.log(`Error occurred on Restaurant.find(): ${error}`);
      else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map(x => {
          return JSON.stringify({name: x.name, cuisine: x.cuisine});
        });
        socket.emit('restaurants-data', data);
      }
    })
  });

  socket.on("get-orders", () => {
    console.log("server - get-orders called");

    Order.find((error, documents) => {
      if(error) console.log(`Error occurred on Order.find(): ${error}`);
      else {
        console.log(`Order.find() returned documents: ${documents}`);
        const data = documents.map(x => x.item);
        socket.emit('order-data', data);
      }
    })
  });

  socket.on("add-order", () => {
    console.log("server - add-order called");

    let order = new Order({
      orderId: Date.now(),
      item: "Poutine",
      customerName: "Kasper"
    });

    order.save().then(() => {
      console.log(`order added successfully: ${JSON.stringify(order)}`);
    });
    
    socket.emit('order-data-added', JSON.stringify(order));
  })
});