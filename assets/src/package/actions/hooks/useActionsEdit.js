import useActions from './useActions';

export const useActionsEdit = () => {
	const [ actions, setActions ] = useActions();

	const moveAction = ( fromIndex, toIndex ) => {
		const item         = JSON.parse(
			JSON.stringify( actions[ fromIndex ] ) ),
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

	const toggleExecute = ( action ) => {
		updateActionObj( action.id, {
			is_execute: !(
				action.is_execute ?? true
			),
		} );
	};

	return {
		actions,
		setActions,
		moveAction,
		deleteAction,
		updateActionObj,
		toggleExecute,
	};
};

export default useActionsEdit;