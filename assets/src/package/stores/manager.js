import actions from './actions';
import gateways from './gateways';
import events from './events';
import blockConditions from './block-conditions';
import './subscribers/migrate-gateways-settings';

const { register, dispatch } = wp.data;

register( gateways );
register( events );
register( actions );
register( blockConditions );

dispatch( 'jet-forms/block-conditions' ).register( window.jetFormBlockConditions );
dispatch( 'jet-forms/events' ).register( window.jetFormEvents.types );

const { rest_query_states } = window.jetFormBlockConditions;
const { addRenderStates } = wp.data.dispatch( 'jet-forms/block-conditions' );

wp.domReady( () => {
	wp.apiFetch( rest_query_states ).then( response => {
		addRenderStates( response.items );
	} ).catch( console.error );
} );