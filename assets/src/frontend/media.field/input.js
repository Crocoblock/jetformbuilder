import { createFileList, isFile } from './functions';

const { InputData } = window.JetFormBuilderAbstract;

function FileData() {
	InputData.call( this );

	this.isMultiple        = false;
	this.prevFiles         = null;
	this.template          = null;
	this.previewsContainer = null;
	this.wrapper           = null;

	this.isSupported = function ( node ) {
		return isFile( node );
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			this.value.current = createFileList(
				this.isMultiple
				? [ ...this.prevFiles ?? [], ...event.target.files ]
				: [ ...event.target.files ],
			);
		} );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.isMultiple = node.multiple;

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

	this.setValue = function () {
		this.callable.loadFiles();
	};

	this.initNotifyValue = () => {};

	this.reQueryValue = () => {};
}

FileData.prototype = Object.create( InputData.prototype );

/**
 * @type {HTMLElement}
 */
FileData.prototype.wrapper = null;
/**
 * @type {HTMLElement}
 */
FileData.prototype.previewsContainer = null;
/**
 * @type {HTMLTemplateElement}
 */
FileData.prototype.template = null;

export default FileData;