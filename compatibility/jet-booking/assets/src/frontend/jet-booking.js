import CheckOutInput from './CheckOutInput';
import CheckOutSignal from './CheckOutSignal';

const {
	      addAction,
	      addFilter,
      } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.before',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		const { rootNode } = observable;

		for ( const checkOutWrapper of rootNode.querySelectorAll(
			'.field-type-check-in-out',
		) ) {
			const input = checkOutWrapper.querySelector(
				'input[data-field="checkin-checkout"]',
			);

			if ( !input ) {
				continue;
			}

			input.dataset.jfbSync = 1;
		}
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/booking-compatibility',
	function ( inputs ) {
		inputs = [ CheckOutInput, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/booking-compatibility',
	function ( signals ) {
		signals = [ CheckOutSignal, ...signals ];

		return signals;
	},
);

/**
 * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
 * @since 3.4.5.1
 */
addFilter(
	'jet.fb.formula.node.exists',
	'jet-form-builder/booking-compatibility',
	function ( nodeExists, fieldName, formula ) {

		const matches = fieldName.match( /ADVANCED_PRICE::([\w\-]+)/ );

		if ( matches && matches?.length ) {
			nodeExists = formula.root.rootNode[ matches[1] ];
		}

		return nodeExists;
	}
);

addFilter(
	'jet.fb.onCalculate.part',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param macroPart
	 * @param formula {CalculatedFormula}
	 * @return {*}
	 */
	function ( macroPart, formula ) {

		if ( 'string' !== typeof macroPart ) {
			return macroPart;
		}

		const matches = macroPart.match( /ADVANCED_PRICE::([\w\-]+)/ );

		if ( !matches?.length || !formula?.input ) {
			return macroPart;
		}
		const [ , fieldName ] = matches;

		const checkoutField = formula.input.root.getInput( fieldName );

		if ( !checkoutField ) {
			return 0;
		}

		formula.cachedFields = formula.cachedFields || [];

		if ( !formula.cachedFields.includes( checkoutField.name ) ) {
			formula.cachedFields.push( checkoutField.name );

			checkoutField.watch( () => formula.setResult() );
		}

		return macroPart;
	},
);

addFilter(
	'jet.fb.calculated.callback',
	'jet-form-builder/booking-field-parser',
	/**
	 * @param value {mixed|Boolean}
	 * @param input {InputData|CheckOutInput}
	 * @param calculatedInput {CalculatedData}
	 */
	function ( value, input, calculatedInput ) {
		if ( false !== value || 'checkin-checkout' !== input.inputType ) {
			return value;
		}

		return input.parseValueForCalculated();
	},
);
