import CalculatedData from './input';
import SignalCalculated from './signal';

const { addAction, addFilter } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.input.manual',
	'jet-form-builder/calculated-field',
	( input ) => {
		if ( 'radio' !== input.inputType || '1' !== input.wrapper?.dataset.jfbAutoUpdate ) {
			return;
		}

		// The old formula may have no Radio dependency yet or still watch the replaced input.
		for ( const field of input.root.getInputs() ) {
			if ( field instanceof CalculatedData ) {
				field.calculatedFormula?.rebindField( input.name, field.formula );
			}
		}
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/calculated-field',
	function ( inputs ) {
		inputs = [ CalculatedData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/calculated-field',
	function ( signals ) {
		signals = [ SignalCalculated, ...signals ];

		return signals;
	},
);
