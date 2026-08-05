import useActions from './useActions';
import {
	getActionRelation,
} from '../helpers/actionRelations';

function withoutActionBranch( actions, action ) {
	const idsToDelete = new Set( [ action.id ] );
	const collectChildren = actionId => {
		const current = actions.find( item => item.id === actionId );

		for ( const childId of getActionRelation( current ).children ?? [] ) {
			if ( idsToDelete.has( childId ) ) {
				continue;
			}
			idsToDelete.add( childId );
			collectChildren( childId );
		}
	};

	collectChildren( action.id );

	return actions
		.filter( current => !idsToDelete.has( current.id ) )
		.map( current => {
			const relation = getActionRelation( current );

			if ( !relation.children?.some(
				childId => idsToDelete.has( childId ),
			) ) {
				return current;
			}

			return {
				...current,
				settings: {
					...current.settings,
					_relation: {
						...relation,
						children: relation.children.filter(
							childId => !idsToDelete.has( childId ),
						),
					},
				},
			};
		} );
}

function getSyncedChild( current, source, props ) {
	if ( !source ) {
		return current;
	}

	const relation = getActionRelation( current );
	const sourceRelation = getActionRelation( source );

	if (
		!sourceRelation.children?.includes( current.id ) ||
		relation.parent !== source.id
	) {
		return current;
	}

	const syncedProps = {};

	if ( props.hasOwnProperty( 'events' ) ) {
		syncedProps.events = [ ...( props.events ?? [] ) ];
	}
	if ( props.hasOwnProperty( 'conditions' ) ) {
		syncedProps.conditions = JSON.parse(
			JSON.stringify( props.conditions ?? [] ),
		);
	}
	if ( props.hasOwnProperty( 'condition_operator' ) ) {
		syncedProps.condition_operator = props.condition_operator;
	}
	if ( props.hasOwnProperty( 'is_execute' ) ) {
		syncedProps.is_execute = props.is_execute;
	}

	return Object.keys( syncedProps ).length
		? { ...current, ...syncedProps }
		: current;
}

/**
 * @return {{moveAction: moveAction, updateActionObj: updateActionObj,
 *     setActions: (function(*=): void), toggleExecute: toggleExecute, actions:
 *     *, deleteAction: deleteAction, addActionProps: addActionProps}}
 */
// eslint-disable-next-line max-lines-per-function
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
		const action = actions[ index ];

		if ( !action ) {
			return;
		}

		setActions( withoutActionBranch( actions, action ) );
	};

	const updateActionObj = ( id, props ) => {
		const source = actions.find( action => action.id === id );
		const newActions = actions.map( current => {
			if ( id !== current.id ) {
				return getSyncedChild( current, source, props );
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

// backward compatibility
window.JetFBHooks                = window.JetFBHooks ?? {};
window.JetFBHooks.useActionsEdit = useActionsEdit;

export default useActionsEdit;
