function OnUpdateEditableCellPlugin( store ) {

	const hasChanges = currentState => {
		for ( const stateKey in currentState ) {
			if ( store.getters[ `${ stateKey }/hasChanges` ] ) {
				return true;
			}
		}
		return false;
	};

	const toggleButtons = ( currentState, isDisable ) => {
		for ( const stateKey in currentState ) {
			const getButtons = store.getters[ `${ stateKey }/actions/byEvent` ];

			if ( 'function' !== typeof getButtons ) {
				continue;
			}

			const updateButtons = getButtons( 'update' );

			for ( const updateButton of updateButtons ) {
				store.commit(
					`${ stateKey }/actions/toggleDisabled`,
					{
						slug: updateButton.slug,
						force: isDisable,
					},
				);
			}
		}
	};

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		if ( ! typeParts.includes( 'updateEditableCell' ) ) {
			return;
		}
		if ( hasChanges( state ) ) {
			toggleButtons( state, false );
		} else {
			toggleButtons( state, true );
		}
	} );
}

export default OnUpdateEditableCellPlugin;