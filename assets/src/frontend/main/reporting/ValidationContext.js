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
	resetAll() {
		this.reset();

		if ( !this.root.parent ) {
			return;
		}

		this.root.parent.root.context.reset();
	},
	isReportedFirst() {
		if ( !this.root.parent ) {
			return this.reportedFirst;
		}

		return this.root.parent.root.context.reportedFirst;
	},
	reportFirst() {
		if ( !this.root.parent ) {
			this.reportedFirst = true;

			return;
		}

		this.root.parent.root.context.reportedFirst = true;
	},
};

export default ValidationContext;

