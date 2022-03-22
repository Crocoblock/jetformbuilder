import hubspot from './proAddons/hubspot';
import addressAutocomplete from './proAddons/addressAutocomplete';
import convertkit from './proAddons/convertkit';
import mailerlite from './proAddons/mailerlite';
import moosend from './proAddons/moosend';
import stripe from './proGateways/stripe';

const { addFilter } = wp.hooks;

const addons = [
	addressAutocomplete,
	hubspot,
	convertkit,
	mailerlite,
	moosend,
];

const gateways = [
	stripe
];

const getModulesNames = modules => modules.map( item => (
	item.component.name
) );


const run = () => {
	addFilter( 'jet.fb.register.settings-page.tabs', 'jet-form-builder', modules => {
		const names = getModulesNames( modules );

		for ( const addon of addons ) {
			if ( names.includes( addon.component.name ) ) {
				continue;
			}
			modules.push( addon );
		}

		return modules;
	}, 1000 );

	addFilter( 'jet.fb.register.gateways', 'jet-form-builder', modules => {
		const names = getModulesNames( modules );

		for ( const gateway of gateways ) {
			if ( names.includes( gateway.component.name ) ) {
				continue;
			}
			modules.push( gateway );
		}

		return modules;
	}, 1000 );
};

if ( ! window?.JetFBPageConfig?.is_active ) {
	run();
}

