import metadata from '@blocks/conditional-block/block.json';
import ConditionalSave from '../save';

const {
	      dispatch,
      }         = wp.data;
const { Tools } = JetFBActions;

function migrateSetValue( block, conditions ) {
	if (
		!block.name.includes( 'jet-forms/' ) ||
		!block.attributes.hasOwnProperty( 'value' )
	) {
		return;
	}

	const { updateBlock } = dispatch( 'core/block-editor' );

	const groups = [];

	for ( const {
		            field,
		            operator,
		            set_value,
		            value
	            } of conditions
		) {

		const group = {
			id: Tools.getRandomID(),
			conditions: [
				{ field, operator, value },
			],
			to_set: set_value ?? '',
		};
		groups.push( group );
	}

	setTimeout( () => {
		updateBlock(
			block.clientId, {
				attributes: {
					value: { groups },
				},
			},
		);
	} );
}

export default {
	attributes: metadata.attributes,
	supports: metadata.supports,
	save: ConditionalSave,
	isEligible( attributes ) {
		const { func_type = false, conditions = [] } = attributes;

		return (
			false === func_type && conditions?.length
		);
	},
	migrate( attributes, innerBlocks ) {
		let parsed    = {},
		    func_type = null;

		const [ block ]          = innerBlocks || [];
		const setValueConditions = [];

		const conditions = attributes.conditions.sort(
			current => 'show' === current.type ? -1 : 1,
		);

		for ( const condition of conditions ) {
			condition.type = condition.type ?? 'show';

			if ( 'set_value' === condition.type ) {
				setValueConditions.push( condition );

				continue;
			}

			if ( ![ 'show', 'hide' ].includes( condition.type ) ) {
				continue;
			}
			if ( null === func_type ) {
				func_type = condition.type;
			}
			delete condition.type;

			if ( 'hide' === func_type && Object.keys( parsed ).length ) {
				parsed[ condition.field + '_or' ] = {
					or_operator: true,
				};
			}

			parsed[ condition.field ] = condition;
		}

		if ( setValueConditions.length && 'object' === typeof block ) {
			migrateSetValue( block, setValueConditions );
		}

		func_type = func_type ?? 'show';

		return {
			...attributes,
			func_type,
			conditions: Object.values( parsed ),
		};
	},
};