import BaseHtmlAttr from './BaseHtmlAttr';

function MaxFilesHtmlAttr() {
	BaseHtmlAttr.call( this );

	this.attrName = 'max_files';

	/**
	 * @param input {InputData}
	 * @return {boolean}
	 */
	this.isSupported = function ( input ) {
		const [ node ] = input.nodes;

		return 'file' === node.type;
	};

	/**
	 * @param input {FileData|InputData}
	 */
	this.setInput = function ( input ) {
		BaseHtmlAttr.prototype.setInput.call( this, input );

		const { max_files = 1 } = JSON.parse(
			input.previewsContainer.dataset.args,
		);

		this.initial = +max_files;
	};

	this.addWatcherAttr = () => {};
}

MaxFilesHtmlAttr.prototype = Object.create( BaseHtmlAttr.prototype );

export default MaxFilesHtmlAttr;