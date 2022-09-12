import { createFileList, isFile } from './functions';

const { InputData } = window.JetFormBuilderAbstract;

/**
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {Node|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 *
 * @constructor
 */
function FileData() {
	InputData.call( this );

	this.isMultiple        = false;
	this.previewsContainer = null;
	this.wrapper           = null;
	this.prevFiles         = null;
	this.errorsEl          = null;

	this.isSupported    = function ( node ) {
		return isFile( node );
	};
	this.onChange       = function () {
		InputData.prototype.onChange.call( this );

		// re-init sortable for new previews
		this.sortable();
	};
	this.addListeners   = function () {
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
	};
	this.setNode        = function ( node ) {
		InputData.prototype.setNode.call( this, node );

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
	};
	this.sortable       = function () {
		jQuery( this.previewsContainer ).unbind();

		jQuery( this.previewsContainer ).sortable( {
			items: '.jet-form-builder-file-upload__file',
			forcePlaceholderSize: true,
		} ).bind( 'sortupdate', () => this.onSortCallback() );
	};
	this.onSortCallback = function ( e, ui ) {
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
	};
	/**
	 * @private
	 */
	this.loadFiles = function () {
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
	};
	this.addRemoveHandler = function ( preview ) {
		preview.querySelector(
			'.jet-form-builder-file-upload__file-remove',
		).addEventListener(
			'click',
			this.removeFile.bind( this ),
		);
	};
	this.removeFile       = function ( { target } ) {
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
	};
	this.valueType        = function () {
		return FileList;
	};
	/**
	 * @private
	 */
	this.createFile = function ( blob, fileName ) {
		return new File( [ blob ], fileName, blob );
	};
}

FileData.prototype = Object.create( InputData.prototype );

export default FileData;