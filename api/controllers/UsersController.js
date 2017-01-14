/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		Users.find(function(err, users) {
			res.view({
				"name": "Wilfred Lemus",
				"age": 26,
				"profession": "Developer",
				"users": users
			})
		})
	},

	// get: function(req, res) {
	// 	res.send("Welcome");
	// },

	// index: function(req, res)
	// {
	// 	res.send("index");
	// },
	get: function(req, res)
	{
		res.send("get " + req.param("id"));
	},
	create: function(req, res)
	{
		res.send("create");
	},
	update: function(req, res)
	{
		res.send("update");
	},
	edit: function(req, res)
	{
		res.send("edit");
	},
	policy: function(req, res)
	{
		res.send("policy");
	}

};

