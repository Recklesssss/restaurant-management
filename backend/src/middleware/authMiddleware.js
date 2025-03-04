const jwt = require('jsonwebtoken');

const varifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json(
                {message : 'Token not found'}
            );
        }
        try {
            const decoded =jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log("the decoded user is", req.user);
            next();
        } catch (error) {
            console.log(error)
        }
    }
};
module.exports = varifyToken;