import PhoneFieldData from './PhoneFieldData';
import PhoneRestriction from '../restrictions/PhoneRestriction';
import './style.scss';

// Use JetPlugins hooks (same as other JetFormBuilder fields)
const { addFilter } = JetPlugins.hooks;


// Register input handler
addFilter(
	'jet.fb.inputs',
	'jet-form-builder/phone-field',
	function ( inputs ) {
		inputs.push( PhoneFieldData );
		return inputs;
	},
	10
);

// Register phone validation restriction
const addRestriction = ( restrictions ) => {
	restrictions.push( PhoneRestriction );
	return restrictions;
};

// Add to both default and advanced restrictions
addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/phone-field',
	addRestriction,
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/phone-field',
	addRestriction,
);