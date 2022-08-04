import LengthFilter from './LengthFilter';
import FallBackFilter from './FallBackFilter';

const filters = () => [
	new LengthFilter(),
	new FallBackFilter(),
];

let response = [];

function pushFilter( name, props = '' ) {
	/**
	 * @type {Filter}
	 */
	const filter = filters().find(
		current => name === current.getSlug(),
	);

	if ( !filter ) {
		return;
	}
	props = props.split( ',' ).map(
		item => item.trim(),
	);

	filter.setProps( props );
	response.push( filter );
}

function getFilters( filtersList ) {

	for ( let filterName of filtersList ) {
		const matches = filterName.match( /^(\w+)\(([^()]+)\)/ );

		if ( null === matches ) {
			pushFilter( filterName );

			continue;
		}

		pushFilter( matches[ 1 ], matches[ 2 ] );
	}

	const tempResponse = [ ...response ];
	response           = [];


	return tempResponse;
}

export {
	getFilters,
};