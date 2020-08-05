const Joi = require('joi');

module.exports = {

	signup: Joi.object().keys({
		firstname: Joi.string().alphanum().min(3).max(30).required(),
		lastname: Joi.string().alphanum().min(3).max(30).required(),
		email: Joi.string().required().email(),
		password: Joi.string().required()
    }),

	changePassword: Joi.object({
	    oldPassword: Joi.string().required(),
	    newPassword: Joi.string().required(),
	    confirmNewPassword: Joi.string().required()
	}),

	usr_login: Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string().required()
	})

}