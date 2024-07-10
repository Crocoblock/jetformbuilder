import BaseFileRestriction from './BaseFileRestriction';

function FileExtensionRestriction() {
	BaseFileRestriction.call( this );

	this.watchedAttrs.push( 'file_ext' );

	this.isSupported = function ( node, reporting ) {
		const { file_ext: fileExt = false } = reporting.input.attrs;

		return false !== fileExt;
	};

	this.validate = function () {
		const { file_ext: fileExt } = this.reporting.input.attrs;

		return fileExt.value.current.includes( this.file.type );
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_ext' );
	};

}

FileExtensionRestriction.prototype = Object.create(
	BaseFileRestriction.prototype );

export default FileExtensionRestriction;