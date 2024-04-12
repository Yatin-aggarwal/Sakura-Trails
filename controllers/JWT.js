const jwt = require('jsonwebtoken');
const key = 'Ejjksfsfmsm'
function Signup_cookie(user){
       return jwt.sign({
            _id: user._id,
            email: user.email,
       },key);
}
function Login_cookie(token){
      if(!token){
          return null;
      }
      try{
          return jwt.verify(token,key);
      }
      catch(e){
          return null;
      }
}

module.exports = {Signup_cookie, Login_cookie};