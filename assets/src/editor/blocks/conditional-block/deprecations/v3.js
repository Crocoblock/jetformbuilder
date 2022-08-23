import metadata from '@blocks/conditional-block/block.json';
import ConditionalSave from '../save';

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
	migrate( attributes ) {
		let parsed = {};

		const conditions = attributes.conditions.sort(
			current => 'show' === current.type ? -1 : 1,
		);

		let func_type = null;

		for ( const condition of conditions ) {
			condition.type = condition.type ?? 'show';

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

		func_type = func_type ?? 'show';

		return {
			...attributes,
			func_type,
			conditions: Object.values( parsed ),
		};
	},
};