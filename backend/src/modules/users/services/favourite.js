const favourite = require("../models/favourite")

exports.favouriteRestaurant = async(user_id)=>{
    try {
        const favouriteRestaurant = favourite.favouriteRestaurant(user_id)
        return favouriteRestaurant
    } catch (error) {
        throw new Error("service error",error);
        
    }
}
exports.favouriteMenu = async(user_id)=>{
    try {
        const favouriteMenu = favourite.favouriteMenu(user_id)
        return favouriteMenu
    } catch (error) {
        throw new Error("service error",error);
    }
}