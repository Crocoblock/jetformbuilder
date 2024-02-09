import { getParsedName } from '../functions';

describe( 'getParsedName', () => {
	it( 'should extract the base name for multiple fields', () => {
		const name       = 'test_checkboxes-test[]';
		const parsedName = getParsedName( name );
		expect( parsedName ).toBe( 'test_checkboxes-test' );
	} );

	it( 'should extract the field name within a repeater', () => {
		const name       = 'test_repeater-test[0][test_checkboxes-test]';
		const parsedName = getParsedName( name );
		expect( parsedName ).toBe( 'test_checkboxes-test' );
	} );

	it( 'should return the input name unchanged if it does not match specific patterns',
		() => {
			const name       = 'single_field-test';
			const parsedName = getParsedName( name );
			expect( parsedName ).toBe( name );
		} );

	it( 'should handle names with nested repeaters and extract the correct field name',
		() => {
			const name       = 'test_repeater-test[0][test_checkboxes-test][]';
			const parsedName = getParsedName( name );
			expect( parsedName ).toBe( 'test_checkboxes-test' );
		} );
} );