const db = require("../../../config/database");

exports.updateProfile = async(user_id,profile_picture)=>{
    try {
        const profile = await db.query(`
            update users set profile_picture = $1 where user_id = $2
            `,[profile_picture,user_id])
        console.log("successfully updated profile picture")
    } catch (error) {
        throw new Error("error from the database",error);
    }
}

exports.updateName = async(user,user_id)=>{
    try {
        const name = await db.query(`update users set name = $1 where user_id = $2`,[user,user_id])
        console.log("successfully updated user name")
    } catch (error) {
        throw new Error("error from the database",error);
    }
}
exports.updateAddress = async(addresses,user_id)=>{
    try {
        const address = await db.query(`update users set address = $1 where user_id = $2`,[addresses,user_id])
        console.log("successfully updated address")
    } catch (error) {
        throw new Error("error from the database",error);
    }
}
exports.updatePhone = async(phone,user_id)=>{
    try {
        const address = await db.query(`update users set phone = $1 where user_id = $2`,[phone,user_id])
        console.log("successfully updated phone")
    } catch (error) {
        throw new Error("error from the database",error);
    }
}
exports.getProfile = async(user_id)=>{
    try {
        const address = await db.query(`select * from users where user_id = $1`,[user_id])
        console.log("successfully retrieved")
        return address.rows[0]
    } catch (error) {
        throw new Error("error from the database",error);
    }
}