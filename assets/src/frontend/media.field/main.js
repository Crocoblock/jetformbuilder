import FileData from './input';
import SignalFile from './signal';
import { resolveMediaMacrosValue } from './resolveMediaMacrosValue';


const { addFilter } = JetPlugins.hooks;

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

addFilter(
	'jet.fb.macro.field.value',
	'jet-form-builder/media-field',
	( current, $fieldNode, $macroHost ) =>
		resolveMediaMacrosValue( current, $fieldNode, $macroHost ),
);



