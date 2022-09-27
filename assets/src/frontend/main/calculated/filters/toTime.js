/**
 * @param date {Date}
 */
function toTime( date ) {
	return [
		date.getHours(),
		date.getMinutes(),
	].join( ':' );
}

export default toTime;