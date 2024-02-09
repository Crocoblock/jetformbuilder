import './mainModule';
import CalculatedData from '../input';
import SignalCalculated from '../signal';

describe( 'CalculatedData', () => {
	let calculatedData;

	JetFormBuilderAbstract.CalculatedFormula.mockImplementation( function () {
		this.observe   = jest.fn();
		this.setResult = jest.fn().mockImplementation( () => {
			calculatedData.value.current = 30;
		} );
		this.calculate = () => 30;
	} );

	beforeEach( () => {
		document.body.innerHTML = `
      <div class="jet-form-builder__calculated-field" data-formula="10 + 20" data-precision="2" data-sep-decimal="." data-sep-thousands="," data-value-type="number">
        <input name="calculated" />
      </div>
    `;

		calculatedData       = new CalculatedData();
		calculatedData.value = {
			current: 0,
			applySanitizers: val => val,
		};
		calculatedData.beforeSubmit = () => {};
		calculatedData.setNode( document.querySelector( 'input' ) );
		calculatedData.setValue();
	} );

	it( 'initializes with calculated field properties', () => {
		expect( calculatedData.formula ).toBe( '10 + 20' );
		expect( calculatedData.precision ).toBe( 2 );
		expect( calculatedData.sepDecimal ).toBe( '.' );
		expect( calculatedData.sepThousands ).toBe( ',' );
		expect( calculatedData.valueTypeProp ).toBe( 'number' );
	} );

	it( 'calculates and sets value on initialization', () => {
		expect( JetFormBuilderAbstract.CalculatedFormula ).toHaveBeenCalled();
		expect( calculatedData.value.current ).toBe( 30 );
	} );

	it( 'formats calculated value correctly', () => {
		// This test assumes the value is set and now needs formatting
		// according to precision and separators
		calculatedData.value.current = 1234567.89; // Example value to format

		const signalCalculated = new SignalCalculated();
		signalCalculated.input = calculatedData;
		const formattedValue   = signalCalculated.convertValue();

		expect( formattedValue ).toBe( '1,234,567.89' );
	} );
} );