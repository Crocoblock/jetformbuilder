import SwitcherInput from './SwitcherInput';
import SignalSwitcher from './SignalSwitcher';

const {
	      addFilter,
      } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/switcher',
	function ( inputs ) {
		inputs = [ SwitcherInput, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/switcher',
	function ( signals ) {
		signals = [ SignalSwitcher, ...signals ];

		return signals;
	},
);