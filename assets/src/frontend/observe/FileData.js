import InputData from './InputData';
import { createFileList } from './functions';

class FileData extends InputData {

	constructor() {
		super();

		this.isMultiple = false;

		this.previewsContainer = null;
		this.wrapper           = null;
		this.prevFiles         = null;
		this.errorsEl          = null;
	}

	isSupported( node ) {
		return 'file' === node.type;
	}

	addListener() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const { files } = event.target;

			if ( !this.isMultiple ) {
				this.value = files;
			}

			if ( !(
				this.prevFiles instanceof FileList
			) ) {
				this.value     = files;
				this.prevFiles = files;

				return;
			}
			this.value = createFileList(
				[ ...this.prevFiles, ...event.target.files ],
			);
		} );
	}

	setNode( node ) {
		super.setNode( node );

		this.wrapper           = node.closest(
			'.jet-form-builder-file-upload',
		);
		this.previewsContainer = this.wrapper.querySelector(
			'.jet-form-builder-file-upload__files',
		);
		this.template          = this.wrapper.
			closest( '.field-type-media-field' ).
			querySelector( '.jet-form-builder__preview-template' );

		this.isMultiple = node.multiple;

		jQuery( this.previewsContainer ).sortable( {
			items: '.jet-form-builder-file-upload__file',
			forcePlaceholderSize: true,
		} ).bind( 'sortupdate', () => this.onSortCallback() );

		this.loadFiles();
	}

	onSortCallback( e, ui ) {
		const transfer  = new DataTransfer();
		const [ input ] = this.nodes;

		const removeButtons = this.previewsContainer.querySelectorAll(
			'.jet-form-builder-file-upload__file-remove',
		);

		for ( const removeButton of removeButtons ) {
			const { fileName } = removeButton.dataset;

			for ( const file of input.files ) {
				if ( file.name !== fileName ) {
					continue;
				}

				transfer.items.add( file );
			}
		}

		this.value = transfer.files;
	}

	/**
	 * @private
	 */
	loadFiles() {
		const files = this.previewsContainer.querySelectorAll(
			'.jet-form-builder-file-upload__file',
		);

		for ( const preview of files ) {
			const url          = preview.dataset.file;
			const removeNode   = preview.querySelector(
				'.jet-form-builder-file-upload__file-remove',
			);
			const { fileName } = removeNode.dataset;

			fetch( url ).then(
				response => response.blob(),
			).then(
				blob => this.addFileToInput( blob, fileName ),
			);
		}
	}

	/**
	 * @private
	 */
	addFileToInput( blob, fileName ) {
		const newFile   = new File( [ blob ], fileName, blob );
		const [ input ] = this.nodes;

		input.files = createFileList(
			[ ...input.files, newFile ],
		);

		input.jfbPrevFiles = input.files;
	}

}

export default FileData;