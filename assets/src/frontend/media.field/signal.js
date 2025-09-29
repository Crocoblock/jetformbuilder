import { appendNodes, createFile, createFileList, isFile } from './functions';

const { BaseSignal } = window.JetFormBuilderAbstract;

/**
 * @property {FileData} input Related input
 */
function SignalFile() {
	BaseSignal.call( this );

	this.lock.current = true;

	this.isSupported = function ( node ) {
		return isFile( node );
	};

	this.runSignal = function () {
		const [ node ]    = this.input.nodes;
		const previews    = [];
		const { current } = this.input.value;
		const files       = uniqueByName( current ?? [] );

		for ( const file of files ) {
			previews.push( this.getPreview( file ) );
		}

		appendNodes( this.input.previewsContainer, previews );

		node.files           = createFileList( files );
		this.input.prevFiles = files;

		this.sortable();
	};
}

SignalFile.prototype = Object.create( BaseSignal.prototype );

SignalFile.prototype.loadFiles = function () {
	const files = this.input.previewsContainer.querySelectorAll(
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
		const newFiles = values.map( ( { value } ) => value );


		const unique   = uniqueByName( newFiles );

		this.lock.current = false;
		this.input.silenceSet( createFileList( unique ) );
	} ).catch( () => {
		this.lock.current = false;
	} );
};

SignalFile.prototype.sortable = function () {
	jQuery( this.input.previewsContainer ).unbind();

	jQuery( this.input.previewsContainer ).sortable( {
		items: '.jet-form-builder-file-upload__file',
		forcePlaceholderSize: true,
	} ).bind( 'sortupdate', () => this.onSortCallback() );
};

SignalFile.prototype.onSortCallback = function () {
	const transfer  = new DataTransfer();
	const [ input ] = this.input.nodes;

	const removeButtons = this.input.previewsContainer.querySelectorAll(
		'.jet-form-builder-file-upload__file-remove',
	);

	for ( const removeButton of removeButtons ) {
		const { fileName } = removeButton.dataset;

		for ( const file of input.files ) {
			// eslint-disable-next-line max-depth
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
	const removeButton = this.input.previewsContainer.querySelector(
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
	let { innerHTML } = this.input.template;
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

/**
 * @param  fileName
 * @return {Element}
 */
SignalFile.prototype.getFileNode = function ( fileName ) {
	const attr = `data-file-name="${ fileName }"`;

	const removeBtn = this.input.previewsContainer.querySelector(
		`.jet-form-builder-file-upload__file-remove[${ attr }]`,
	);

	return removeBtn.closest( '.jet-form-builder-file-upload__file' );
};
export default SignalFile;

function uniqueByName( files ) {
	const seen   = new Set();
	const result = [];

	for ( const file of files ) {
		if ( seen.has( file.name ) ) {
			continue;
		}
		seen.add( file.name );
		result.push( file );
	}

	return result;
}