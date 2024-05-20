const {
	      select,
	      dispatch,
      } = wp.data;

let prevActions;

const watcher = () => {
	const rawMeta = (
		select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {}
	);

	if ( prevActions === rawMeta[ '_jf_actions' ] ||
		'string' !== typeof rawMeta[ '_jf_actions' ]
	) {
		return;
	}
	prevActions = rawMeta[ '_jf_actions' ];

	const actions = JSON.parse( prevActions );

	const verificationIndex = actions.findIndex(
		( { type } ) => 'verification' === type,
	);
	const hasVerification   = -1 !== verificationIndex;

	const currentAction = select( 'jet-forms/actions' ).getAction(
		'verification',
	);

	if ( 0 < verificationIndex && hasVerification ) {
		const firstAction = actions[ verificationIndex ];
		actions.splice( verificationIndex, 1 );

		dispatch( 'core/editor' ).editPost( {
			meta: {
				...rawMeta,
				_jf_actions: JSON.stringify( [
					firstAction,
					...actions,
				] ),
			},
		} );
	}

	// this action is already disabled
	if ( currentAction.disabled === hasVerification ) {
		return;
	}

	dispatch( 'jet-forms/actions' ).editAction(
		'verification',
		{ disabled: hasVerification },
	);

};

const VerificationActionWatcher = () => setTimeout( watcher, 0 );

export default VerificationActionWatcher;