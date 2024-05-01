const {Login_cookie} = require('./JWT.js');
function authorize(token){
      if(token == undefined){
            return 0;
      }
      if(Login_cookie(token)==null){
            return 0;
      }
      return 1;
}

module.exports = authorize;