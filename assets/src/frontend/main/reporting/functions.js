/**
 * @param node {HTMLElement}
 */
import BrowserReporting from './BrowserReporting';
import { allRejected } from '../functions';
import InputData from '../inputs/InputData';

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

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
 *
 * @return {Function[]}
 */
function getValidateCallbacks( inputs, silence = false ) {
	const callbacks = [];

	for ( const input of inputs ) {
		if ( !(
			input instanceof InputData
		) ) {
			console.group( 'Input are not instance of InputData' );
			console.error( input );
			console.groupEnd();

			return [];
		}
		callbacks.push(
			( resolve, reject ) => {
				input.reporting.validateOnChangeState( silence ).
					then( resolve ).
					catch( reject );
			},
		);
	}

	return callbacks;
}

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
 * @return {Promise<unknown[]>}
 */
function validateInputs( inputs, silence = false ) {
	return Promise.all( getValidateCallbacks( inputs, silence ).map(
		current => new Promise( current ),
	) );
}

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
 */
function validateInputsAll( inputs, silence = false ) {
	return allRejected( getValidateCallbacks( inputs, silence ) );
}

export { createReport, validateInputs, validateInputsAll };