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

		for ( const condition of conditions ) {
			condition.type = condition.type ?? 'show';

			if ( ![ 'show', 'hide' ].includes( condition.type ) ) {
				continue;
			}
			const type = condition.type;
			delete condition.type;

			if ( 'hide' === type && Object.keys( parsed ).length ) {
				parsed[ condition.field + '_or' ] = {
					or_operator: true,
				};
			}

			parsed[ condition.field ] = condition;
		}

		return {
			...attributes,
			conditions: Object.values( parsed ),
		};
	},
};