var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main')

/* GET home page. */
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/error', mainController.error);
router.get('/forgotpassword', mainController.forgotpassword);
router.get('/layout', mainController.layout);
router.get('/login', mainController.login);
router.get('/register', mainController.register);


module.exports = router;
