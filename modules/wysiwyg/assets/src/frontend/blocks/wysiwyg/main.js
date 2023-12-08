import WysiwygData from './input';
import SignalWysiwyg from './signal';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/wysiwyg-field',
	function ( inputs ) {
		inputs = [ WysiwygData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/wysiwyg-field',
	function ( signals ) {
		signals = [ SignalWysiwyg, ...signals ];

		return signals;
	}
);