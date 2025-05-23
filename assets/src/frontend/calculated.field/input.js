import { getCalculatedWrapper, isCalculated, convertMillisToDateString } from './functions';

const {
	      InputData,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;
const {
	      applyFilters,
      } = JetPlugins.hooks;

const {
	      applyFilters: deprecatedApplyFilters = false,
      } = window?.JetFormBuilderMain?.filters ?? {};

// eslint-disable-next-line max-lines-per-function
function CalculatedData() {
	InputData.call( this );

	this.formula        = '';
	this.precision      = 0;
	this.sepDecimal     = '';
	this.sepThousands   = '';
	this.visibleValNode = null;
	this.valueTypeProp  = 'number';

	this.isSupported = function ( node ) {
		return isCalculated( node );
	};
	this.setValue    = function () {
		const formula = new CalculatedFormula( this, { forceFunction: true } );

		formula.observe( this.formula );
		formula.setResult       = () => {
			if ( 'date' === this.valueTypeProp ) {
				const date_formula = formula.calculate();
				this.value.current = convertMillisToDateString( date_formula, this.dateFormat );
			} else {
				this.value.current = formula.calculate();
			}
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

		formula.emptyValue = () => 'number' === this.valueTypeProp
		                           ? 0
		                           : '';
		formula.setResult();
		this.value.current = this.value.applySanitizers( this.value.current );

		this.beforeSubmit( ( resolve ) => {
			this.value.silence();
			this.value.current = null;
			this.value.silence();

			formula.setResult();
			resolve();
		}, this );
	};

	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );
		InputData.prototype.reQueryValue = () => {};

		const {
			      formula,
			      precision,
			      sepDecimal,
			      valueType,
			      sepThousands,
			      dateFormat,
		      } = getCalculatedWrapper( node ).dataset;

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal ?? '';
		this.sepThousands   = sepThousands ?? '';
		this.visibleValNode = node.nextElementSibling;
		this.valueTypeProp  = valueType;
		this.dateFormat     = dateFormat;
		this.inputType      = 'calculated';
	};
	this.addListeners = function () {
		// silence is golden
	};

	// calculated field can't be validated
	this.report = () => {};

	this.reQueryValue = () => {};

	this.revertValue = () => {};
}

CalculatedData.prototype = Object.create( InputData.prototype );

export default CalculatedData;
