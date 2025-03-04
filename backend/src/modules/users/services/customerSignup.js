const bcrypt = require('bcryptjs');
const signUp = require('../models/customerSignup');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (userDatas)=>{
    try {
        const {email, password, name, role}= userDatas
        const register = await signUp.register(email, password, name, role);
        console.log(`data passed successfuly in customerSignup service`);
        return register;
    } catch (error) {
        throw new Error('error occured while registering user the problem is in the service');
    }
}
exports.login = async (email, password)=>{
    try {
        const login = await signUp.login(email);
        if (!login || login.rows.length === 0) {
            throw new Error('User not found');
        }
        const Dbpassword = login.rows[0];
        const isMatch = await bcrypt.compare(password, Dbpassword.password);
        if(!isMatch){
            throw new Error('password not matched');
        }
        else{
            const token = jwt.sign({email: email, role: Dbpassword.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
            return token;
        }
    } catch (error) {
        throw new Error('error occured while loging in the user in the service');
    }
}

// customer service