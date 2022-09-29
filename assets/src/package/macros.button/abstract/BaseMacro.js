function BaseMacro() {
}

BaseMacro.prototype = {
	/**
	 * Can be used in Send Email action & other actions...
	 */
	isServerSide: false,
	/**
	 * Can be used in Calculated field & other field attributes
	 */
	isClientSide: false,
	/**
	 * Ex.: CurrentDate
	 */
	name: '',
	/**
	 * With namespace
	 * Ex.: CT
	 */
	namespace: 'CT',
	/**
	 * @type {null|String|Function}
	 */
	help: null,
	fullName() {
		return `%${ this.namespace }::${ this.name }%`;
	},
};

export default BaseMacro;