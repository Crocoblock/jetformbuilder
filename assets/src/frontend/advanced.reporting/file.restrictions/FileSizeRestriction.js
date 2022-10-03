import BaseFileRestriction from './BaseFileRestriction';

function FileSizeRestriction() {
	BaseFileRestriction.call( this );

	this.validate = function () {
		/**
		 * @type {SignalFile}
		 */
		const callable = this.reporting.input.callable;

		return this.file.size < callable.settings.max_size;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_max_size' );
	};

}

FileSizeRestriction.prototype = Object.create( BaseFileRestriction.prototype );

export default FileSizeRestriction;