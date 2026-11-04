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

function normalizeNumberFieldMacro( input, value ) {
	const [ relatedNode ] = input.nodes;
	const isNumberField = 'number' === relatedNode?.type;
	const isEmptyOrInvalidNumber = null === value
		|| undefined === value
		|| ( 'string' === typeof value && !value.trim() )
		|| Number.isNaN( Number( value ) );

	return isNumberField && isEmptyOrInvalidNumber ? 0 : value;
}

function getCalculatedMacroValue( input, valueType, calculatedField ) {
	const value = applyFilters(
		'jet.fb.calculated.callback',
		false,
		input,
		calculatedField,
	);

	if ( false !== value ) {
		return value;
	}

	const response = 'number' === valueType
		? input.calcValue
		: input.value.current;
	const normalizedResponse = normalizeNumberFieldMacro( input, response );

	if ( false === deprecatedApplyFilters ) {
		return normalizedResponse;
	}

	const filterResult = deprecatedApplyFilters(
		'forms/calculated-field-value',
		input.value.current,
		jQuery( input.nodes[ 0 ] ),
	);

	return filterResult === input.value.current
		? normalizedResponse
		: filterResult;
}

// eslint-disable-next-line max-lines-per-function
function CalculatedData() {
	InputData.call( this );

	this.calculatedFormula = null;

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
		this.calculatedFormula?.clearWatchers();
		const formula = new CalculatedFormula( this, { forceFunction: true } );
		this.calculatedFormula = formula;
		let lastResult;

		formula.observe( this.formula );
		formula.setResult       = ( beforeSubmit = false ) => {
			const calculated = formula.calculate();
			const result = 'date' === this.valueTypeProp
			               ? convertMillisToDateString( calculated, this.dateFormat )
			               : calculated;

			// Compare formula results, not the formatted value or a manual override.
			if ( beforeSubmit && Object.is( lastResult, result ) ) {
				return;
			}

			lastResult = result;

			if ( beforeSubmit ) {
				this.value.silence();
				this.value.current = null;
				this.value.silence();
			}

			this.value.current = result;
		};
		formula.relatedCallback = input => getCalculatedMacroValue(
			input,
			this.valueTypeProp,
			this,
		);

		formula.emptyValue = () => '';
		formula.setResult();
		this.value.current = this.value.applySanitizers( this.value.current );

		this.beforeSubmit( ( resolve ) => {
			formula.setResult( true );
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
