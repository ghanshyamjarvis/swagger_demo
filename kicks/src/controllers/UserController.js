
const express =require('express');
const router = express.Router();
const UserAction = require('../action/UserAction');
const Auth = require('../services/Auth');
const validateBody = require('../helper/validate-body');


/**
 * To Get All Infomation About User
 * @route GET /user/getAll
 * @group User - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/getAll', UserAction.getAll);


router.get('/getById/:id',UserAction.getUserid);
router.post('/signup', validateBody('signup'), UserAction.signUp);
router.post('/usr_login', validateBody('usr_login'), UserAction.userLogin);


router.put('/accountActivate',UserAction.accountActivate);
router.put('/change-password', Auth.verifyToken, validateBody('changePassword'), UserAction.changePassword);
router.put('/Update', Auth.verifyToken, UserAction.updateProfile);
router.put('/forget-password', UserAction.forgetPassword);
router.put('/reset-password/:verificationCode', UserAction.resetPassword);

module.exports = router;

