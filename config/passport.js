var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	bcrypt = require('bcrypt');

// Modules to make external API calls
var request = require('request');

// Helper functions
function findOneByAPI(id, next) {
	console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ Find by API:', id);

	var user = { id: 1, email: 'alguien@me.com', createdAt: '2016-06-05'};

	// if (err) {
	// 	return next(null, null);
	// } else {
		return next(null, user);
	// }
}

function findOneById(id, fn) {
	User.findOne(id).done(function (err, user) {
		if (err) {
			return fn(null, null);
		} else {
			return fn(null, user);
		}
	});
}

function findOneByEmail(u, fn) {
	User.findOne({
		username: u
	}).done(function (err, user) {
		// Error handling
		if (err) {
			return fn(null, null);
		// The User was found successfully!
		} else {
			return fn(null, user);
		}
	});
}

/* Passport session setup.
 * To support persistent login sessions, Passport needs to be able to
 * serialize users into and deserialize users out of the session. Typically,
 * this will be as simple as storing the user ID when serializing, and finding
 * the user by ID when deserializing.
 */
passport.serializeUser(function (user, done) {
	console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ Serialize User:', user);

	// done(null, user.id);
	done(null, user.email);
});

passport.deserializeUser(function (email, done) {
	console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ Deserialize User:', email);

	findOneByAPI(email, function (err, user) {
		done(err, user);
	});
});

/* Use the LocalStrategy within Passport.
 * Strategies in passport require a `verify` function, which accept
 * credentials (in this case, an email and password), and invoke a callback
 * with a user object.
 */
passport.use(new LocalStrategy({
	// By default, LocalStrategy expects to find credentials in parameters named username and
	// password. To rename these fields differently, just do it here:
	usernameField: 'email',
	passwordField: 'password'
}, function (username, password, done) {

	/* Find the user by username. If there is no user with the given
	 * username, or the password is not correct, set the user to `false` to
	 * indicate failure and set a flash message. Otherwise, return the
	 * authenticated `user`.
	 */

	console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ Parameters:', username, password);

	var options = {
		baseUrl: 'http://matchxperience.com.mx',
		uri: '/ws/acces.php',
		// baseUrl: 'https://aper-test.herokuapp.com',
		// uri: '/api/login',
		method: 'POST',
		json: true,
		headers: {
			// 'User-Agent': 'request',
			// 'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*'
		},
		qs: {
			usuario: username,
			password: password,
			// email: 'alex@me.com',
			// password: 'venturaa',
			// format: 'json'
		}
	};

	request(options, (err, response, body) => {
		if (err) { return done(err); }

		if (response.statusCode == 200) {
			console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸ Server Response:\n', body);

			return done(null, body, {
				message: 'Logged In Successfully!'
			});
		} else {
			return done(err, false, {
				message: 'Unknown user email: ' + username
			});
		}
	});

}));
