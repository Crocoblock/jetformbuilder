import ReactiveVar from '../ReactiveVar'; // Adjust the path as necessary
import { isEmpty } from '../../functions';

// Mock the isEmpty function if needed
jest.mock( '../../functions', () => (
	{
		isEmpty: jest.fn(),
	}
) );

// eslint-disable-next-line max-lines-per-function
describe( 'ReactiveVar', () => {
	let reactiveVar;

	beforeEach( () => {
		reactiveVar = new ReactiveVar();
	} );

	it( 'should initialize with the provided value', () => {
		const initialValue = 10;
		const rVar         = new ReactiveVar( initialValue );
		expect( rVar.current ).toBe( initialValue );
	} );

	it( 'should not be reactive until make is called', () => {
		const spy = jest.fn();
		reactiveVar.watch( spy );
		reactiveVar.current = 'new value'; // Before make is called
		expect( spy ).not.toHaveBeenCalled();

		reactiveVar.make(); // Activate reactivity
		reactiveVar.current = 'another new value'; // After make is called
		expect( spy ).toHaveBeenCalled();
	} );

	it( 'should allow watching for changes once after make is called', () => {
		const spy = jest.fn();
		reactiveVar.watchOnce( spy );
		reactiveVar.make();
		reactiveVar.current = 'new value';
		expect( spy ).toHaveBeenCalledTimes( 1 );

		// Further changes should not trigger the watcher
		reactiveVar.current = 'another value';
		expect( spy ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should sanitize new values after make is called', () => {
		const sanitizer = jest.fn().
			mockImplementation( val => val + '-sanitized' );
		reactiveVar.sanitize( sanitizer );
		reactiveVar.make();
		reactiveVar.current = 'test';
		expect( reactiveVar.current ).toBe( 'test-sanitized' );
	} );

	it( 'should not notify watchers when silenced, after make is called',
		() => {
			const spy = jest.fn();
			reactiveVar.watch( spy );
			reactiveVar.make();
			reactiveVar.silence();
			reactiveVar.current = 'new value';
			expect( spy ).not.toHaveBeenCalled();
		} );

	it( 'should only set new value if current is empty, respecting make behavior',
		() => {
			// Mock isEmpty to return true to simulate an empty state
			isEmpty.mockImplementation( () => true );

			reactiveVar.make(); // Need to make it reactive

			const newValue = 'non-empty';
			reactiveVar.setIfEmpty( newValue );
			expect( reactiveVar.current ).toBe( newValue );

			// Simulate current value not being empty
			isEmpty.mockImplementation( () => false );
			reactiveVar.setIfEmpty( 'another value' );
			expect( reactiveVar.current ).toBe( newValue ); // Should not change
		} );

	it( 'should properly toggle silence mode and affect notifications', () => {
		const spy = jest.fn();
		reactiveVar.watch( spy );
		reactiveVar.make();
		reactiveVar.silence(); // First call - enable silence
		reactiveVar.current = 'silent update';
		expect( spy ).not.toHaveBeenCalled();

		reactiveVar.silence(); // Second call - disable silence
		reactiveVar.current = 'loud update';
		expect( spy ).toHaveBeenCalled();
	} );
} );
