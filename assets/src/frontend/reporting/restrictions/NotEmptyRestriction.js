import Restriction from './Restriction';

class NotEmptyRestriction extends Restriction {

	isSupported( node, reporting ) {
		return [ String, Array, FileList ].includes(
			reporting.input.valueType(),
		);
	}

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
		}
	}

	getSupportedMacros() {
		return {};
	}

	getRawMessage() {
		return this.getMessageBySlug( 'empty' );
	}

}

export default NotEmptyRestriction;