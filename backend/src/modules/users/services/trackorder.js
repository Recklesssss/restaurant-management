const delivery = require("../models/trackorder");

exports.getDeliveryProgress = async (order_id)=>{
    try {
        const location = await delivery.getDeliveryProgress(order_id)
        console.log("successfully retrieved from model")
        return location
    } catch (error) {
        throw new Error("error from the service",error);
    }
}
exports.updateDeliveryProgress = async (order_id,longitude,latitude,status)=>{
    try {
        const location = await delivery.updateDeliveryProgress(order_id,longitude,latitude,status)
        console.log("successfully updated delivery progress")
    } catch (error) {
        throw new Error("error from the service",error);
    }
}