import ReportingContext from '../reporting/ReportingContext';
import createObservable from './createObservable';
import Observable from '../Observable';

const {
	      doAction,
      } = JetPlugins.hooks;

describe( 'Observable', () => {
	let observable;

	beforeEach( () => {
		observable = createObservable();

		observable.rootNode.innerHTML = `
<input type="text" name="text_field" data-jfb-sync/>
`;
		observable.observe();
	} );

	it( 'initializes with default properties', () => {
		const localRoot = new Observable();
		expect( localRoot.parent ).toBeNull();
		expect( localRoot.dataInputs ).toEqual( {} );
		expect( localRoot.isObserved ).toBeFalsy();
		expect( localRoot.context ).toBeInstanceOf( ReportingContext );
	} );

	it( 'observes the form correctly', () => {
		expect( observable.isObserved ).toBeTruthy();
		expect( observable.rootNode ).not.toBe( null );
		// Verify that actions are called
		expect( doAction ).
			toHaveBeenCalledWith( 'jet.fb.observe.before', observable );
		expect( doAction ).
			toHaveBeenCalledWith( 'jet.fb.observe.after', observable );
	} );

	it( 'adds and retrieves inputs correctly', () => {
		// Assume `createInput` correctly returns an instance of `InputData`
		// Validate the input has been added
		expect( Object.keys( observable.dataInputs ).length ).
			toBeGreaterThan( 0 );
	} );
} );