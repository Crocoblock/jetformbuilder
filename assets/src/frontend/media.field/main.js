import FileData from './input';
import SignalFile from './signal';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/media-field',
	function ( inputs ) {
		inputs = [ FileData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/media-field',
	function ( signals ) {
		signals = [ SignalFile, ...signals ];

		return signals;
	},
);