/**
 * @param source {String}
 * @returns {Object[]}
 */
function fromBulk( source ) {
	if ( 'string' !== typeof source ) {
		return [];
	}
	let rows = source.trim().split( '\n' );

	return rows.map( fromBulkRow ).filter( Boolean );
}

function fromBulkRow( source ) {
	const parts = source.split( ':' );

	if ( !parts.length ) {
		return false;
	}

	let [ label, value, calculate ] = parts;

	label     = label.trim();
	value     = 'function' === typeof value.trim
	            ? value.trim()
	            : false;
	calculate = 'function' === typeof calculate?.trim
	            ? calculate.trim()
	            : false;

	const row = {};

	if ( label ) {
		row.label = label;
	}

	if ( value ) {
		row.value = value;
	}

	if ( calculate ) {
		row.calculate = calculate;
	}

	return row;
}

export default fromBulk;

