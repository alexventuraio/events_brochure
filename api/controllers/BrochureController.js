/**
 * BrochureController
 *
 * @description :: Server-side logic for managing brochures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



	/**
	 * `BrochureController.index()`
	 */
	index: function (req, res) {
		return res.view({
			todo: 'index() is not implemented yet!',
			questions: [{title: 'Freddy a presidente?', content: 'Últimamente Freddy se encuentra con más diplomacia.'}]
		});
	},


	/**
	 * `BrochureController.action()`
	 */
	action: function (req, res) {
		return res.json({
			todo: 'action() is not implemented yet!'
		});
	}

};

