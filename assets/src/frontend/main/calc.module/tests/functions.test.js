import {
	toDate,
	toDateTime,
	toTime,
	getTimestamp,
} from '../functions';

describe( 'toDate', () => {
	it( 'should format a Date object to YYYY-MM-DD format', () => {
		const date = new Date( '2023-03-25' );
		expect( toDate( date ) ).toBe( '2023-03-25' );
	} );
} );

describe( 'toTime', () => {
	it( 'should format a Date object to HH:MM format', () => {
		const date = new Date( '2023-03-25T07:09' );
		expect( toTime( date ) ).toBe( '07:09' );
	} );
} );

describe( 'toDateTime', () => {
	it( 'should format a Date object to YYYY-MM-DDTHH:MM format', () => {
		const date = new Date( '2023-03-25T07:09' );
		expect( toDateTime( date ) ).toBe( '2023-03-25T07:09' );
	} );
} );

describe( 'getTimestamp', () => {
	it( 'should return timestamp and type number for numeric input', () => {
		const timestamp = Date.now();
		const result    = getTimestamp( timestamp );
		expect( result ).toEqual( { time: timestamp, type: 'number' } );
	} );

	it( 'should handle date string input and return the start of the day timestamp for date-only string',
		() => {
			const date   = '2023-03-25';
			const result = getTimestamp( date );
			expect( result.time ).
				toBe( new Date( date ).setHours( 0, 0, 0, 0 ) );
			expect( result.type ).toBe( 'date' );
		} );

	it( 'should handle time string input and return the current day with specified time',
		() => {
			const time         = '07:09:00';
			const now          = new Date();
			now.setHours( 7, 9, 0 );
			const result       = getTimestamp( time );

			// Allowing minor difference for test execution time
			expect( result.time ).toBeCloseTo( now.getTime(), -2 );
			expect( result.type ).toBe( 'time' );
		} );

	it( 'should handle datetime string input and return the correct timestamp',
		() => {
			const datetime = '2023-03-25T07:09';
			const result   = getTimestamp( datetime );
			expect( result.time ).toBe( new Date( datetime ).getTime() );
			expect( result.type ).toBe( 'date' );
		} );
} );



