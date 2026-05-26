import RepeaterData from './input';
import SignalRepeater from './signal';
import RepeaterRestriction from './restrictions/RepeaterRestriction';
import { resolveRepeaterMacrosValue } from './repeater-macros';
import './index.pcss';

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
	addRestriction,
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/repeater-field',
	addRestriction,
);

addAction(
	'jet.fb.multistep.page.observed.input',
	'jet-form-builder/repeater-field',
	/**
	 * @param input     {InputData|RepeaterData}
	 * @param pageState {PageState}
	 */
	function ( input, pageState ) {
		if ( 'repeater' !== input.inputType ) {
			return;
		}

		const getCurrentInputs = () => (
			( input.value.current || [] ).flatMap(
				observableRow => observableRow.getInputs(),
			)
		);

		/**
		 * @param currentInput {InputData}
		 */
		function observeInnerInput( currentInput ) {
			pageState.registerInput(
				currentInput,
				{ includeInValidation: false },
			);
		}

		function syncCurrentInputs() {
			const currentInputs = getCurrentInputs();
			const currentSet = new Set( currentInputs );
			const currentRows = new Set( input.value.current || [] );
			const repeaterTrackedInputs = pageState.getTrackedInputs().filter(
				currentInput => currentInput.root?.parent === input,
			);
			const staleTrackedInputs = repeaterTrackedInputs.filter(
				currentInput => (
					!currentRows.has( currentInput.root ) ||
					currentInput._observeVersion !==
						currentInput.root?._observeVersion
				) && !currentSet.has( currentInput ),
			);

			staleTrackedInputs.forEach(
				currentInput => pageState.unregisterInput( currentInput ),
			);
			currentInputs.forEach( observeInnerInput );
			pageState.updateState();
		}

		syncCurrentInputs();
		input.watch( syncCurrentInputs );
		input.lastObserved.watch( syncCurrentInputs );
	},
);

addFilter(
	'jet.fb.macro.field.value',
	'jet-form-builder/repeater-field',
	( current, $fieldNode, $macroHost ) =>
		resolveRepeaterMacrosValue( current, $fieldNode, $macroHost ),
);
