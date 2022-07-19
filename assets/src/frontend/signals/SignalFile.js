import BaseSignal from './BaseSignal';
import { createFileList } from '../observe/functions';

class SignalFile extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'file' === node.type;
	}

	/**
	 * @param inputData {FileData|InputData}
	 */
	runSignal( inputData ) {
		const [ node ]  = inputData.nodes;
		const previews  = [];
		const container = inputData.previewsContainer;

		for ( const file of inputData.value ) {
			previews.push( this.getPreview( inputData, file ) );
		}

		while ( container.firstChild ) {
			container.removeChild( container.firstChild );
		}

		container.append( ...previews );
		node.files = createFileList( [ ...inputData.value ] );
	}

	getPreview( inputData, file ) {
		const removeButton = inputData.previewsContainer.querySelector(
			`[data-file-name="${ file.name }"]`,
		);

		if ( !removeButton ) {
			return this.createPreview( inputData, file );
		}

		return removeButton.closest(
			'.jet-form-builder-file-upload__file',
		);
	}

	createPreview( inputData, file ) {
		const url         = URL.createObjectURL( file );
		let { innerHTML } = inputData.template;
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