function ReportingContext( root ) {
	/**
	 * @type {Observable}
	 */
	this.root = root;

	this.reportedFirst = false;
	this.silence       = true;

}

ReportingContext.prototype = {
	reset( props = {} ) {
		this.reportedFirst = false;
		this.setSilence( props?.silence ?? true );
	},
	reportFirst() {
		this.reportedFirst = true;
	},
	setSilence( value ) {
		this.silence = !!value;
	},
};

export default ReportingContext;

