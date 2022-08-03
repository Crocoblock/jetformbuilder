import InputData from './InputData';
import { createFileList } from './functions';
import { isFile } from '../supports';

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
		return isFile( node );
	}

	onChange() {
		super.onChange();

		// re-init sortable for new previews
		this.sortable();
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const { files } = event.target;

			if ( !this.isMultiple ) {
				this.value.current = files;

				return;
			}

			this.value.current = createFileList(
				[ ...this.prevFiles ?? [], ...event.target.files ],
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

		this.sortable();
		this.loadFiles();
	}

	sortable() {
		jQuery( this.previewsContainer ).unbind();

		jQuery( this.previewsContainer ).sortable( {
			items: '.jet-form-builder-file-upload__file',
			forcePlaceholderSize: true,
		} ).bind( 'sortupdate', () => this.onSortCallback() );
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

		this.value.current = transfer.files;
	}

	/**
	 * @private
	 */
	loadFiles() {
		const files = this.previewsContainer.querySelectorAll(
			'.jet-form-builder-file-upload__file',
		);

		const urls = [];

		for ( const preview of files ) {
			this.addRemoveHandler( preview );

			const url          = preview.dataset.file;
			const removeNode   = preview.querySelector(
				'.jet-form-builder-file-upload__file-remove',
			);
			const { fileName } = removeNode.dataset;

			urls.push( [ url, fileName ] );
		}

		Promise.allSettled( urls.map( ( [ url, fileName ] ) => (
			new Promise( ( resolve, reject ) => {
				fetch( url ).then(
					response => response.blob(),
				).then(
					blob => resolve( this.createFile( blob, fileName ) ),
				).catch( reject );
			} )
		) ) ).then( values => {
			const files = values.map( ( { value } ) => value );

			this.value.current = createFileList( files );
		} );
	}

	addRemoveHandler( preview ) {
		preview.querySelector(
			'.jet-form-builder-file-upload__file-remove',
		).addEventListener(
			'click',
			this.removeFile.bind( this ),
		);
	}

	removeFile( { target } ) {
		const className = '.jet-form-builder-file-upload__file-remove';

		if ( !target.matches( className ) ) {
			target = target.closest( className );
		}

		const { fileName } = target.dataset;

		const dt = new DataTransfer();

		for ( const file of this.value ) {
			if ( fileName !== file.name ) {
				dt.items.add( file );
			}
		}

		this.value.current = dt.files;
	}

	valueType() {
		return FileList;
	}

	/**
	 * @private
	 */
	createFile( blob, fileName ) {
		return new File( [ blob ], fileName, blob );
	}

}

export default FileData;