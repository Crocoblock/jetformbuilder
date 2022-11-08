import { getMessageBySlug } from '../functions';

const {
	      Restriction,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;

function AdvancedRestriction() {
	Restriction.call( this );

	this.message      = '';
	this.formula      = null;
	this.watchedAttrs = [];
}

AdvancedRestriction.prototype = Object.create( Restriction.prototype );

AdvancedRestriction.prototype.message = '';
/**
 * @type {CalculatedFormula}
 */
AdvancedRestriction.prototype.formula = null;
/**
 * @type {Array}
 */
AdvancedRestriction.prototype.watchedAttrs = [];

/**
 * If returns true -> validation will be
 * started with 1000 ms delay
 *
 * @return {boolean}
 */
AdvancedRestriction.prototype.isServerSide = function () {
	return false;
};

AdvancedRestriction.prototype.getMessage = function () {
	return this.message;
};
/**
 * Here you need to return a prepared message,
 * with processed macros
 *
 * @return {string}
 */
AdvancedRestriction.prototype.getRawMessage = function () {
	return 'Error';
};
AdvancedRestriction.prototype.getMessageBySlug = function ( slug ) {
	return getMessageBySlug( this, slug );
};

AdvancedRestriction.prototype.onReady = function () {
	this.formula           = new CalculatedFormula(
		this.getRawMessage(),
		this.reporting.input,
	);
	this.formula.setResult = () => {
		this.message = this.formula.calculateString();
	};
	this.formula.setResult();

	if ( !this.watchedAttrs.length ) {
		return;
	}

	this.reporting.watchAttrs = [
		...new Set( [
			...this.reporting.watchAttrs,
			...this.watchedAttrs,
		] ),
	];
};

export default AdvancedRestriction;


