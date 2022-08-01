import InputData from './InputData';
import { getParsedName } from './functions';
import { isWysiwyg } from '../supports';

class WysiwygData extends InputData {

	isSupported( node ) {
		return isWysiwyg( node );
	}

	setNode( node ) {
		super.setNode( node );

		this.textArea      = node.querySelector( '.wp-editor-area' );
		const editorConfig = JSON.parse( node.dataset.editor );

		this.rawName = editorConfig.textarea_name;
		this.name    = getParsedName( this.rawName );

		const editor = () => window.tinymce.get( this.textArea.id );

		if ( !editor() ) {
			//window.tinymce.get( textArea.id ).remove();
			window.wp.editor.initialize( this.textArea.id, editorConfig );
		}

		this.editor = editor();
	}

	setRoot( observable ) {
		super.setRoot( observable );

		this.getSubmit().submitter.promise( resolve => {
			window.tinyMCE.triggerSave();
			resolve();
		} );
	}

	onRemove() {
		this.editor.remove();
	}

	addListeners() {
		const update = () => {
			this.value.current = this.editor.getContent();
		};

		this.editor.on( 'input', update ).on( 'change', update );
	}

	isValid() {
		return !!this.value.current?.length;
	}

	report() {
		this.insertError( 'This field is invalid' );
	}

}

export default WysiwygData;