function getCalculatedWrapper( node ) {
	return node.closest( '.jet-form-builder__calculated-field' );
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isCalculated( node ) {
	return !!(
		getCalculatedWrapper( node )?.dataset?.formula?.length ?? ''
	);
}

/**
 * Formats milliseconds into a string according to the specified format.
 *
 * Supported placeholders:
 * YYYY — 4-digit year (2024)
 * MM   — month with leading zero (01–12)
 * M    — month without leading zero (1–12)
 * MMM  — abbreviated month name (Jan–Dec)
 * MMMM — full month name (January–December)
 * DD   — day of month with leading zero (01–31)
 * D    — day of month without leading zero (1–31)
 * HH   — hours with leading zero (00–23)
 * H    — hours without leading zero (0–23)
 * mm   — minutes with leading zero (00–59)
 * m    — minutes without leading zero (0–59)
 * ss   — seconds with leading zero (00–59)
 * s    — seconds without leading zero (0–59)
 * dddd — full day of week name (Monday–Sunday)
 * ddd  — abbreviated day of week name (Mon–Sun)
 *
 * @param {number|string} millisInput — milliseconds
 * @param {string} format — format string
 * @returns {string|number}
 */
function convertMillisToDateString( millisInput, format = 'YYYY-MM-DD' ) {
	const millis = eval( millisInput );

	if ( !millis || isNaN( millis ) || null === millis || 0 === millis ) {
		return 0;
	}

	const date = new Date( millis );

	const monthsFull = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	const monthsShort = monthsFull.map( m => m.slice( 0, 3 ) );

	const daysFull = [
		'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	];

	const daysShort = daysFull.map( d => d.slice( 0, 3 ) );

	const map = {
		YYYY: date.getFullYear(),
		MM: String( date.getMonth() + 1 ).padStart( 2, '0' ),
		M: date.getMonth() + 1,
		MMM: monthsShort[ date.getMonth() ],
		MMMM: monthsFull[ date.getMonth() ],
		DD: String( date.getDate() ).padStart( 2, '0' ),
		D: date.getDate(),
		HH: String( date.getHours() ).padStart( 2, '0' ),
		H: date.getHours(),
		mm: String( date.getMinutes() ).padStart( 2, '0' ),
		m: date.getMinutes(),
		ss: String( date.getSeconds() ).padStart( 2, '0' ),
		s: date.getSeconds(),
		dddd: daysFull[ date.getDay() ],
		ddd: daysShort[ date.getDay() ],
	};

	const sortedKeys = Object.keys( map ).sort( ( a, b ) => b.length - a.length );

	let formatted = format;
	for ( const key of sortedKeys ) {
		formatted = formatted.replace( new RegExp( key, 'g' ), map[key] );
	}

	return formatted;
}

export { isCalculated, getCalculatedWrapper, convertMillisToDateString };