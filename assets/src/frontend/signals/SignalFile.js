import BaseSignal from './BaseSignal';
import { appendNodes, createFileList } from '../observe/functions';
import { isFile } from '../supports';

/**
 * @property {FileData} input
 */
class SignalFile extends BaseSignal {

	isSupported( node, inputData ) {
		return isFile( node );
	}

	runSignal() {
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
	}

	getPreview( file ) {
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
	}

	createPreview( file ) {
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
	}

}

export default SignalFile;