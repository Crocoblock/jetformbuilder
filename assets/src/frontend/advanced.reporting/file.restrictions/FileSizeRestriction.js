import BaseFileRestriction from './BaseFileRestriction';

function FileSizeRestriction() {
	BaseFileRestriction.call( this );

	this.setReporting = function ( reporting ) {
		BaseFileRestriction.prototype.setReporting.call( this, reporting );
		/**
		 * @type {SignalFile}
		 */
		const callable = this.reporting.input.callable;

		this.max_size = callable.settings.max_size;
	};

	this.validate = function () {
		return this.file.size < this.max_size;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_max_size' );
	};

}

FileSizeRestriction.prototype = Object.create( BaseFileRestriction.prototype );

FileSizeRestriction.prototype.max_size = null;

export default FileSizeRestriction;