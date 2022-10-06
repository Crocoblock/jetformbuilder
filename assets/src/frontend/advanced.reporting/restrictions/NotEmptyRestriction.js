import Restriction from './Restriction';

function NotEmptyRestriction() {
	Restriction.call( this );

	this.isSupported        = function ( node, reporting ) {
		return [ String, Array, FileList ].includes(
			reporting.input.valueType(),
		);
	};
	this.validate           = function () {
		const value = this.getValue();

		if ( null === value ) {
			return false;
		}

		switch ( this.reporting.input.valueType() ) {
			case String:
				const strVal = (
					value ?? ''
				).toString();

				return !!strVal.length;
			case Array:
			case FileList:
				return !!value.length;
		}
	};
	this.getRawMessage      = function () {
		return this.getMessageBySlug( 'empty' );
	};
}

NotEmptyRestriction.prototype = Object.create( Restriction.prototype );

export default NotEmptyRestriction;