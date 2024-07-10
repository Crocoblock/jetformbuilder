import BaseFileRestriction from './BaseFileRestriction';

function FileSizeRestriction() {
	BaseFileRestriction.call( this );

	this.watchedAttrs.push( 'max_size' );

	this.validate = function () {
		const { max_size: maxSize } = this.reporting.input.attrs;

		return this.file.size < maxSize.value.current;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_max_size' );
	};

}

FileSizeRestriction.prototype = Object.create( BaseFileRestriction.prototype );

export default FileSizeRestriction;