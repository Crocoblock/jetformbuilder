const getMeta = () => {
	const { select } = wp.data;
	return select( 'core/editor' ).getEditedPostAttribute( 'meta' );
};

const editMeta = ( name, objectValue ) => {
	const { dispatch } = wp.data;

	const { editPost } = dispatch( 'core/editor' );
	const formBuilderMeta = getMeta();

	editPost( {
		meta: (
			{
				...formBuilderMeta,
				[ name ]: JSON.stringify( objectValue ),
			}
		),
	} );
};

const getActiveActions = actions => {
	const response = [];

	for ( const [ action_id, { active = false } ] of Object.entries( actions ) ) {
		if ( ! active ) {
			continue;
		}
		response.push( + action_id );
	}

	return response;
};

const getGatewaysActions = () => {
	const formBuilderMeta = getMeta();

	let gateways = {},
		actions = [];

	try {
		gateways = JSON.parse( formBuilderMeta[ '_jf_gateways' ] );
	} catch ( error ) {
		return [];
	}

	if ( 1 === gateways.last_migrate ) {
		throw 'migrated';
	}

	try {
		actions = JSON.parse( formBuilderMeta[ '_jf_actions' ] );
	} catch ( error ) {
		return [ gateways ];
	}

	return [ gateways, actions ];
};

const migrate = ( gateways, actions ) => {
	const on_success = getActiveActions( gateways[ 'notifications_success' ] ?? {} );
	const on_failed = getActiveActions( gateways[ 'notifications_failed' ] ?? {} );
	const on_before = getActiveActions( gateways[ 'notifications_before' ] ?? {} );
	const use_redirect = gateways[ 'use_success_redirect' ] ?? false;

	let has_redirect = false;

	if ( ! on_success.length && ! on_failed.length && ! on_before.length && ! use_redirect ) {
		throw 'nothing_to_migrate';
	}

	return actions.map( action => {
		action.events = action.events ?? [];

		if ( on_success.includes( action.id ) ) {
			action.events.push( 'GATEWAY.SUCCESS' );
		}
		if ( on_failed.includes( action.id ) ) {
			action.events.push( 'GATEWAY.FAILED' );
		}
		if ( on_before.includes( action.id ) ) {
			action.events.push( 'DEFAULT.PROCESS' );
		}
		if ( use_redirect && ! has_redirect && 'redirect_to_page' === action.type ) {
			action.events.push( 'GATEWAY.SUCCESS' );
			has_redirect = true;
		}

		return action;
	} );
};

const runEvent = () => {
	let gateways = {}, actions = [];

	try {
		[ gateways = {}, actions = [] ] = getGatewaysActions();
	} catch ( error ) {
		return;
	}

	gateways.last_migrate = 1;
	editMeta( '_jf_gateways', gateways );

	const withConditions = [];
	try {
		withConditions.push( ...migrate( gateways, actions ) );
	} catch ( error ) {
		return;
	}

	editMeta( '_jf_actions', withConditions );
};

wp.domReady( () => setTimeout( runEvent, 0 ) );