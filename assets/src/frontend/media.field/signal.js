import { appendNodes, createFile, createFileList, isFile } from './functions';

const { BaseSignal } = window.JetFormBuilderAbstract;

/**
 * @property {FileData} input
 */
function SignalFile() {
	BaseSignal.call( this );

	this.lock.current = true;

	this.isSupported = function ( node, inputData ) {
		return isFile( node );
	};
	this.setInput    = function ( input ) {
		BaseSignal.prototype.setInput.call( this, input );

		const [ node ] = input.nodes;

		this.wrapper           = node.closest(
			'.jet-form-builder-file-upload',
		);
		this.previewsContainer = this.wrapper.querySelector(
			'.jet-form-builder-file-upload__files',
		);
		this.template          = this.wrapper.
			closest( '.field-type-media-field' ).
			querySelector( '.jet-form-builder__preview-template' );
	};

	this.runSignal = function () {
		const [ node ]    = this.input.nodes;
		const previews    = [];
		const { current } = this.input.value;
		const files       = current ?? [];

		for ( const file of files ) {
			previews.push( this.getPreview( file ) );
		}

		appendNodes( this.previewsContainer, previews );

		node.files           = createFileList( [ ...files ] );
		this.input.prevFiles = files;

		this.sortable();
	};
}

SignalFile.prototype = Object.create( BaseSignal.prototype );
/**
 * @type {HTMLElement}
 */
SignalFile.prototype.wrapper = null;
/**
 * @type {HTMLElement}
 */
SignalFile.prototype.previewsContainer = null;
/**
 * @type {HTMLTemplateElement}
 */
SignalFile.prototype.template = null;
/**
 * @type {{
 *     max_files: {Number}
 *     max_size: {Number}
 * }}
 */
SignalFile.prototype.settings = {};

SignalFile.prototype.loadFiles = function () {
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

	if ( !urls.length ) {
		this.lock.current = false;

		return;
	}

	Promise.allSettled( urls.map( ( [ url, fileName ] ) => (
		new Promise( ( resolve, reject ) => {
			fetch( url ).then(
				response => response.blob(),
			).then(
				blob => resolve( createFile( blob, fileName ) ),
			).catch( reject );
		} )
	) ) ).then( values => {
		const files = values.map( ( { value } ) => value );

		this.lock.current = false;
		this.input.silenceSet( createFileList( files ) );
	} ).catch( () => {
		this.lock.current = false;
	} );
};

SignalFile.prototype.sortable = function () {
	jQuery( this.previewsContainer ).unbind();

	jQuery( this.previewsContainer ).sortable( {
		items: '.jet-form-builder-file-upload__file',
		forcePlaceholderSize: true,
	} ).bind( 'sortupdate', () => this.onSortCallback() );
};

SignalFile.prototype.onSortCallback = function ( e, ui ) {
	const transfer  = new DataTransfer();
	const [ input ] = this.input.nodes;

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

	this.input.value.current = transfer.files;
};

SignalFile.prototype.addRemoveHandler = function ( preview ) {
	preview.querySelector(
		'.jet-form-builder-file-upload__file-remove',
	).addEventListener(
		'click',
		this.removeFile.bind( this ),
	);
};

SignalFile.prototype.getPreview = function ( file ) {
	const removeButton = this.previewsContainer.querySelector(
		`[data-file-name="${ file.name }"]`,
	);

	if ( !removeButton ) {
		const preview = this.createPreview( file );
		this.addRemoveHandler( preview );

		return preview;
	}

	return removeButton.closest(
		'.jet-form-builder-file-upload__file',
	);
};

SignalFile.prototype.createPreview = function ( file ) {
	const url         = URL.createObjectURL( file );
	let { innerHTML } = this.template;
	innerHTML         = innerHTML.replace( '%file_url%', url );
	innerHTML         = innerHTML.replace( '%file_name%', file.name );

	const wrapper     = document.createElement( 'template' );
	wrapper.innerHTML = innerHTML;

	const node = wrapper.content.firstChild;

	if ( /^image\//.test( file.type ) ) {
		const image = document.createElement( 'img' );
		image.src   = url;
		image.alt   = file.name;

		node.prepend( image );
	}

	return node;
};

SignalFile.prototype.removeFile = function ( { target } ) {
	const className = '.jet-form-builder-file-upload__file-remove';
	const { value } = this.input;

	if ( !target.matches( className ) ) {
		target = target.closest( className );
	}

	const { fileName } = target.dataset;

	const dt = new DataTransfer();

	for ( const file of value.current ) {
		if ( fileName !== file.name ) {
			dt.items.add( file );
		}
	}

	value.current = dt.files;
};

SignalFile.prototype.isSingle = function () {
	return (
		!this.settings?.max_files || this.settings.max_files <= 1
	);
};

/**
 * @param fileName
 * @return {Element}
 */
SignalFile.prototype.getFileNode = function ( fileName ) {
	const attr = `data-file-name="${ fileName }"`;

	const removeBtn = this.previewsContainer.querySelector(
		`.jet-form-builder-file-upload__file-remove[${ attr }]`,
	);

	return removeBtn.closest( '.jet-form-builder-file-upload__file' );
};
export default SignalFile;