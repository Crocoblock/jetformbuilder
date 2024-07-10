const {
	      AdvancedRestriction,
      } = JetFormBuilderAbstract;

function MaxFilesRestriction() {
	AdvancedRestriction.call( this );

	this.watchedAttrs.push( 'max_files' );

	this.isSupported = function ( node ) {
		return (
			'file' === node?.type
		);
	};

	this.validate = function () {
		const { max_files: maxFiles } = this.reporting.input.attrs;
		let { current }     = this.reporting.input.value;

		current = current?.length ?? 0;

		return !current || current <= maxFiles.value.current;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'max_files' );
	};
}

MaxFilesRestriction.prototype = Object.create( AdvancedRestriction.prototype );

export default MaxFilesRestriction;