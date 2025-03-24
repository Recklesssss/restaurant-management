const db = require("../../../config/database");

exports.getDeliveryProgress = async (order_id)=>{
    try {
        const location = await db.query(`SELECT * FROM deliveries where order_id = $1`,[order_id])
        console.log("successfully retrieved from DB")
        return location.rows[0]
    } catch (error) {
        throw new Error("error from the database",error);
    }
}
exports.updateDeliveryProgress = async (order_id,longitude,latitude,status)=>{
    try {
        const location = await db.query(`update deliveries set longitude = $1, latitude = $2, status = $3 where order_id = $4`,[longitude,latitude,status ,order_id])
        console.log("successfully updated delivery progress")
    } catch (error) {
        throw new Error("error from the database",error);
    }
}