


/**
 * To Get All Infomation About User
 * @route GET /user/getAll
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

/**
 * To Get Infomation About User By Id
 * @route GET /user/getById
 * @group User - Operations about user
 * @param {integer} id.query.required - Integer Only - eg: 1
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
 * To Login
 * @route POST /user/usr_login
 * @group User - Operations about user
 * @param {string} email.path.required -  Email
 * @param {string} password.path.required -  Password
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

 exports.user = function() {}