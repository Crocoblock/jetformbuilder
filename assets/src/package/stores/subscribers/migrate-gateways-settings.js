const endMigrate = new CustomEvent( 'jfb.endMigrate' );

const {
	select,
	dispatch,
} = wp.data;

const getMeta = () => {
	return select( 'core/editor' ).getEditedPostAttribute( 'meta' );
};

const editMeta = ( name, objectValue ) => {
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
		response.push( action_id );
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

	if ( ! on_success.length && ! on_failed.length && ! on_before.length ) {
		throw 'nothing_to_migrate';
	}

	actions = actions.map( action => {
		if ( ! on_success.includes( action.id ) &&
		     ! on_failed.includes( action.id ) &&
		     ! on_failed.includes( action.id )
		) {
			return action;
		}
		action.conditions = action.conditions ?? [];
		const events = [];

		if ( on_success.includes( action.id ) ) {
			events.push( 'success-gateway' );
		}
		if ( on_failed.includes( action.id ) ) {
			events.push( 'failed-gateway' );
		}
		if ( on_before.includes( action.id ) ) {
			events.push( 'default-process' );
		}

		action.conditions = [
			{ type: 'event', events },
			...action.conditions,
		];

		return action;
	} );

	return actions;
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

	try {
		actions = migrate( gateways, actions );
	} catch ( error ) {
		return;
	}

	editMeta( '_jf_actions', actions );
};

const unsubscribe = wp.data.subscribe( () => {
	document.dispatchEvent( endMigrate );

	runEvent();
} );

document.addEventListener( 'jfb.endMigrate', () => unsubscribe() );
//unsubscribe();