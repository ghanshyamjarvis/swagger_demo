const connection = require ('../models/db');
const UserModel = require('../models/account');
const randToken = require('rand-token');
const userEmail = require('../services/email');
const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

module.exports= {

	getAll: function (req, res) {
    UserModel.getAllRecord().then(async (data) => {
      res.json({status: true, data: data, message: "shows all record"})
    })
  },

  getUserid: function (req, res) {
    const {id}= req.query
    UserModel.getRecordById(id).then(async (data) => {
      res.json({status: true, data: data, message: "shows all record"})
    })
  },


  signUp: function (req, res) {
    const {email} = req.body;
    UserModel.findByEmail(email).then((findRes) => {
     if (Object.keys(findRes).length > 0){

      res.json({status:false, message:"Email Already Exits"})
    }else {
      const {firstname, lastname,email, password} = req.body;
      const data = {firstname, lastname, email, password, verificationCode : randToken.generate(10), is_verify: 0};
      UserModel.insert_data(data).then(async (userRes) => {
        const mailData = {
         code: data.verificationCode,
         email: data.email,
       }
       await userEmail.activationsMail(mailData).then(async (emailRes) => {
         res.json({status: true, message: 'Sign up success! Please verify your account!'
       });
       })
     })
    }
  })
   
      res.json({status: false, message: 'Sign up failed!'})
   
  },

  userLogin: async function (req, res) {
    const {email, password} = req.body;
    UserModel.findByCredential(email, password).then(async (finRes) => {
      if(Object.keys(finRes).length > 0) {
        if (finRes.is_verify == 0) {
          res.json({status: false, message: 'PLEASE VERIFY EMAIL ACCOUNT IS NOT VERIFY '});
        }else{
          if (Object.keys(finRes).length > 0) {
            jwt.sign({finRes}, 'data', (error, token) => {
            finRes['token'] = token; //token field add here
            res.json({status: true, message: 'Key Generate', data: finRes});
          })
          }else {
            res.json({status: false, message: 'Key Not Generate!'});
          }
        }
      } else {
        res.json({status: false, message: 'email or password is not vaild!'});
      }
    });
  },

  accountActivate: function (req,res) {
   const {verificationCode} = req.params;
   UserModel.findByverificationCode(verificationCode).then((findRes) => {
    UserModel.updateAccountVerify(1,verificationCode).then(async (userResponse) => {
      res.json({status: true, message: 'Account Activated Successfully'});
    })
  })
 },

 updateProfile: function (req, res) {
   const {firstname, lastname, email, password} = req.body;
   const data = {firstname, lastname, email, password}
   console.log(req.user.finRes.account_id)
   UserModel.update(req.user.finRes.account_id, data).then(async (updatedres) => {
    if (Object.keys(updatedres).length > 0) {
      res.json({status: true, message: 'Profile Updated Successfully'});
    } else {
      res.json({status: false, message: 'fail to update'})
    }
  })
 },


 changePassword: async function (req, res) {
  const {oldPassword, newPassword, confirmNewPassword} = req.body;
    //console.log(req.user.finRes.account_id)
    const userRes = await UserModel.findById(req.user.finRes.account_id);
    //console.log(userRes.password)
    if (userRes.password !== sha1(oldPassword)) {
      //console.log('message')
      res.json({status: false, message: 'You have entered wrong current password.'});
      return
    }

    if (newPassword !== confirmNewPassword) {
      res.json({status: false, message: 'Please enter same new password and confirm new password.'});
      return
    }

    new Promise((resolve) => {
      UserModel.updatePasswordById(req.user.finRes.account_id, newPassword).then(async (updatePasswordRes) => {
        (!updatePasswordRes)
        ? resolve({status: false, message: 'Update password fail! Please try again!'})
        : resolve({status: true, message: 'Your password has been updated successfully'})
      })
    }).then((response) => {
      res.json(response)
    })
  },


  forgetPassword: async function (req, res) {
   const {email} = req.body;
   const emailRes = await UserModel.findByemail(email);
   if (Object.keys(emailRes).length > 0) {
    const data = {email, verificationCode : randToken.generate(10)};
    const mailData = {
     code: data.verificationCode,
     email: data.email,
   }
   UserModel.updateverificationCodebyEmail(data.verificationCode, data.email).then(async (userResponse) => {
    userEmail.activationsMail(mailData).then(async (emailRes) => {
     res.json({status: true, message: 'Check Your Email reset Password!'
   });
   })
  })
 } else {
   res.json({status: false, message: 'Email Not Exits'})
 }
},

resetPassword: async function (req,res) {
  const {verificationCode} = req.params;
  const {newPassword, confirmNewPassword} = req.body;
  const data = await UserModel.findByverificationCode(verificationCode)
  if (Object.keys(data).length > 0) {
    if (newPassword !== confirmNewPassword) {
      res.json({status: false, message: 'Please enter same new password and confirm new password.'});
    } else{
      UserModel.updateNewPasswordByVerificationCode(data.account_id, newPassword).then(async (userResponse) => {
        res.json({status: true, message: 'New Password Successfully Change'});
      })
    }
  }else{
   res.json({status: false, message: 'data not match'});
 }
}

}