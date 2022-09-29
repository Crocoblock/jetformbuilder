function zerofill( number, count ) {
	number = '' + number;

	if ( number.length >= count ) {
		return number;
	}

	const zeros = new Array( count - number.length ).fill( 0 );

	return zeros + number;
}

/**
 * @param date {Date}
 */
function toDate( date ) {
	return [
		date.getFullYear(),
		zerofill( date.getMonth() + 1, 2 ),
		zerofill( date.getDate(), 2 ),
	].join( '-' );
}

/**
 * @param date {Date}
 */
function toTime( date ) {
	return [
		zerofill( date.getHours(), 2 ),
		zerofill( date.getMinutes(), 2 ),
	].join( ':' );
}

function toDateTime( date ) {
	return toDate( date ) + 'T' + toTime( date );
}

export { toDate, toTime, toDateTime };