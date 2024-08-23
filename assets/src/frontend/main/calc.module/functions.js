function zerofill( number, count ) {
	number = '' + number;

	if ( number.length >= count ) {
		return number;
	}

	const zeros = new Array( count - number.length ).fill( 0 );

	return zeros + number;
}

/**
 * @param date  {Date}
 * @param isUtc
 */
export function toDate( date, isUtc = true ) {
	const month = isUtc ? date.getUTCMonth() : date.getMonth();
	const day   = isUtc ? date.getUTCDate() : date.getDate();
	const year  = isUtc ? date.getUTCFullYear() : date.getFullYear();

	return [
		year,
		zerofill( month + 1, 2 ),
		zerofill( day, 2 ),
	].join( '-' );
}

/**
 * @param date  {Date}
 * @param isUtc
 */
export function toTime( date, isUtc = true ) {
	const hours = isUtc ? date.getUTCHours() : date.getHours();
	const mins  = isUtc ? date.getUTCMinutes() : date.getMinutes();

	return [
		zerofill( hours, 2 ),
		zerofill( mins, 2 ),
	].join( ':' );
}

export function toDateTime( date ) {
	return toDate( date, false ) + 'T' + toTime( date, false );
}

/**
 * @param  timeOrDate {String|Number}
 * @return {{time: number, type: string}}
 */
export function getTimestamp( timeOrDate ) {
	if ( !Number.isNaN( +timeOrDate ) ) {
		return { time: +timeOrDate, type: 'number' };
	}

	timeOrDate = timeOrDate.toString();

	const dateParts = timeOrDate.split( '-' );

	if ( dateParts.length > 1 ) {
		const date = new Date( timeOrDate );

		return {
			time: date.getTime(),
			type: 'date',
		};
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

	return {
		time: time.getTime(),
		type: 'time',
	};
}
