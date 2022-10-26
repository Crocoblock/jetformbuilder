/**
 * @param node {HTMLElement}
 */
import BrowserReporting from './BrowserReporting';

const {
	      applyFilters,
      } = wp.hooks;

const getReportTypes = () => applyFilters(
	'jet.fb.reporting',
	[
		BrowserReporting,
	],
);

let reportTypes = [];

/**
 * @param input {InputData}
 * @return {AdvancedReporting|BrowserReporting}
 */
function createReport( input ) {
	if ( !reportTypes.length ) {
		reportTypes = getReportTypes();
	}

	for ( const reportType of reportTypes ) {
		const current = new reportType();

		if ( !current.isSupported( input.nodes[ 0 ], input ) ) {
			continue;
		}
		current.setInput( input );

		return current;
	}

	throw new Error( 'Something went wrong' );
}

export { createReport };