const db = require('../../../config/database');
const bcrypt = require('bcryptjs');

exports.register = async (name,email,password,role)=>{
try {
    const hashedPassword = await bcrypt.hash(password,10);
    const query = await db.query(
        `INSERT into users(name,email,password,role,created_at)values($1,$2,$3,$4,$5)`
        ,[name,email,hashedPassword,role,NOW()]
    );
    console.log(`user successfully registered with name and role of ${name,' ',role}`);
} catch (error) {
    throw new Error('error occured while registering user the problem is in database');
}}

exports.login =async(email)=>{
    try {
        const query =await db.query(`
            SELECT * FROM users WHERE email = $1
        `,[email]);
        if(query.rows.length === 0){
            throw new Error('user not found');
        }
        console.log('login successfull');
        return query.rows[0];
    } catch (error) {
        throw new Error('error occured while loging in the user in the database');
    }}
//customer model