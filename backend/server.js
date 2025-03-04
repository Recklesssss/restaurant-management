const express = require('express');
const dontenv =require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const signUp = require('./src/modules/users/routes/customerSignup');
const customer= require('./src/modules/users/routes/customerRoutes');
const menu = require('./src/modules/users/routes/menu');

app.use(express.json());
app.use('/signup',signUp);
app.use('/users/customer',customer);
app.use("/customer", menu)

app.listen(port,()=>{
    console.log(` server is running on port ${port}`);
})