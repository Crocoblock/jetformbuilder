import actions from './actions';
import gateways from './gateways';
import events from './events';
import './subscribers/migrate-gateways-settings';

const { register, dispatch } = wp.data;

register( gateways );
register( events );
register( actions );

dispatch( 'jet-forms/events' ).register( window.jetFormEvents );