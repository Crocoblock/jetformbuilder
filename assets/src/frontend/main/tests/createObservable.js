import Observable from '../Observable';
import { createInput } from '../inputs/functions';
import InputData from '../inputs/InputData';
import {
	createDefaultRestrictions,
	createReport,
} from '../reporting/functions';
import BrowserReporting from '../reporting/BrowserReporting';

jest.mock( '../inputs/functions', () => (
	{
		createInput: jest.fn(),
		getParsedName: jest.fn().mockImplementation( name => name ),
	}
) );

jest.mock( '../reporting/functions', () => (
	{
		createReport: jest.fn(),
		createDefaultRestrictions: jest.fn(),
	}
) );

jest.mock( '../submit/FormSubmit', () => jest.fn().
	mockImplementation( () => (
		{
			submit: jest.fn(),
			submitter: {},
		}
	) ) );

beforeAll( () => {
	createInput.mockImplementation( ( node, root ) => {
		const input = new InputData();
		input.setNode( node );
		input.setRoot( root );

		return input;
	} );
	createReport.mockImplementation( ( input ) => {
		const reporting = new BrowserReporting();
		reporting.setInput( input );

		return reporting;
	} );
} );

/**
 * @return {Observable}
 */
function createObservable() {
	const observable    = new Observable();
	observable.rootNode = document.createElement( 'form' );

	return observable;
}

export default createObservable;