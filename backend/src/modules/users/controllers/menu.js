const menu = require("../services/menu");

exports.menu =async(req,res)=>{
    const {restaurant_id} = req.params;
    try {
        const menuData = await menu.menu(restaurant_id);
        res.status(200).json({
            message: "Menu fetched successfully",
            data: menuData
        });
    } catch (error) {
        console.error("error in fetching menu from MENU controller");
    }

}