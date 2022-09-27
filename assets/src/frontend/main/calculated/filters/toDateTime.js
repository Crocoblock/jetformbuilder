/**
 * @param date {Date}
 */
import toDate from './toDate';
import toTime from './toTime';

function toDateTime( date ) {
	return toDate( date ) + 'T' + toTime( date );
}

export default toDateTime;