import AdvancedRestriction from './AdvancedRestriction';

function NotEmptyRestriction() {
	AdvancedRestriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return reporting.isRequired && [ String, Array, FileList ].includes(
			reporting.input.valueType(),
		);
	};
	this.validate      = function () {
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
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'empty' );
	};
}

NotEmptyRestriction.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEmptyRestriction;