const support = require("../models/supports");

exports.insertSupport = async (user_id, restaurant_id, message) => {
    try {
        const insert = await support.insertSupport(user_id, restaurant_id, message);
        console.log("successfully inserted support");
    } catch (error) {
        throw new Error("error from service",error.message);
    }
}
exports.getSupport = async (user_id,restaurant_id) => {
    try {
        const support = await support.getSupport(user_id,restaurant_id);
        return support;
    } catch (error) {
        throw new Error("error from service",error.message);
    }
}
exports.updateSupport = async (ticket_id,message) => {
    try {
        const update = await support.updateSupport(ticket_id,message);
        console.log("successfully updated support");
    } catch (error) {
        throw new Error("error from service",error.message);
        
    }
}
exports.deleteSupport = async (ticket_id) => {
    try {
        const deleted = await support.deleteSupport(ticket_id);
        console.log("successfully deleted support");
    } catch (error) {
        throw new Error("error from service",error.message);
    }
}