const delivery = require("../services/trackorder");

exports.getDeliveryProgress = async (req,res)=>{
    try {
        const {order_id} = req.body
        const location = await delivery.getDeliveryProgress(order_id)
        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
exports.updateDeliveryProgress = async (req,res)=>{
    try {
        const {order_id,longitude,latitude,status} = req.body
        await delivery.updateDeliveryProgress(order_id,longitude,latitude,status)
        res.status(200).json("successfully updated delivery progress")
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}