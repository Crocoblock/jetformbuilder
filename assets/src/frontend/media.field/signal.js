import { appendNodes, createFileList, isFile } from './functions';

const { BaseSignal } = window.JetFormBuilderAbstract;

/**
 * @property {FileData} input
 */
function SignalFile() {
	BaseSignal.call( this );

	this.isSupported   = function ( node, inputData ) {
		return isFile( node );
	};
	this.runSignal     = function () {
		const [ node ]    = this.input.nodes;
		const previews    = [];
		const container   = this.input.previewsContainer;
		const { current } = this.input.value;

		for ( const file of current ) {
			previews.push( this.getPreview( file ) );
		}

		appendNodes( container, previews );

		node.files           = createFileList( [ ...current ] );
		this.input.prevFiles = current;
	};
	this.getPreview    = function ( file ) {
		const container    = this.input.previewsContainer;
		const removeButton = container.querySelector(
			`[data-file-name="${ file.name }"]`,
		);

		if ( !removeButton ) {
			const preview = this.createPreview( file );
			this.input.addRemoveHandler( preview );

			return preview;
		}

		return removeButton.closest(
			'.jet-form-builder-file-upload__file',
		);
	};
	this.createPreview = function ( file ) {
		const url         = URL.createObjectURL( file );
		let { innerHTML } = this.input.template;
		innerHTML         = innerHTML.replace( '%file_url%', url );
		innerHTML         = innerHTML.replace( '%file_name%', file.name );

		if ( /^image\//.test( file.type ) ) {
			innerHTML = innerHTML.replace(
				'<!-- preview -->',
				`<img src="${ url }" alt="${ file.name }">`,
			);
		}

		const node     = document.createElement( 'template' );
		node.innerHTML = innerHTML;

		return node.content.firstChild;
	};
}

SignalFile.prototype = Object.create( BaseSignal.prototype );

export default SignalFile;