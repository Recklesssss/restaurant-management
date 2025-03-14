const customize = require("../services/customization")

exports.updateProfile = async(req,res)=>{
    try {
        const{user_id,profile_picture}= req.body;
        const profile = customize.updateProfile(user_id,profile_picture)
        res.status(200).json({
            message: "successfully updated"
        })
    } catch (error) {
        throw new Error("error from controller",error);
    }
}
exports.updateAddress = async(req,res)=>{
    try {
        const {addresses,user_id} = req.body;
        const address = customize.updateAddress(addresses,user_id)
        res.status(200).json({
            message: "successfully updated"
        })
    } catch (error) {
        throw new Error("error from controller",error);
    }
}
exports.updateName = async(req,res)=>{
    try {
        const {user,user_id} = req.body;
        const address = customize.updateName(user,user_id)
        res.status(200).json({
            message: "successfully updated"
        })
    } catch (error) {
        throw new Error("error from controller",error);
    }
}
exports.updatePhone = async(req,res)=>{
    try {
        const {phone,user_id} = req.body ; 
        const phoneNum = customize.updatePhone(phone,user_id)
        res.status(200).json({
            message: "successfully updated"
        })
    } catch (error) {
        throw new Error("error from controller",error);
    }
}