/**
 * Sponsor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		email				: { type: 'email', required: true, unique: true},
		encrypted_password	: { type: 'string', required: true },
		company_name		: { type: 'string', required: true },
		company_role		: { type: 'string', required: true },
		company_url			: { type: 'string', required: true },
		contact_name		: { type: 'string', required: true },
		contact_job			: { type: 'string', required: true },
		contact_telephone1	: { type: 'string', required: true },
		contact_telephone2	: { type: 'string', required: true },
		status_active		: { type: 'boolean', required: true, defaultsTo: false },

		// Add a reference to Brochures collection
		brochures: {
			collection: 'brochure',
			via: 'sponsor_id',
			through: 'sponsorhasbrochure'

			// dominant: true
		},

		// We don't wan't to send back encrypted password either
		toJSON: () => {
			var obj = this.toObject();
			delete obj.encrypted_password;
			delete obj._csrf;
			return obj;
		},
	}

};
