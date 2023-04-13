import CalculatedData from './input';
import SignalCalculated from './signal';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/choices-field',
	function ( inputs ) {
		inputs = [ CalculatedData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/choices-field',
	function ( signals ) {
		signals = [ SignalCalculated, ...signals ];

		return signals;
	},
);