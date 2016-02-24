var express = require('express');
var router = express.Router();
var homepageController = require('../controllers/homepage_controller');
var otherController = require('../controllers/other_controller');
/* GET home page. */
router.get('/', homepageController.index);
router.get('/about', otherController.about);
module.exports = router;
