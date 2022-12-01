import { isCalculated } from './functions';

const {
	      InputData,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;
const {
	      applyFilters,
      } = wp.hooks;

const {
	      applyFilters: deprecatedApplyFilters = false,
      } = window?.JetFormBuilderMain?.filters ?? {};

function CalculatedData() {
	InputData.call( this );

	this.formula        = '';
	this.precision      = 0;
	this.sepDecimal     = '';
	this.sepThousands   = '';
	this.visibleValNode = null;
	this.valueTypeProp  = 'number';

	this.isSupported  = function ( node ) {
		return isCalculated( node );
	};
	this.setValue     = function () {
		const formula = new CalculatedFormula( this, { forceFunction: true } );

		formula.observe( this.formula );
		formula.setResult       = () => {
			this.value.current = formula.calculate();
		};
		formula.relatedCallback = ( input ) => {
			const value = applyFilters(
				'jet.fb.calculated.callback',
				false,
				input,
				this,
			);

			if ( false !== value ) {
				return value;
			}

			const response = 'number' === this.valueTypeProp
			                 ? input.calcValue
			                 : input.value.current;

			if ( false === deprecatedApplyFilters ) {
				return response;
			}

			const filterResult = deprecatedApplyFilters(
				'forms/calculated-field-value',
				input.value.current,
				jQuery( input.nodes[ 0 ] ),
			);

			return filterResult === input.value.current
			       ? response
			       : filterResult;
		};
		formula.setResult();
		this.onChange();

		this.beforeSubmit( ( resolve ) => {
			this.value.silence();
			this.value.current = null;
			this.value.silence();

			formula.setResult();
			resolve();
		} );
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
			      valueType,
		      } = node.parentElement.dataset;

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
		this.valueTypeProp  = valueType;
	};
	this.addListeners = function () {
		// silence is golden
	};
}

CalculatedData.prototype = Object.create( InputData.prototype );

export default CalculatedData;