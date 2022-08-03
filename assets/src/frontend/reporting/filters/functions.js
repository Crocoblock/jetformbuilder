import LengthFilter from './LengthFilter';

const filters = [
	new LengthFilter(),
];

function getFilters( filtersList ) {
	return filters.filter(
		current => filtersList.includes( current.getSlug() ),
	);
}

export {
	getFilters,
};