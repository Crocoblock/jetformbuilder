import createObservable from '../../tests/createObservable';
import CalculatedFormula from '../CalculatedFormula';

jest.mock( '../getFilters', () => jest.fn( () => [] ) );
jest.mock( '../attachConstNamespace', () => jest.fn() );

// eslint-disable-next-line max-lines-per-function
describe( 'CalculatedFormula', () => {
	let observable;

	beforeEach( () => {
		// Ensure Observable is correctly mocked or imported
		observable                    = createObservable();
		observable.rootNode.innerHTML = `
			<input type="number" name="input_1" value="24" data-jfb-sync />
			<input type="number" name="input_2" value="36" data-jfb-sync />
		`.trim();

		observable.observe();
	} );

	it( 'should observe simple formula parts', () => {
		const formula     = new CalculatedFormula(
			observable,
			{ forceFunction: true },
		);
		formula.setResult = () => {};

		formula.observe( '10 + 20' );
		expect( formula.parts.length ).toBe( 0 );
		expect( formula.calculate() ).toBe( 30 );

		// conditional formula
		formula.observe( '0 ? 10 + 20 : 5 * 5' );
		expect( formula.calculate() ).toBe( 25 );
	} );

	it( 'should handle observed inputs', () => {
		const formula = new CalculatedFormula( observable );

		let formulaResult;
		formula.setResult = () => {
			formulaResult = formula.calculate();
		};

		formula.observe( '%input_1% + %input_2%' );
		formula.setResult();

		expect( formulaResult ).toBe( 60 );

		// from 24 to 10
		observable.getInput( 'input_1' ).value.current = 10;

		expect( formulaResult ).toBe( 46 );

		// from 36 to 20
		observable.getInput( 'input_2' ).value.current = 20;

		expect( formulaResult ).toBe( 30 );
	} );

	it( 'should manage watchers for reactive updates', () => {
		const formula = new CalculatedFormula( observable );
		formula.observe( '%input_1% + 20' );
		expect( formula.watchers.length ).toBeGreaterThan( 0 );
		formula.clearWatchers();
		expect( formula.watchers.length ).toBe( 0 );
	} );

	it( 'should return string formula directly if parts are not observed',
		() => {
			const formula = new CalculatedFormula( observable );
			formula.observe( 'Non-observed string' );
			expect( formula.calculate() ).toBe( 'Non-observed string' );
		} );

	it( 'should parse complex formula', () => {
		const formula = new CalculatedFormula( observable );

		let formulaResult;
		formula.setResult = () => {
			formulaResult = formula.calculate();
		};

		observable.getInput( 'input_1' ).value.current = 2023;
		formula.observe(
			'(((%input_1%) % 4 == 0 ? 1:0) + ((%input_1%) % 400 == 0 ? 1:0) - ((%input_1%) % 100 == 0 ? 1:0)) == 1 ? %input_1%0229 : %input_1%0228',
		);
		formula.setResult();

		expect( formulaResult ).toBe( 20230228 );

		// another year
		observable.getInput( 'input_1' ).value.current = 2024;
		expect( formulaResult ).toBe( 20240229 );
	} );
} );