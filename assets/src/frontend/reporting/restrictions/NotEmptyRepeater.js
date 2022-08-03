import NotEmptyRestriction from './NotEmptyRestriction';
import { isRepeater } from '../../supports';

class NotEmptyRepeater extends NotEmptyRestriction {

	isSupported( node, reporting ) {
		return isRepeater( node );
	}

	validate() {
		const value = this.getValue();

		if ( null === value || ! value.length ) {
			return false;
		}

		for ( const observable of value.current ) {
			if ( !observable.inputsAreValid() ) {
				return false;
			}
		}

		return true;
	}

}

export default NotEmptyRepeater;