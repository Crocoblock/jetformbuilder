import Restriction from './Restriction';

class NotEnoughChars extends Restriction {

	isSupported( node, reporting ) {
		return 0 <= node?.minLength;
	}

	setReporting( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.min       = node.minLength;

		super.setReporting( reporting );
	}

	validate() {
		return this.getValue()?.length >= this.min;
	}

	getRawMessage() {
		return this.getMessageBySlug( 'char_min' );
	}

}

export default NotEnoughChars;