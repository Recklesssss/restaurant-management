const order = require("../models/order");

exports.ordering = async (restaurant_id, user_id, total_price, status) => {
    try {
        const ordered = await order.ordering(restaurant_id, user_id, total_price, status);
        console.log("successfully ordered from service");
        return ordered;
    } catch (error) {
        console.error("error from the service", error);
    }
}
exports.ordered_items = async (order_id, item_id, quantity, price) => {
    try {
        const orderedItems = await order.ordered_items(order_id, item_id, quantity, price);
        console.log("successfully ordered items from service");
    } catch (error) {
        console.error("error from the service", error);
    }
}
exports.orders = async (user_id) => {
    try {
        const order = await order.orders(user_id);
        console.log("successfully fetched orders from service");
        return order;
    } catch (error) {
        console.error("error from the service", error);
    }
}
exports.editOrder = async (order_id, status) => {
    try {
        const edit = await order.editOrder(order_id, status);
        console.log("successfully updated order from service");
    } catch (error) {
        console.error("error from the service", error);
    }
}