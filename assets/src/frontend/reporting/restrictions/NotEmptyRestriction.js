import Restriction from './Restriction';

class NotEmptyRestriction extends Restriction {

	validate() {
		const value = this.getValue();

		if ( null === value ) {
			return false;
		}

		switch ( this.reporting.input.valueType() ) {
			case String:
				return !!value.toString()?.length;
			case Array:
			case FileList:
				return !!value.length;
			default:
				return !!value;
		}
	}

	getMessage() {
		return this.getMessageBySlug( 'empty' );
	}

}

export default NotEmptyRestriction;