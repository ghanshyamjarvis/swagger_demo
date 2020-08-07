


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
 * To Signup
 * @route POST /user/signup
 * @group User - Operations about user
 * @param {string} firstname.path.required - Firstname
 * @param {string} lastname.path.required -  Lastname
 * @param {string} email.path.required -  Email
 * @param {string} password.path.required -  Password
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 /**
 * @typedef User
 * @property {string} email.required - Some description for email - eg: shyam@agmail.com
 * @property {string} password.required - Some description for password - eg: Admin@12
 */

/**
 * To Login
 * @route POST /user/usr_login
 * @param {User.model} user.body.required - the new user
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 /**
 * To Change
 * @route PUT /user/changes
 * @param {User.model} user.body.required - the new user
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

 exports.user = function() {}