	
  /**
 * To Get All Infomation About User
 * @route GET /user/getAll
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  	
 /**
 * To Get Infomation About User By Id
 * @route GET /user/getById/{id}
 * @group User - Operations about user
 * @param {integer} id.path.required - Integer Only - eg: 1
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

  /**
 * @typedef User_Signup
 * @property {string} firstname.required - Name require - eg: ram
 * @property {string} lastname.required - LastName require - eg: shah
 * @property {string} email.required - Email require - eg: shah@gmail.com
 * @property {string} password.required - Password require - eg: Password@12
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 /**
 * To Signup
 * @route POST /user/signup
 * @group User - Operations about user
 * @param {User_Signup.model} user.body.required - the new user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */


 /**
 * @typedef User_Login
 * @property {string} email.required - Some description for email - eg: xyz@agmail.com
 * @property {string} password.required - Some description for password - eg: Admin@12
 */

 /**
 * To Login
 * @route POST /user/usr_login
 * @param {User_Login.model} user.body.required
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 /**
 * @typedef Account_Activation
 * @property {string} verificationCode.required - Verification Code - eg: bFKwMum2eK
 */

 /**
 * To Active Account By Passing Verification Code
 * @route PUT /user/accountActivate
 * @group User - Operations about user
 * @param {string} verificationCode.query.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 /**
 * @typedef Change_Password
 * @property {string} oldPassword.required - corrent password - eg: Admin@12
 * @property {string} newPassword.required - New password - eg: Admin@123
 * @property {string} confirmNewPassword.required - Confirm New Password - eg: Admin@123
 */

 /** 
 * To Change Password
 * @route PUT /user/change-password 
 * @param {Change_Password.model} user.body.required
 * @group User - Operations about user 
 * @returns {object} 200 - An array of user info 
 * @returns {Error}  default - Unexpected error 
 * @security JWT 
 */

 /**
 * @typedef Update_Profile
 * @property {string} firstname.required - corrent password - eg: ram
 * @property {string} lastname.required - New password - eg: shah
 * @property {string} email.required - Confirm New Password - eg: xyz@gmail.com
 * @property {string} password.required - Confirm New Password - eg: Admin@12
 */

 /** 
 * To Update Profile Using Auth Token
 * @route PUT /user/Update 
 * @param {Update_Profile.model} user.body.required
 * @group User - Operations about user 
 * @returns {object} 200 - An array of user info 
 * @returns {Error}  default - Unexpected error 
 * @security JWT
 */

 /**
 * @typedef Forget_Password
 * @property {string} email.required - Enter Register Email - eg: xyz@gmail.com
 */

 /**
 * Forgotten Password 
 * @route PUT /user/forget-password
 * @group User - Operations about user
 * @param {Forget_Password.model} user.body.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 
 exports.user = function() {}

 