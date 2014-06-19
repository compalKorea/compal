/**
 * Created by Administrator on 2014-06-16.
 */
var nodemailer = require("nodemailer");

/**
 * 메일 보내기
 *
 * @param to : 여러 사람한테 보낼때에는 , 구분첨을 준다.(콤마)
 * @param subject
 * @param text
 */
exports.sendMail = function(to, subject, text){
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "compalasia@gmail.com",
            pass: "compal12"
        }
    });

    smtpTransport.sendMail({
        from: "compal <compalaisa@gmail.com>", // sender address
        to: to, // comma separated list of receivers
        subject: subject, // Subject line
        text: text // plaintext body
    }, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    });
};