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

		setActions( prevActions => {
			prevActions.splice( toIndex, 1, item );
			prevActions.splice( fromIndex, 1, replacedItem );

			return [ ...prevActions ];
		} );
	};

	const deleteAction = ( index ) => {
		setActions( prevActions => {
			prevActions.splice( index, 1 );

			return [ ...prevActions ];
		} );
	};

	const updateActionObj = ( id, props ) => {
		setActions( prevActions => prevActions.map( current => {
			if ( id !== current.id ) {
				return current;
			}
			return {
				...JSON.parse( JSON.stringify( current ) ),
				...props,
			};
		} ) );
	};

	return {
		actions,
		setActions,
		moveAction,
		deleteAction,
		updateActionObj,
	};
};

export const useActionSingle = () => {
	const ActionCallback = useSelect( select => select( 'jet-forms/actions' ).getCurrentCallback(), [] );
	const { getCallback, setCurrentAction } = useDispatch( 'jet-form/actions', [] );

	return { ActionCallback, getCallback, setCurrentAction };
}