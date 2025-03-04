const menu = require("../models/menu");

exports.menu = async(restaurant_id) => {
    try {
        const menu = await menu.menu(restaurant_id);
        return menu;
    } catch (error) {
        console.error("error in fetching menu from MENU service");
    }
}