import CheckboxData from './CheckboxData';
import './index.pcss';

const {
	      addFilter,
      } = JetPlugins.hooks;

window.JetFormBuilderAbstract = {
	...window.JetFormBuilderAbstract,
	CheckboxData,
};

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/checkbox-field',
	function ( inputs ) {
		inputs = [ CheckboxData, ...inputs ];

		return inputs;
	},
);