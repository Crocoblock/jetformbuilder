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

/**
 * Handle Media Field macro value parsing (outside repeater).
 *
 * This filter is triggered when a macro is parsed in a regular context,
 * i.e. not inside a repeater field.
 */
addFilter(
	'jet.fb.macro.field.value',
	'jet-form-builder/media-field',
	resolveMediaMacrosValue,
);

/**
 * Handle Media Field macro value parsing inside repeater.
 *
 * This is a separate flow from the regular macro parsing.
 * This filter is triggered only when the macro is used inside a repeater,
 * where field values have a different structure and context.
 *
 * @see https://github.com/Crocoblock/issues-tracker/issues/5654
 */
addFilter(
	'jet.fb.macro.inside.repeater.field.value',
	'jet-form-builder/media-field',
	resolveMediaMacrosValue,
);


