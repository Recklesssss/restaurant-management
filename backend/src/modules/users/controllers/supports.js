const support = require("../services/supports");

exports.insertSupport  = async (req,res) => {
    try {
        const {user_id, restaurant_id, message} = req.body;
        const insert = await support.insertSupport(user_id, restaurant_id, message);
        console.log("successfully inserted support");
        res.status(200).json({ success: true, message: "Support inserted successfully" });
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.getSupport = async (req,res) => {
    try {
        const {user_id,restaurant_id} = req.body;
        const support = await support.getSupport(user_id,restaurant_id);
        console.log("successfully fetched support from controller");
        res.status(200).json({ success: true, support });
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.updateSupport = async (req,res) => {
    try {
        const {ticket_id,message} = req.body;
        const update = await support.updateSupport(ticket_id,message);
        console.log("successfully updated support from controller");
        res.status(200).json({ success: true, message: "Support updated successfully" });
    } catch (error) {
        console.error("error from the controller", error);
    }
}
exports.deleteSupport = async (req,res) => {
    try {
        const {ticket_id} = req.body;
        const deleted = await support.deleteSupport(ticket_id);
        console.log("successfully deleted support from controller");
        res.status(200).json({ success: true, message: "Support deleted successfully" });
    } catch (error) {
        console.error("error from the controller", error);
    }
}