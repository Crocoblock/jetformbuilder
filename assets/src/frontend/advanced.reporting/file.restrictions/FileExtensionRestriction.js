import BaseFileRestriction from './BaseFileRestriction';

function FileExtensionRestriction() {
	BaseFileRestriction.call( this );

	this.isSupported = function ( node, reporting ) {
		const { file_ext = false } = reporting.input.attrs;

		return false !== file_ext;
	};

	this.validate = function () {
		const { file_ext } = this.reporting.input.attrs;

		return file_ext.value.current.includes( this.file.type );
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_ext' );
	};

}

FileExtensionRestriction.prototype = Object.create(
	BaseFileRestriction.prototype );

export default FileExtensionRestriction;