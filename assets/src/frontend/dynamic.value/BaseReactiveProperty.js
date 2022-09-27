const { CalculatedFormula } = JetFormBuilderAbstract;

function BaseReactiveProperty() {
}

BaseReactiveProperty.prototype = {
	/**
	 * Name of data attribute
	 */
	attrName: '',
	/**
	 * If you need specific check,
	 * you can rewrite this function
	 *
	 * @param input {InputData}
	 * @return {boolean}
	 */
	isSupported( input ) {
		return false;
	},
	/**
	 * @param input {InputData}
	 * @param formula {CalculatedFormula}
	 */
	observe( input, formula ) {},
	/**
	 * @param input {InputData}
	 */
	runObserve( input ) {
		const [ node ] = input.nodes;

		const formula = new CalculatedFormula(
			node.dataset[ this.attrName ] ?? '',
			input.root,
		);

		this.observe( input, formula );
	},
};

export default BaseReactiveProperty;