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

const relatedCheckOut = [];

addFilter(
	'jet.fb.onCalculate.part',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param macroPart
	 * @param formula {CalculatedFormula}
	 * @return {*}
	 */
	function ( macroPart, formula ) {
		const matches = macroPart.match( /ADVANCED_PRICE::([\w\-]+)/ );

		if ( !matches?.length || !formula?.input ) {
			return macroPart;
		}
		const [ , fieldName ] = matches;

		const checkoutField = formula.input.root.getInput( fieldName );

		if ( !checkoutField ) {
			return 0;
		}

		const formId = formula.input.getSubmit().getFormId();

		if ( !relatedCheckOut.includes( formId + checkoutField.name ) ) {
			relatedCheckOut.push( formId + checkoutField.name );

			checkoutField.watch( () => formula.setResult() );
		}

		return macroPart;
	},
);
