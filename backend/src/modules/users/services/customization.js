const customize = require("../models/customization")

exports.updateProfile = async(user_id,profile_picture)=>{
    try {
        const profile = customize.updateProfile(user_id,profile_picture)
    } catch (error) {
        throw new Error("error from service",error);
    }
}
exports.updateName = async(user,user_id)=>{
    try {
        const name = customize.updateName(user,user_id)
    } catch (error) {
        throw new Error("error from service",error);
    }
}
exports.updateAddress = async(addresses,user_id)=>{
    try {
        const address = customize.updateAddress(addresses,user_id)
    } catch (error) {
        throw new Error("error from service",error);
    }
}
exports.updatePhone = async(phone,user_id)=>{
    try {
        const phoneNum = customize.updatePhone(phone,user_id)
    } catch (error) {
        throw new Error("error from service",error);
    }
}
exports.getProfile = async(user_id)=>{
    try {
        const profile = customize.getProfile(user_id)
        return profile
    } catch (error) {
        throw new Error("error from service",error);
    }
}