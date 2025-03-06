const order = require("../services/order");

exports.ordering = async (req,res) => {
    try {
        const {restaurant_id, user_id, total_price, status} = req.body;
        const ordered = await order.ordering(restaurant_id, user_id, total_price, status);
        console.log("successfully ordered from controller");
        return ordered;
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.ordered_items = async (req,res) => {
    try {
        const {order_id, item_id, quantity, price} = req.body;
        const orderedItems = await order.ordered_items(order_id, item_id, quantity, price);
        console.log("successfully ordered items from controller");
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.orders = async (req,res) => {
    try {
        const {user_id} = req.body;
        const order = await order.orders(user_id);
        console.log("successfully fetched orders from controller");
        return order;
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.editOrder = async (req,res) => {
    try {
        const {order_id, status} = req.body;
        const edit = await order.editOrder(order_id, status);
        console.log("successfully updated order from controller");
    } catch (error) {
        console.error("error from the controller", error);
    }
}
