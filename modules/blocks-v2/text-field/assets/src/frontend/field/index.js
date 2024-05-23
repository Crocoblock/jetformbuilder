import TextFieldData from "./TextFieldData";
import SignalTextField from "./SignalTextField";
import '../../shared/eye.icon.scss';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/text-field',
	function ( inputs ) {
		inputs.push( TextFieldData );

		return inputs;
	},
	999
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/text-field',
	function ( signals ) {
		signals.push( SignalTextField );

		return signals;
	},
	999
);