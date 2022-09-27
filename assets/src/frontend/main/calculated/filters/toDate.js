/**
 * @param date {Date}
 */
function toDate( date ) {
	return [
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
	].join( '-' );
}

export default toDate;