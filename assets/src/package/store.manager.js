import actions from './actions/store';
import gateways from './gateways/store';
import events from './events/store';
import blockConditions from './block-conditions/store';
import actionButtons from './action-buttons/store';
import macros from './macros.button/store';
import './migrations/migrate.gateways.settings';

const {
	      register,
	      dispatch,
      } = wp.data;
const {
	      addAction,
      } = wp.hooks;

register( gateways );
register( events );
register( actions );
register( blockConditions );
register( actionButtons );
register( macros );

dispatch( 'jet-forms/events' ).register( window.jetFormEvents.types );
dispatch( 'jet-forms/events' ).lockActions();

addAction(
	'jet.fb.change.blockConditions.renderState',
	'jet-form-builder/events',
	function ( states ) {
		dispatch( 'jet-forms/events' ).clearDynamicEvents();

		const events = states.map( ( { value } ) => {
			value = 'ON.' + value;

			return { value, label: value, isDynamic: true };
		} );

		dispatch( 'jet-forms/events' ).register( events );
	},
);

dispatch( 'jet-forms/block-conditions' ).register(
	window.jetFormBlockConditions,
);
