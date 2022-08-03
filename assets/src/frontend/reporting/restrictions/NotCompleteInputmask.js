import Restriction from './Restriction';
import { isInputMask } from '../../supports';

class NotCompleteInputmask extends Restriction {

	isSupported( node, reporting ) {
		return isInputMask( node );
	}

	validate() {
		const node = this.reporting.getNode();

		return node.inputmask.isComplete();
	}

	getRawMessage() {
		return this.getMessageBySlug( 'inputmask' );
	}

}

export default NotCompleteInputmask;