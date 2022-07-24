import InputData from './InputData';
import { getParsedName } from './functions';

class WysiwygData extends InputData {

	isSupported( node ) {
		return node.matches( '.wysiwyg-field' );
	}

	setNode( node ) {
		super.setNode( node );
		this.textArea      = node.querySelector( '.wp-editor-area' );
		const editorConfig = JSON.parse( node.dataset.editor );

		this.rawName = editorConfig.textarea_name;
		this.name    = getParsedName( this.rawName );

		const editor = () => window.tinymce.get( this.textArea.id );

		if ( window.tinymce && !editor() ) {
			//window.tinymce.get( textArea.id ).remove();
			window.wp.editor.initialize( this.textArea.id, editorConfig );
		}

		this.editor = editor();
	}

	onRemove() {
		this.editor.remove();
	}

	addListener() {
		const update = () => {
			this.value.current = this.editor.getContent();
		};

		this.editor.on( 'input', update ).on( 'change', update );
	}

}

export default WysiwygData;