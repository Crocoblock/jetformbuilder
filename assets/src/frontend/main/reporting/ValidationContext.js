function ValidationContext( root ) {
	/**
	 * @type {Observable}
	 */
	this.root = root;

	this.reportedFirst = false;
	this.silence       = true;

}

ValidationContext.prototype = {
	reset( props = {} ) {
		this.reportedFirst = false;
		this.silence       = props?.silence ?? true;
	},
	reportFirst() {
		this.reportedFirst = true;
	},
};

export default ValidationContext;

