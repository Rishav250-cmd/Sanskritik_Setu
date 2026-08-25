const jwt = require('jsonwebtoken');

const generatetoken = (user) =>{
     let token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_KEYS, {expiresIn: '1h'});
     return token;
}

module.exports.generatetoken = generatetoken