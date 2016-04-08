'use strict';

var router = require('express').Router();

router.use('/', function(req, res, next) {
	//console.log(req.session);
	if(!req.session.passport.user)
		res.sendStatus(401);
	next();
});

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

module.exports = router;