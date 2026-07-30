import BaseAction from '../abstract/BaseAction';

export const RELATION_KEY = '_relation';

export function getActionRelation( action ) {
	return action?.settings?.[ RELATION_KEY ] ?? {};
}

export function isChildAction( action ) {
	return undefined !== getActionRelation( action ).parent;
}

function setActionRelation( action, relation ) {
	action.settings = {
		...action.settings,
		[ RELATION_KEY ]: relation,
	};

	return action;
}

function createUniqueActionId( usedIds ) {
	let id;

	do {
		id = Math.floor( Math.random() * 8999 ) + 1000;
	} while ( usedIds.has( id ) );

	usedIds.add( id );

	return id;
}

/**
 * Creates a new action together with the children declared by its registered
 * action type.
 *
 * `initialSettings` contains the initial settings of the new action without the
 * action-type namespace. They will be stored in `settings[ actionType.type ]`.
 *
 * `children` contains action definitions in the action-flow format: 
 * [
 *     {
 *         type: 'registered_action_type',
 *         settings: {},
 *         events: [],
 *         conditions: [],
 *     },
 * ]
 *
 * Child definitions contain action types, not action IDs. This function
 * generates the instance IDs and writes both sides of `settings._relation`.
 *
 * @param  actionType {Object} Registered action type descriptor.
 * @param  actions    {Object[]} Existing form actions.
 * @return {{parent: Object, children: Object[]}}
 */
export function createActionGroup( actionType, actions = [] ) {
	const usedIds = new Set( actions.map( action => action.id ) );
	const parent = new BaseAction( {
		type: actionType.type,
		settings: actionType.initialSettings ?? {},
	} );

	parent.id = createUniqueActionId( usedIds );

	if ( actionType.initialSettings ) {
		parent.refactorSettings();
	}

	const children = ( actionType.children ?? [] ).map( childDefinition => {
		const child = new BaseAction( childDefinition );

		child.id = createUniqueActionId( usedIds );
		// Action flows keep their settings un-namespaced.
		child.refactorSettings();
		child.events = [ ...parent.events ];
		child.conditions = JSON.parse( JSON.stringify( parent.conditions ) );
		setActionRelation( child, { parent: parent.id } );

		return { ...child };
	} );

	if ( children.length ) {
		setActionRelation( parent, {
			children: children.map( child => child.id ),
		} );
	}

	return {
		parent: { ...parent },
		children,
	};
}

export function getActionGroups( actions ) {
	const actionsById = new Map(
		actions.map( ( action, index ) => [ action.id, { action, index } ] ),
	);
	const childIds = new Set();
	const groups = [];

	for ( const action of actions ) {
		const relation = getActionRelation( action );

		for ( const childId of relation.children ?? [] ) {
			childIds.add( childId );
		}
	}

	for ( const action of actions ) {
		if ( isChildAction( action ) || childIds.has( action.id ) ) {
			continue;
		}

		const children = ( getActionRelation( action ).children ?? [] )
			.map( childId => actionsById.get( childId ) )
			.filter( child => (
				child &&
				getActionRelation( child.action ).parent === action.id
			) );

		groups.push( {
			id: action.id,
			items: [
				actionsById.get( action.id ),
				...children,
			],
		} );
	}

	// Keep malformed/orphaned children visible instead of losing them from UI.
	const groupedIds = new Set(
		groups.flatMap( group => group.items.map( item => item.action.id ) ),
	);

	for ( const action of actions ) {
		if ( groupedIds.has( action.id ) ) {
			continue;
		}

		groups.push( {
			id: action.id,
			items: [ actionsById.get( action.id ) ],
		} );
	}

	return groups;
}

export function flattenActionGroups( groups ) {
	return groups.flatMap(
		group => group.items.map( item => item.action ),
	);
}
