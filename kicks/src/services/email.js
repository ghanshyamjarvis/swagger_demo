const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghanshyam.jarvis@gmail.com',
    pass: 'nzbwmwznczmdurve'
  }
});

module.exports = {

  activationsMail: function (data) {

    //console.log(data.code)
    return new Promise((resolve) => {
      const link = 'http://127.0.0.1:5000' + '/accountActivate?verificationCode=' + data.code;


      const mailOptions = {
        from: '"Ecommerce" <noreply@ecommerce.com>', // sender add  ress
        to: data.email,
        subject: 'Please confirm your email account',
        html: '\n\n' + 'Please Click here to verify <a href=' + link + '> Click here</a>'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        //console.log(info)
        if (error) {
          console.log('Email Error', error);
          // return false;
          resolve(error);
        } else {
          // callback(true);
          console.log('Email sent: ' + info.response);
          resolve(info);
          // return true;
        }
      })
    })
  }
};