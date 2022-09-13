const { CalculatedFormula } = JetFormBuilderAbstract;

/**
 * @param formulaString {String}
 * @param input {InputData}
 * @constructor
 */
function DynamicStaticValue( formulaString, input ) {
	const formula = new CalculatedFormula( formulaString, input.root );

	formula.setResult = () => {
		input.value.current = formula.calculate();
	};
	formula.setResult();
}

export default DynamicStaticValue;