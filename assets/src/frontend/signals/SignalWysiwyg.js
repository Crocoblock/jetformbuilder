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
		this.input.editor.setContent( this.input.value.current );
	}

}

export default SignalWysiwyg;