import BaseFileRestriction from './BaseFileRestriction';

function FileSizeRestriction() {
	BaseFileRestriction.call( this );

	this.validate = function () {
		const { max_size } = this.reporting.input.attrs;

		return this.file.size < max_size.value.current;
	};

	this.setReporting = function ( reporting ) {
		BaseFileRestriction.prototype.setReporting.call( this, reporting );

		const { max_size } = reporting.input.attrs;

		const validate = () => {
			reporting.validateWithNotice().then( () => {} ).catch( () => {} );
		};

		max_size.value.watch( validate );
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'file_max_size' );
	};

}

FileSizeRestriction.prototype = Object.create( BaseFileRestriction.prototype );

export default FileSizeRestriction;