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
		            set_value: setValue,
		            value
	            } of conditions
		) {

		const group = {
			id: Tools.getRandomID(),
			conditions: [
				{ field, operator, value },
			],
			to_set: setValue ?? '',
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
		const { func_type: funcType = false, conditions = [] } = attributes;

		return (
			false === funcType && conditions?.length
		);
	},
	migrate( attributes, innerBlocks ) {
		const parsed = {};
		let funcType = null;

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
			if ( null === funcType ) {
				funcType = condition.type;
			}
			delete condition.type;

			if ( 'hide' === funcType && Object.keys( parsed ).length ) {
				parsed[ condition.field + '_or' ] = {
					or_operator: true,
				};
			}

			parsed[ condition.field ] = condition;
		}

		if ( setValueConditions.length && 'object' === typeof block ) {
			migrateSetValue( block, setValueConditions );
		}

		funcType = funcType ?? 'show';

		return {
			...attributes,
			func_type: funcType,
			conditions: Object.values( parsed ),
		};
	},
};