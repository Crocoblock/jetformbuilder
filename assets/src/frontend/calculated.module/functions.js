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

/**
 * @param timeOrDate {String|Number}
 * @return {number}
 */
function getTimestamp( timeOrDate ) {
	if ( !Number.isNaN( +timeOrDate ) ) {
		return +timeOrDate;
	}

	timeOrDate = timeOrDate.toString();

	const dateParts = timeOrDate.split( '-' );

	if ( dateParts.length > 1 ) {
		return new Date( timeOrDate ).getTime();
	}

	const timeParts = timeOrDate.split( ':' );
	const callbacks = [
		Date.prototype.setHours,
		Date.prototype.setMinutes,
		Date.prototype.setSeconds,
	];

	const time = new Date();

	for ( const index in timeParts ) {
		if (
			!timeParts.hasOwnProperty( index ) ||
			!callbacks.hasOwnProperty( index )
		) {
			continue;
		}

		callbacks[ index ].call( time, timeParts[ index ] );
	}

	return time.getTime();
}

export { toDate, toTime, toDateTime, getTimestamp };