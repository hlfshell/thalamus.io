var express = require('express');

module.exports = function(app){
	
	var lightbulbRouter = express.Router();
	
	lightbulbRouter.route('/:id')
	
	return lightbulbRouter;
		
};