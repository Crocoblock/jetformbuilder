import Restriction from './Restriction';
import { isNumber } from '../../supports';

class ReachLimitNumbers extends Restriction {

	isSupported( node, reporting ) {
		return '' !== node?.min && isNumber( node );
	}

	setReporting( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.max       = +node.max;

		super.setReporting( reporting );
	}

	validate() {
		return this.getValue() <= this.max;
	}

	getRawMessage() {
		return this.getMessageBySlug( 'number_max' );
	}

}

export default ReachLimitNumbers;