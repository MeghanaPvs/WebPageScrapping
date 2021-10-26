var express = require('express');
var router = express.Router();
var storiesRouter = require('./getStories');

router.get('/getTimeStories',storiesRouter);

module.exports = router;

//POSTMAN URL: http://localhost:5050/getTimeStories