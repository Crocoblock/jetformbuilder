import MultiSelectData from './input';
import SignalSelect from './signal';

// it's important to compile separate css file
import JfbSelect from '../../../shared/JfbSelect.css';

const { addFilter } = JetPlugins.hooks;

window.JetFormBuilderAbstract = {
	...window.JetFormBuilderAbstract,
	MultiSelectData,
	SignalSelect,
};

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/select-field',
	function ( inputs ) {
		inputs = [ MultiSelectData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/select-field',
	function ( signals ) {
		signals = [ SignalSelect, ...signals ];

		return signals;
	},
);