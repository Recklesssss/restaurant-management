const db = require("../../../config/database")

exports.ordering = async(restaurant_id, user_id, total_price, status)=>{
    try {
       const ordered = await db.query(`INSERT INTO orders (restaurant_id, user_id, total_price, status) VALUES ($1, $2, $3, $4) RETURNING*`,[restaurant_id, user_id, total_price, status])
       console.log("successfully ordered and inserted into database")
       return ordered.rows[0]
    } catch (error) {
        console.error("error from the model",error)
    }
}
exports.ordered_items = async(order_id, item_id,quantity,price)=>{ // this is used for the manager to know what item the user ordered 
    try {
        const orderedItems = await db.query(`INSERT INTO order_items ( order_id, item_id,quantity,price ) VALUES ($1, $2, $3, $4)`,[ order_id,item_id,quantity,price])
    } catch (error) {
        
    }
} 
exports.orders = async(user_id)=>{
    try {
        const order = await db.query(`SELECT * FROM orders WHERE user_id = $1`,[user_id])
        console.log("successfully fetched orders from database")
        return order.rows[0]
    } catch (error) {
        console.error("error from the model",error)
    }
}
exports.editOrder = async(order_id, status)=>{
    try {
        const edit = await db.query("UPDATE orders set status = $1 where order_id = $2",[status,order_id])
        console.log("sucessfully updated order from database")
    } catch (error) {
        console.error("error from the model",error)
    }
}