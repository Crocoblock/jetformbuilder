import RepeaterData from './input';
import SignalRepeater from './signal';
import RepeaterRestriction from './restrictions/RepeaterRestriction';

const {
	      addFilter,
	      addAction,
      } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/repeater-field',
	function ( inputs ) {
		inputs = [ RepeaterData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/repeater-field',
	function ( signals ) {
		signals = [ SignalRepeater, ...signals ];

		return signals;
	},
);

const addRestriction = ( restrictions ) => {
	restrictions.push(
		RepeaterRestriction,
	);

	return restrictions;
};

addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/repeater-field',
	addRestriction
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/repeater-field',
	addRestriction
);

addAction(
	'jet.fb.multistep.page.observed.input',
	'jet-form-builder/repeater-field',
	/**
	 * @param input {InputData|RepeaterData}
	 * @param pageState {PageState}
	 */
	function ( input, pageState ) {
		if ( 'repeater' !== input.inputType ) {
			return;
		}

		/**
		 * @type {ObservableRow[]}
		 */
		const current = input.value.current || [];

		input.watch( () => pageState.updateState() );

		/**
		 * @param currentInput {InputData}
		 */
		function observeInnerInput( currentInput ) {
			pageState.handleInputEnter( currentInput );

			if ( ! currentInput.reporting?.restrictions?.length ) {
				return;
			}

			currentInput.watchValidity( () => pageState.updateState() );
		}

		for ( const observableRow of current ) {
			observableRow.getInputs().forEach( observeInnerInput );
		}
		input.lastObserved.watch( () => {
			input.lastObserved.current.getInputs().forEach( observeInnerInput );
		} );
	},
);