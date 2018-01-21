var express = require('express');
var router = express.Router();
var moviecontrollers=require('../controllers/moviecontrollers');
/* GET users listing. */
router.get('/all',moviecontrollers.getAllMovies );
router.post('/add',moviecontrollers.addNewMovie);

module.exports = router;
