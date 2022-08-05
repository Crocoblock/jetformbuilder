import InputData from './InputData';
import { isHidden } from '../supports';

class NoListenData extends InputData {

	constructor() {
		super();

		/**
		 * @type {Node}
		 */
		this.comment = null;
	}

	isSupported( node ) {
		return isHidden( node );
	}

	addListeners() {
		// silence is golden
	}

	onObserve() {
		super.onObserve();

		if ( ! this.isArray() ) {
			return;
		}

		this.setComment();
	}

	setComment() {
		this.comment   = document.createComment( this.name );
		const [ node ] = this.nodes;

		node.parentElement.insertBefore( this.comment, node );
	}
}

export default NoListenData;