const express = require("express");
const app = express();
const Socket_io = require('socket.io');

//set the template engine ejs
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//Listen on port 3001
const hostname = "127.0.0.1";
const port = 3001;

var server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// setup socket.io here
var io = Socket_io.listen(server);

io.on('connection', socket => {
  console.log('New user connected');

  socket.username = "Anonymous";

  socket.on('change_username', data => {
    socket.username = data.username;
  });

  socket.on('new_message', data => {
    socket.broadcast.emit('new_message', {message: data.message, username: socket.username});
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', {username: socket.username});
  });
});