import RadioData from './RadioData';
import SignalRadio from './SignalRadio';
import '../../default-value/main';
import './index.pcss';

const {
	      addFilter,
      } = JetPlugins.hooks;

window.JetFormBuilderAbstract = {
	...window.JetFormBuilderAbstract,
	RadioData,
	SignalRadio,
};

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/radio-field',
	function ( inputs ) {
		inputs = [ RadioData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/radio-field',
	function ( signals ) {
		signals = [ SignalRadio, ...signals ];

		return signals;
	},
);
