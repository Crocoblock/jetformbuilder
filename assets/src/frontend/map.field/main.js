import MapFieldData from './input';
import SignalMapField from './signal';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/map-field',
	function ( inputs ) {
		inputs = [ MapFieldData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/map-field',
	function ( signals ) {
		signals = [ SignalMapField, ...signals ];

		return signals;
	},
);
