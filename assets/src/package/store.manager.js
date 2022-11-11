import actions from './actions/store';
import gateways from './gateways/store';
import events from './events/store';
import blockConditions from './block-conditions/store';
import actionButtons from './action-buttons/store';
import macros from './macros.button/store';
import './migrations/migrate.gateways.settings';

const { register, dispatch } = wp.data;

register( gateways );
register( events );
register( actions );
register( blockConditions );
register( actionButtons );
register( macros );

dispatch( 'jet-forms/block-conditions' ).register(
	window.jetFormBlockConditions,
);
dispatch( 'jet-forms/events' ).register( window.jetFormEvents.types );
dispatch( 'jet-forms/events' ).lockActions();

