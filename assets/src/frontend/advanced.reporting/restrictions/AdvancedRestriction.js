import Restriction from './Restriction';

const { CalculatedFormula } = JetFormBuilderAbstract;

function AdvancedRestriction() {
	Restriction.call( this );
}

AdvancedRestriction.prototype               = Object.create(
	Restriction.prototype,
);
AdvancedRestriction.prototype.attrs         = {};
AdvancedRestriction.prototype.setAttrs      = function ( attrs ) {
	this.attrs     = attrs;
	const { root } = this.reporting.input;

	const formula = new CalculatedFormula( attrs.value, root );

	formula.setResult = () => {
		this.attrs.value = String( formula.calculate() );
		this.reporting.input.value.notify();
	};
	formula.setResult();
};
AdvancedRestriction.prototype.getSlug       = function () {
	throw new Error( 'you need to return slug of rule' );
};
AdvancedRestriction.prototype.getRawMessage = function () {
	return this.attrs?.message ?? '';
};

export default AdvancedRestriction;