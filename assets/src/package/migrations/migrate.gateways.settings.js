const waitForEditor = async () => {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			const postType = wp.data.select('core/editor').getCurrentPostType();
			if (postType) {
				clearInterval(interval);
				resolve();
			}
		}, 100);
	});
};

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

	for ( const [ actionId, { active = false } ] of Object.entries( actions ) ) {
		if ( ! active ) {
			continue;
		}
		response.push( + actionId );
	}

	return response;
};

const getGatewaysActions = () => {
	const formBuilderMeta = getMeta();

	let gateways = {},
		actions = [];

	try {
		gateways = JSON.parse( formBuilderMeta._jf_gateways );
	} catch ( error ) {
		return [];
	}

	if ( 1 === gateways.last_migrate ) {
		throw 'migrated';
	}

	try {
		actions = JSON.parse( formBuilderMeta._jf_actions );
	} catch ( error ) {
		return [ gateways ];
	}

	return [ gateways, actions ];
};

const migrate = ( gateways, actions ) => {
	const onSuccess = getActiveActions( gateways.notifications_success ?? {} );
	const onFailed = getActiveActions( gateways.notifications_failed ?? {} );
	const onBefore = getActiveActions( gateways.notifications_before ?? {} );
	const useRedirect = gateways.use_success_redirect ?? false;

	let hasRedirect = false;

	if ( ! onSuccess.length && ! onFailed.length && ! onBefore.length && ! useRedirect ) {
		throw 'nothing_to_migrate';
	}

	return actions.map( action => {
		action.events = action.events ?? [];

		if ( onSuccess.includes( action.id ) ) {
			action.events.push( 'GATEWAY.SUCCESS' );
		}
		if ( onFailed.includes( action.id ) ) {
			action.events.push( 'GATEWAY.FAILED' );
		}
		if ( onBefore.includes( action.id ) ) {
			action.events.push( 'DEFAULT.PROCESS' );
		}
		if ( useRedirect && ! hasRedirect && 'redirect_to_page' === action.type ) {
			action.events.push( 'GATEWAY.SUCCESS' );
			hasRedirect = true;
		}

		return action;
	} );
};

const runEvent = async () => {
	await waitForEditor();

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

wp.domReady(() => runEvent());