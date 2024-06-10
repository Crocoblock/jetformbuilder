const {
	      RequiredRestriction,
      } = JetFormBuilderAbstract;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function RequiredMapRestriction() {
	RequiredRestriction.call( this );
}

RequiredMapRestriction.prototype = Object.create(
	RequiredRestriction.prototype,
);

RequiredMapRestriction.prototype.isSupported = function ( node, reporting ) {
	return (
		RequiredRestriction.prototype.isSupported.call(
			this,
			node,
			reporting,
		) &&
		'map' === reporting.input.inputType
	);
};

RequiredMapRestriction.prototype.validate = function () {
	const [ mainInput ] = this.reporting.input.nodes;

	return (
		RequiredRestriction.prototype.validate.call( this ) &&
		! isEmpty( mainInput.value )
	);
};

export default RequiredMapRestriction;