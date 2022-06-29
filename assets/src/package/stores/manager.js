import actions from './actions';
import gateways from './gateways';
import events from './events';
import blockConditions from './block-conditions';
import actionButtons from './action-buttons';
import './subscribers/migrate-gateways-settings';

const { register, dispatch } = wp.data;

register( gateways );
register( events );
register( actions );
register( blockConditions );
register( actionButtons );

dispatch( 'jet-forms/block-conditions' ).register( window.jetFormBlockConditions );
dispatch( 'jet-forms/events' ).register( window.jetFormEvents.types );
dispatch( 'jet-forms/events' ).lockActions();

const { rest_query_states } = window.jetFormBlockConditions;
const { addRenderStates } = dispatch( 'jet-forms/block-conditions' );

wp.domReady( () => {
	wp.apiFetch( rest_query_states ).then( response => {
		addRenderStates( response.items );
	} ).catch( console.error );
} );

