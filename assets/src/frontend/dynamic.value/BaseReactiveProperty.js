const { CalculatedFormula } = JetFormBuilderAbstract;

/**
 * Removes floating point noise from a calculated number,
 * e.g. `12 * 0.2` gives `2.4000000000000004`, which must be `2.4`
 * for `min`/`max` attributes to pass the native `step` validation.
 *
 * @param  value {*}
 * @return {*}
 */
function normalizeResult( value ) {
	return 'number' === typeof value && Number.isFinite( value )
	       ? parseFloat( value.toPrecision( 15 ) )
	       : value;
}

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
	 * @param  input {InputData}
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
	 * @param attr    {BaseHtmlAttr}
	 * @param formula {CalculatedFormula}
	 */
	observe( attr, formula ) {
		formula.setResult = () => {
			attr.value.current = normalizeResult( formula.calculate() );
		};
		formula.setResult();
	},
};

export default BaseReactiveProperty;