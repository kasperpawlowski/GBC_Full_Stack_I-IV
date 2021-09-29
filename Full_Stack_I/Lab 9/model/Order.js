const mongoose= require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        require: true
    },
    item: {
        type: String,
        require: true
    },
    customerName: {
        type: String,
        require: true
    }
});

const Order = mongoose.model('Order', orderSchema, 'Orders');
module.exports = Order;