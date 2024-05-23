import TextFieldMaskedData from "./TextFieldMaskedData";

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/text-field-masked',
	function ( inputs ) {
		inputs = [ TextFieldMaskedData, ...inputs ];

		return inputs;
	}
);