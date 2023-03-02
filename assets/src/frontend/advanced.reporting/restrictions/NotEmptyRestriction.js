import AdvancedRestriction from './AdvancedRestriction';

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function NotEmptyRestriction() {
	AdvancedRestriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return reporting.input.isRequired;
	};
	this.validate      = function () {
		const value = this.getValue();

		return !isEmpty( value );
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'empty' );
	};
}

NotEmptyRestriction.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEmptyRestriction;