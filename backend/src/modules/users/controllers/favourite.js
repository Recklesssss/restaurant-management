const favourite = require("../services/favourite")

exports.favouriteMenu = async(req,res)=>{
    try {
        const {user_id} = req.body;
        const  favouriteMenu = favourite.favouriteMenu(user_id)
        res.status(200).json({
            menu:favouriteMenu
        })
    } catch (error) {
        throw new Error("service error",error);
    }
}
exports.favouriteRestaurant = async(req,res)=>{
    try {
        const {user_id} = req.body;
        const favouriteRestaurant = favourite.favouriteRestaurant(user_id)
        res.status(200).json({
            menu:favouriteRestaurant
        })
    } catch (error) {
        throw new Error("service error",error);
    }
}