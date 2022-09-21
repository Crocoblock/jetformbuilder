import { isCalculated } from './functions';

const {
	      InputData,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;

let firstFormula = null;

function CalculatedData() {
	InputData.call( this );

	this.formula        = '';
	this.precision      = 0;
	this.sepDecimal     = '';
	this.sepThousands   = '';
	this.visibleValNode = null;

	this.isSupported  = function ( node ) {
		return isCalculated( node );
	};
	this.setValue     = function () {
		const formula = new CalculatedFormula( this.formula, this.root );

		formula.setResult       = () => {
			this.value.current = formula.calculate();
		};
		formula.relatedCallback = ( input ) => {
			return input.calcValue;
		};
		formula.setResult();
	};
	this.makeReactive = function () {
		InputData.prototype.makeReactive.call( this );

		// run signals
		this.value.notify();
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		const {
			      formula,
			      precision,
			      sepDecimal,
		      } = node.parentElement.dataset;

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
	};
	this.addListeners = function () {
		// silence is golden
	};
}

CalculatedData.prototype = Object.create( InputData.prototype );

export default CalculatedData;