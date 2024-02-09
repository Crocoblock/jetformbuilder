import createObservable from '../../tests/createObservable';
import ReactiveVar from '../../reactive/ReactiveVar';
import LoadingReactiveVar from '../../reactive/LoadingReactiveVar';
import InputData from '../InputData';

jest.mock( '../../reactive/ReactiveVar' );
jest.mock( '../../reactive/LoadingReactiveVar' );

jest.mock( '../../signals/functions', () => (
	{
		getSignal: jest.fn().
			mockImplementation( () => (
				{
					input: null,
					lock: {
						current: false,
						make: jest.fn(),
						watchOnce: jest.fn(),
						signals: [],
					},
					// Default value, adjust based on STRICT_MODE in your tests
					// if needed
					triggerjQuery: true,
					// Default to true for simplicity, adjust as needed
					isSupported: jest.fn().mockReturnValue( true ),
					setInput: jest.fn(),
					run: jest.fn(),
					triggerJQuery: jest.fn(),
					runSignal: jest.fn(),
					lockTrigger: jest.fn(),
					unlockTrigger: jest.fn(),
				}
			) ),
	}
) );

jest.mock( '../../functions', () => (
	{
		getOffsetTop: jest.fn().mockReturnValue( 100 ),
		isVisible: jest.fn().mockReturnValue( true ),
	}
) );

let observable;

beforeEach( () => {
	observable = createObservable();

	// Setup a mock HTML environment
	observable.rootNode.innerHTML = `<input name="test" type="text" data-jfb-sync/>`;
	observable.observe();
} );

/* eslint-disable no-undef */
describe( 'InputData initialization', () => {
	it( 'initializes with default properties', () => {
		const input = new InputData();
		expect( input.rawName ).toBe( '' );
		expect( input.nodes ).toEqual( [] );
		// Verify reactive properties are initialized
		expect( input.value ).toBeInstanceOf( ReactiveVar );
		expect( input.loading ).toBeInstanceOf( LoadingReactiveVar );
	} );
} );
/* eslint-enable no-undef */

describe( 'InputData DOM interaction', () => {

	it( 'updates value on input event', () => {

		const input = new InputData();
		input.setNode( document.createElement( 'input' ) );
		input.addListeners();

		// Simulate user typing
		input.nodes[ 0 ].value = 'new value';
		const event            = new Event( 'input' );
		input.nodes[ 0 ].dispatchEvent( event );

		expect( input.value.current ).toBe( 'new value' );
	} );
} );

describe( 'InputData event handling', () => {
	it( 'handles enter key events', () => {

		const input          = new InputData();
		input.handleEnterKey = jest.fn();

		input.setNode( document.createElement( 'input' ) );
		input.addListeners();

		// Mock keydown event with Enter key
		const event = new KeyboardEvent( 'keydown', { key: 'Enter' } );
		input.nodes[ 0 ].dispatchEvent( event );

		expect( input.handleEnterKey ).toHaveBeenCalled();
	} );
} );

describe( 'InputData reporting and validation', () => {

	it( 'validates on blur', () => {
		const mockValidateOnBlur       = jest.fn();
		const input                    = observable.getInput( 'test' );
		input.reporting.validateOnBlur = mockValidateOnBlur;

		// Simulate blur event
		const blurEvent = new Event( 'blur' );
		input.nodes[ 0 ].dispatchEvent( blurEvent );

		expect( mockValidateOnBlur ).toHaveBeenCalled();
	} );
} );



