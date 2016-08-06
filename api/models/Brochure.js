/**
 * Brochure.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {

		index : { type: 'string' },
		action : { type: 'string' },

		// Add a reference to Sponsors collection
		sponsors: {
			collection: 'sponsor',
			via: 'brochure_id',
			through: 'sponsorhasbrochure'

			// dominant: true
		},
	}

};
