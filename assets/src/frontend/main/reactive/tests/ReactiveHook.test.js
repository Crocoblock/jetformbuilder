import ReactiveHook from '../ReactiveHook'; // Adjust the path as necessary

describe( 'ReactiveHook', () => {
	let reactiveHook;

	beforeEach( () => {
		reactiveHook = new ReactiveHook();
	} );

	it( 'should add filters and apply them in order', () => {
		const filter1 = jest.fn().mockImplementation( ( value ) => value + 1 );
		const filter2 = jest.fn().mockImplementation( ( value ) => value * 2 );

		reactiveHook.addFilter( filter1 );
		reactiveHook.addFilter( filter2 );

		const result = reactiveHook.applyFilters( 1 ); // Initial value is 1

		// Verify the filters were applied in order
		expect( filter1 ).toHaveBeenCalledWith( 1 );
		expect( filter2 ).toHaveBeenCalledWith( 2 ); // Output from filter1 is
	                                                 // input to filter2
		expect( result ).toBe( 4 ); // (1 + 1) * 2
	} );

	it( 'should allow filters to be removed', () => {
		const filter       = jest.fn().
			mockImplementation( ( value ) => value + 1 );
		const removeFilter = reactiveHook.addFilter( filter );

		let result = reactiveHook.applyFilters( 1 );
		expect( result ).toBe( 2 ); // 1 + 1

		removeFilter(); // Remove the filter

		result = reactiveHook.applyFilters( 1 );
		expect( result ).toBe( 1 ); // Filter should no longer be applied
		expect( filter ).toHaveBeenCalledTimes( 1 ); // Filter should only be
	                                                 // called once
	} );

	it( 'should pass additional parameters to filters', () => {
		const filter = jest.fn().
			mockImplementation( ( value, multiplier ) => value * multiplier );
		reactiveHook.addFilter( filter );

		const result = reactiveHook.applyFilters( 2, 3 ); // Initial value is
	                                                      // 2, multiplier is 3

		expect( filter ).toHaveBeenCalledWith( 2, 3 );
		expect( result ).toBe( 6 ); // 2 * 3
	} );

	it( 'should handle no filters being added', () => {
		const result = reactiveHook.applyFilters( 5 ); // Initial value is 5

		// Verify that the result is the same as the input when no filters are
		// applied
		expect( result ).toBe( 5 );
	} );
} );