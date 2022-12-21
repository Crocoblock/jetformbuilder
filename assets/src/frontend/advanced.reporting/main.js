import AdvancedReporting from './AdvancedReporting';
import AdvancedRestriction from './restrictions/AdvancedRestriction';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.reporting',
	'jet-form-builder/advanced-reporting',
	function ( reporting ) {
		reporting = [ AdvancedReporting, ...reporting ];

		return reporting;
	},
);

window.JetFormBuilderAbstract = {
	...(
		window.JetFormBuilderAbstract ?? {}
	),
	AdvancedRestriction,
};