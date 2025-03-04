const signUp = require('../services/customerSignup');  

exports.register = async (req,res)=>{
    try {
        const register =await signUp.register(req.body);
        res.status(200).json({
            message: 'user successfully registered',
        });
    } catch (error) {
        console.log(error,'error occured while registering user controller error');
    }
}
exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const login = await signUp.login(email,password);
        res.status(200).json({
            message: 'login successfull',
            token: login,
        });
    } catch (error) {
        console.log(error,'error occured while loging in the user in the controller');
    }
}
//customer controller