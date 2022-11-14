const { CalculatedFormula } = JetFormBuilderAbstract;

function BaseReactiveProperty( name = '' ) {
	this.attrName = name;
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
		return input.attrs.hasOwnProperty( this.attrName );
	},

	/**
	 * @param input {InputData}
	 */
	runObserve( input ) {
		/**
		 * @type {BaseHtmlAttr}
		 */
		const htmlAttr = input.attrs[ this.attrName ];

		const formula = new CalculatedFormula( input );
		formula.observe( htmlAttr.initial );

		this.observe( htmlAttr, formula );
	},
	/**
	 * @param attr {BaseHtmlAttr}
	 * @param formula {CalculatedFormula}
	 */
	observe( attr, formula ) {
		formula.setResult = () => {
			attr.value.current = formula.calculate();
		};
		formula.setResult();
	},
};

export default BaseReactiveProperty;