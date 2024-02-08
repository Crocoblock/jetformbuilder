import actions from './actions/store';
import gateways from './gateways/store';
import events from './events/store';
import blockConditions from './block-conditions/store';
import macros from './macros.button/store';
import validation from './validation/store';
import fields from './blocks/store';
import './migrations/migrate.gateways.settings';

const {
	      register,
	      dispatch,
      } = wp.data;
const {
	      addAction,
      } = wp.hooks;

const stores = [
	gateways,
	events,
	actions,
	blockConditions,
	macros,
	validation,
	fields,
];

stores.forEach( register );

dispatch( 'jet-forms/events' ).register( window.jetFormEvents.types );
dispatch( 'jet-forms/events' ).lockActions();
dispatch( 'jet-forms/validation' ).register( window.jetFormValidation );

addAction(
	'jet.fb.change.blockConditions.renderState',
	'jet-form-builder/events',
	function ( states ) {
		dispatch( 'jet-forms/events' ).clearDynamicEvents();

		const localEvents = states.map( ( { value } ) => {
			value = 'ON.' + value;

			return { value, label: value, isDynamic: true };
		} );

		dispatch( 'jet-forms/events' ).register( localEvents );
	},
);

dispatch( 'jet-forms/block-conditions' ).register(
	window.jetFormBlockConditions,
);
