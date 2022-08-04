import BaseSignal from './BaseSignal';
import { isWysiwyg } from '../supports';

/**
 * @property {WysiwygData} input
 */
class SignalWysiwyg extends BaseSignal {

	isSupported( node, inputData ) {
		return isWysiwyg( node );
	}

	runSignal() {
		if ( this.input.value.current === this.input.editor.getContent() ) {
			return;
		}
		this.input.editor.setContent( this.input.value.current );
	}

}

export default SignalWysiwyg;