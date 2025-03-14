const express = require('express');
const dontenv =require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const signUp = require('./src/modules/users/routes/customerSignup');
const customer= require('./src/modules/users/routes/customerRoutes');
const menu = require('./src/modules/users/routes/menu');
const restaurant =require("./src/modules/users/routes/restaurantInfo");
const notificationRoute = require("./src/modules/users/routes/notification");

app.use(express.json());
app.use('/signup',signUp);
app.use('/users/customer',customer);
app.use("/customer", menu)
app.use("/customer", restaurant)
app.use("/api/notifications", notificationRoutes);

app.listen(port,()=>{
    console.log(` server is running on port ${port}`);
})