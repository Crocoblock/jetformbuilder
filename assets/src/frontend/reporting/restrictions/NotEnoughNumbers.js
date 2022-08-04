import Restriction from './Restriction';
import { isNumber } from '../../supports';

class NotEnoughNumbers extends Restriction {

	isSupported( node, reporting ) {
		return '' !== node?.min && isNumber( node );
	}

	setReporting( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.min       = +node?.min;

		super.setReporting( reporting );
	}

	validate() {
		return this.getValue() >= this.min;
	}

	getRawMessage() {
		return this.getMessageBySlug( 'number_min' );
	}

}

export default NotEnoughNumbers;