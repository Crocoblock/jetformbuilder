import MaxFilesHtmlAttr from './MaxFilesHtmlAttr';

function MaxFileSizeHtmlAttr() {
	MaxFilesHtmlAttr.call( this );

	this.attrName = 'max_size';

	/**
	 * @param input {FileData|InputData}
	 */
	this.setInput = function ( input ) {
		MaxFilesHtmlAttr.prototype.setInput.call( this, input );

		const { max_size: maxSize = 1 } = JSON.parse(
			input.previewsContainer.dataset.args,
		);

		this.initial = +maxSize;
	};
}

MaxFileSizeHtmlAttr.prototype = Object.create( MaxFilesHtmlAttr.prototype );

export default MaxFileSizeHtmlAttr;