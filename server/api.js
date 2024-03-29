//Including all NPM packages
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
//create router for API Call
var router = express.Router();

//function for generating OTP
function generateOTP() {
    // which stores all digits 
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

//functional API for otp  
router.post('/OTPlogin', function (req, res, next) {
    var otp = generateOTP()
       var token = jwt.sign({ foo: 'bar' }, app.get('superSecret'), { expiresIn: 60 * 60 * 24 });
    var reciever = '+91' + req.body.number
    // client.messages.create({
    //     body: otp,
    //     to: reciever,  // Text this number
    //     from: '+12027596279' // From a valid Twilio number
    // }).then((message) => {
        // });
            res.json({ status: true, message: otp ,token: token });
})


//all router method to call in server.js
module.exports = router;
