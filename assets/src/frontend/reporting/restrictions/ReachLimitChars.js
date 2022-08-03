import Restriction from './Restriction';

class ReachLimitChars extends Restriction {

	isSupported( node, reporting ) {
		return 0 <= node?.maxLength;
	}

	setReporting( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.max       = node.maxLength;

		super.setReporting( reporting );
	}

	validate() {
		return this.getValue()?.length <= this.max;
	}

	getRawMessage() {
		return this.getMessageBySlug( 'char_max' );
	}

}

export default ReachLimitChars;