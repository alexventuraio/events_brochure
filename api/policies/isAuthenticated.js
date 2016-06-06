/**
 * Allow any authenticated user.
 * Briefly, we are telling Sails what to do if a user is not authenticated,
 * then we can bind this policy to any of the controllers in the app.
 */

module.exports = function (req, res, next) {

	// User is allowed, proceed to controller
	var is_auth = req.isAuthenticated();

	if (is_auth) {
		return next();
	}
	// User is not allowed
	else {
		return res.redirect("/login");
	}

};
