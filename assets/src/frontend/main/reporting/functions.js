/**
 * @param node {HTMLElement}
 */
import BrowserReporting from './BrowserReporting';
import { allRejected } from '../functions';
import InputData from '../inputs/InputData';
import NativeRestriction from './restrictions/NativeRestriction';
import RequiredRestriction from './restrictions/RequiredRestriction';

const {
	      applyFilters,
      } = JetPlugins.hooks;

const getReportTypes = () => applyFilters(
	'jet.fb.reporting',
	[
		BrowserReporting,
	],
);

let reportTypes = [];

const getDefaultRestrictions = () => applyFilters(
	'jet.fb.restrictions.default',
	[
		NativeRestriction,
		RequiredRestriction,
	],
);

let defaultRestrictions = [];

function getPreparedReportTypes() {
	if ( !reportTypes.length ) {
		reportTypes = getReportTypes();
	}

	return [ ...reportTypes ];
}

function getPreparedDefaultRestrictions() {
	if ( !defaultRestrictions.length ) {
		defaultRestrictions = getDefaultRestrictions();
	}

	return [ ...defaultRestrictions ];
}

/**
 * @param  reporting {BrowserReporting}
 * @param  node
 * @return {*}
 */
function createDefaultRestrictions( reporting, node ) {
	for ( const restriction of getPreparedDefaultRestrictions() ) {
		const current = new restriction();

		if ( !current.isSupported( node, reporting ) ) {
			continue;
		}

		reporting.restrictions.push( current );
	}

	reporting.restrictions.forEach( item => item.setReporting( reporting ) );
}

/**
 * @param  input {InputData}
 * @return {AdvancedReporting|BrowserReporting}
 */
function createReport( input ) {
	for ( const reportType of getPreparedReportTypes() ) {
		const current = new reportType();

		if ( !current.isSupported( input.nodes[ 0 ], input ) ) {
			continue;
		}
		current.setInput( input );

		return current;
	}

	throw new Error( 'Something went wrong' );
}

function resetReportingRegistry() {
	reportTypes         = [];
	defaultRestrictions = [];
}

/**
 * @param  inputs  {InputData[]}
 * @param  silence {Boolean}
 *
 * @return {Function[]}
 */
function getValidateCallbacks( inputs, silence = false ) {
	const callbacks = [];

	inputs?.[ 0 ]?.getContext()?.reset( { silence } );

	for ( const input of inputs ) {
		if ( !(
			input instanceof InputData
		) ) {
			throw new Error( 'Input is not instance of InputData' );
		}
		callbacks.push(
			( resolve, reject ) => {
				input.reporting.validateOnChangeState().
					then( resolve ).
					catch( reject );
			},
		);
	}

	return callbacks;
}

/**
 * @param  inputs  {InputData[]}
 * @param  silence {Boolean}
 * @return {Promise<unknown[]>}
 */
function validateInputs( inputs, silence = false ) {
	return Promise.all(
		getValidateCallbacks( inputs, silence ).map(
			current => new Promise( current ),
		),
	);
}

/**
 * @param inputs  {InputData[]}
 * @param silence {Boolean}
 */
function validateInputsAll( inputs, silence = false ) {
	return allRejected( getValidateCallbacks( inputs, silence ) );
}

export {
	createReport,
	validateInputs,
	validateInputsAll,
	createDefaultRestrictions,
	getValidateCallbacks,
	resetReportingRegistry,
};
