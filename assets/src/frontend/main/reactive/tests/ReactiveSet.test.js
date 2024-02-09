import ReactiveSet from '../ReactiveSet';

// eslint-disable-next-line max-lines-per-function
describe( 'ReactiveSet', () => {
	let reactiveSet;

	beforeEach( () => {
		reactiveSet = new ReactiveSet( [] );
		reactiveSet.make(); // Activate reactivity
	} );

	it( 'should add a unique value to the set', () => {
		const spy = jest.fn();
		reactiveSet.watch( spy );
		reactiveSet.add( 'test1' );
		expect( reactiveSet.current ).toEqual( [ 'test1' ] );
		expect( spy ).toHaveBeenCalledWith( [] ); // Assuming no previous value

		// Try adding the same value again
		reactiveSet.add( 'test1' );
		// Should not add duplicate
		expect( reactiveSet.current ).toEqual( [ 'test1' ] );
		// Watcher should not be called again for duplicates
		expect( spy ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should remove a value from the set', () => {
		const spy = jest.fn();
		reactiveSet.watch( spy );
		reactiveSet.add( 'test1' );
		reactiveSet.remove( 'test1' );
		expect( reactiveSet.current ).toEqual( [] );
		expect( spy ).toHaveBeenCalledTimes( 2 ); // Once for add and once for
	                                              // remove
	} );

	it( 'should toggle a value in the set', () => {
		reactiveSet.add( 'test1' );
		reactiveSet.toggle( 'test1' );
		expect( reactiveSet.current ).not.toContain( 'test1' ); // Removed

		reactiveSet.toggle( 'test1' );
		expect( reactiveSet.current ).toContain( 'test1' ); // Added back
	} );

	it( 'should force add a value with toggle', () => {
		reactiveSet.add( 'test1' );
		// Force add should not change the set as 'test1' is already added
		reactiveSet.toggle( 'test1', true );
		expect( reactiveSet.current ).toEqual( [ 'test1' ] );
	} );

	it( 'should force remove a value with toggle', () => {
		reactiveSet.add( 'test1' );
		reactiveSet.toggle( 'test1', false );
		expect( reactiveSet.current ).toEqual( [] );
	} );

	it( 'should not notify watchers if the set does not change', () => {
		const spy = jest.fn();
		reactiveSet.watch( spy );
		reactiveSet.add( 'test1' );
		spy.mockReset(); // Reset the spy after the initial add

		// Trying to add 'test1' again should not trigger the watcher
		reactiveSet.add( 'test1' );
		expect( reactiveSet.current ).toEqual( [ 'test1' ] );
		expect( spy ).not.toHaveBeenCalled();
	} );
} );
