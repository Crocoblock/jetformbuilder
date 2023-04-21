import AdvancedReporting from './AdvancedReporting';
import AdvancedRestriction from './restrictions/AdvancedRestriction';

const {
	      addFilter,
	      addAction,
      } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/observe-dynamic-attrs',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		observable.getInputs().forEach( input => {
			if ( ! (input.reporting instanceof AdvancedReporting ) ) {
				return;
			}
			input.reporting.observeAttrs();
		} )
	},
	11,
);

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