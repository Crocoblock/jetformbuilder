import InputData from './InputData';
import { isWysiwyg } from '../supports';
import { getParsedName } from './functions';

function WysiwygData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isWysiwyg( node );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.inputType = 'wysiwyg';

		this.getSubmit().submitter.promise( resolve => {
			window.tinyMCE.triggerSave();
			resolve();
		} );

		this.textArea      = node.querySelector( '.wp-editor-area' );
		const editorConfig = JSON.parse( node.dataset.editor );

		this.rawName = editorConfig.textarea_name;
		this.name    = getParsedName( this.rawName );

		const editor = () => window.tinymce.get( this.textArea.id );
		editor()?.remove?.();

		window.wp.editor.initialize( this.textArea.id, editorConfig );

		this.editor = editor();
	};
	this.onRemove     = function () {
		//this.editor.remove();
	};
	this.addListeners = function () {
		const update = () => {
			this.value.current = this.editor.getContent();
		};

		this.editor.on( 'input', update ).on( 'change', update );
	};

	this.setValue = function () {
		this.editor.on( 'init', () => {
			this.callable.lock.current = false;
			this.silenceSet( this.editor.getContent() );
		} );
	};

	this.initNotifyValue = () => {};

	this.focusRaw = function () {
		window.tinymce.get( this.textArea.id )?.getBody()?.focus(
			{ preventScroll: true },
		);
	};

	this.hasAutoScroll = function () {
		return false;
	};
}

WysiwygData.prototype = Object.create( InputData.prototype );

export default WysiwygData;