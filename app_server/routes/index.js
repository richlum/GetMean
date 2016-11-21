var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

//var homepageController = function(req,res,next){
//	res.render('index',{title:'My Express'});
//};



/* GET home page. */
//router.get('/', homepageController);
router.get('/', ctrlMain.index ); 

module.exports = router;
