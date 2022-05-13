const { useActions } = JetFBHooks;

const {
	useSelect,
	useDispatch,
} = wp.data;

export const useActionsEdit = () => {
	const [ actions, setActions ] = useActions();

	const moveAction = ( fromIndex, toIndex ) => {
		const item = JSON.parse( JSON.stringify( actions[ fromIndex ] ) ),
			replacedItem = JSON.parse( JSON.stringify( actions[ toIndex ] ) );

		actions.splice( toIndex, 1, item );
		actions.splice( fromIndex, 1, replacedItem );

		setActions( [ ...actions ] );
	};

	const deleteAction = ( index ) => {
		actions.splice( index, 1 );

		setActions( [ ...actions ] );
	};

	const updateActionObj = ( id, props ) => {
		const newActions = actions.map( current => {
			if ( id !== current.id ) {
				return current;
			}
			return {
				...JSON.parse( JSON.stringify( current ) ),
				...props,
			};
		} );

		setActions( [ ...newActions ] );
	};

	return {
		actions,
		setActions,
		moveAction,
		deleteAction,
		updateActionObj,
	};
};

export const useActionCallback = ( actionType = false ) => {
	return useSelect( select => {
		return actionType
			? select( 'jet-forms/actions' ).getCallback( actionType )
			: select( 'jet-forms/actions' ).getCurrentCallback();
	}, [] );
}

export const useCurrentAction = () => {
	const [ currentAction, currentSettings ] = useSelect( select => {
		const state = select( 'jet-forms/actions' ).getCurrentAction();
		const settings = select( 'jet-forms/actions' ).getCurrentSettings();

		return [ state, settings ];
	} );

	return { currentAction, currentSettings };
}

/**
 * Update action in meta
 * @returns {function(*=): void}
 */
export const useUpdateCurrentActionMeta = () => {
	const { currentAction } = useCurrentAction();
	const { updateActionObj } = useActionsEdit();

	return newProps => {
		updateActionObj( currentAction.id, newProps );
	};
};


/**
 * Update current meta in store (while editing it in modal)
 * @returns {{setCurrentAction, clearCurrent, setTypeSettings, updateCurrentConditions}}
 */
export const useUpdateCurrentAction = () => {
	const { currentAction } = useCurrentAction();
	const { setCurrentAction, clearCurrent, updateCurrentConditions } = useDispatch( 'jet-forms/actions', [] );

	const setTypeSettings = settings => {
		setCurrentAction( {
			...currentAction,
			settings: {
				...currentAction.settings,
				[ currentAction.type ]: settings,
			},
		} );
	};

	return {
		setCurrentAction,
		setTypeSettings,
		clearCurrent,
		updateCurrentConditions,
	};
}