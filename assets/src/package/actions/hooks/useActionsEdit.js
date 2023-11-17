import useActions from './useActions';

/**
 * @returns {{moveAction: moveAction, updateActionObj: updateActionObj,
 *     setActions: (function(*=): void), toggleExecute: toggleExecute, actions:
 *     *, deleteAction: deleteAction, addActionProps: addActionProps}}
 */
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

	const addActionProps = ( props ) => {
		const actionProps = JSON.parse( JSON.stringify( props ) );

		actionProps.id = 0 > actionProps.id
		                 ? actionProps.id * -1
		                 : actionProps.id;

		setActions( [ ...actions, { ...actionProps } ] );
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
		addActionProps,
	};
};

export default useActionsEdit;