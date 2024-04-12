const {Signup_cookie} = require('./JWT.js');
const Query = require('../Database/Data.js');
async function Signup(req,res){
let {firstname , lastname ,email , password} = req.body;
firstname = firstname.toLowerCase()
lastname = lastname.toLowerCase()
email = email.toLowerCase()
await Query.create({firstname , lastname , email , password});
return res.status(200).redirect("/home");

}
async function Login(req,res){
    let {email , password} = req.body;
    const user = await Query.findOne({email, password});
    if(!user){
        return res.send("User not found");
    }
    const token = Signup_cookie(user);
    res.cookie("token",token);
    return res.redirect("/home");
}
module.exports = {Signup, Login};