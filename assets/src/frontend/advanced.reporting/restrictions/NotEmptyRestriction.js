import AdvancedRestriction from './AdvancedRestriction';

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function NotEmptyRestriction() {
	AdvancedRestriction.call( this );

	this.type = 'required';
}

NotEmptyRestriction.prototype = Object.create( AdvancedRestriction.prototype );

NotEmptyRestriction.prototype.isSupported   = function ( node, reporting ) {
	return reporting.input.isRequired;
};
NotEmptyRestriction.prototype.validate      = function () {
	const value = this.getValue();

	return !isEmpty( value );
};
NotEmptyRestriction.prototype.getRawMessage = function () {
	return this.getMessageBySlug( 'empty' );
};

export default NotEmptyRestriction;