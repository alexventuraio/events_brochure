/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {



	_config: {
		actions: false,
		shortcuts: false,
		rest: false
	},

	/**
	 * `AuthController.login()`
	 */
	login: function (req, res) {
		// passport.authenticate('local', {
		// 	successRedirect: '/secure',
		// 	failureRedirect: '/'
		// })(req, res, function errorHandler(err) {
		// 	if (err) return res.negotiate(err);
		// 	return res.notFound();
		// });
		passport.authenticate('local', function (err, user, info) {

			console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ CTRL:', err, user, info);

			if ((err) || (!user)) {
				res.send({
					message: info.message,
					user: user
				});

				// res.send(err);
				return;
			}

			req.logIn(user, function (err) {
				if (err) {
					return res.send(err);
				}

				res.send({
					message: info.message,
					user: user
				});
			});
		})(req, res);
	},


	/**
	 * `AuthController.logout()`
	 */
	logout: function (req, res) {
		req.logout();
		req.session.user = null;
		req.session.flash = 'You have logged out';
		res.redirect('/');
	}

};

