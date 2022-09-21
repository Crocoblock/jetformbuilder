import ValueItem from './ValueItem';
import MultipleValueItem from './MultipleValueItem';

const { applyFilters } = wp.hooks;

const getValues = () => applyFilters(
	'jet.fb.dynamic.value.types',
	[
		MultipleValueItem,
		ValueItem,
	],
);
/**
 * @type {ValueItem[]}
 */
let values = [];

/**
 * @param input
 * @returns {ValueItem}
 */
const getValue = (input) => {
	if ( ! values.length ) {
		values = getValues();
	}

	for ( const value of values ) {
		const current = new value();

		if ( ! current.isSupported( input ) ) {
			continue;
		}
		return current;
	}
};

function createValues( json, input ) {
	let groups = [];

	try {
		groups = JSON.parse( json );
	}
	catch ( error ) {
		console.error( error );
		return;
	}

	for ( const group of groups ) {
		const value = getValue( input );

		value.observe( group, input );
	}
}

export default createValues;