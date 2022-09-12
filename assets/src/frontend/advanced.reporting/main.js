import AdvancedReporting from './AdvancedReporting';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.reporting',
	'jet-form-builder/advanced-reporting',
	function ( reporting ) {
		reporting = [ AdvancedReporting, ...reporting ];

		return reporting;
	},
);