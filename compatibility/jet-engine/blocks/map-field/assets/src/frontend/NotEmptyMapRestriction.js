const {
	      NotEmptyRestriction = function () {},
      } = JetFormBuilderAbstract;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function NotEmptyMapRestriction() {
	NotEmptyRestriction.call( this );
}

NotEmptyMapRestriction.prototype = Object.create(
	NotEmptyRestriction.prototype,
);

NotEmptyMapRestriction.prototype.isSupported = function ( node, reporting ) {
	return (
		NotEmptyRestriction.prototype?.isSupported?.call?.(
			this,
			node,
			reporting,
		) &&
		'map' === reporting.input.inputType
	);
};

NotEmptyMapRestriction.prototype.validate = function () {
	const [ mainInput ] = this.reporting.input.nodes;

	return (
		NotEmptyRestriction.prototype.validate.call( this ) &&
		!isEmpty( mainInput.value )
	);
};

export default NotEmptyMapRestriction;