import RepeaterData from './input';
import SignalRepeater from './signal';

const { addFilter } = JetPlugins.hooks;

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