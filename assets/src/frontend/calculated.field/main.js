import CalculatedData from './input';
import SignalCalculated from './signal';

const { addFilter } = wp.hooks;

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