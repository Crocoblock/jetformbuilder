import MaxFilesHtmlAttr from './MaxFilesHtmlAttr';

function FileExtensionHtmlAttr() {
	MaxFilesHtmlAttr.call( this );

	this.attrName = 'file_ext';

	this.isSupported = function ( input ) {
		const [ node ] = input.nodes;

		return 'file' === node.type && Boolean( node.accept );
	};

	/**
	 * @param input {FileData|InputData}
	 */
	this.setInput = function ( input ) {
		MaxFilesHtmlAttr.prototype.setInput.call( this, input );
		const [ node ] = input.nodes;

		this.initial = node.accept.split( ',' );
	};

	this.addWatcherAttr = function () {
		const [ node ] = this.input.nodes;

		this.value.watch( () => {
			node.accept = this.value.current.join( ',' );
		} );
	};
}

FileExtensionHtmlAttr.prototype = Object.create( MaxFilesHtmlAttr.prototype );

export default FileExtensionHtmlAttr;