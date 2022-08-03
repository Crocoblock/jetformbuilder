import Restriction from './Restriction';

class ReachLimitChars extends Restriction {

	constructor( report ) {
		super( report );

		const [ node ] = this.reporting.input.nodes;
		this.max       = node.maxLength;
	}

	validate() {
		if ( String !== this.reporting.input.valueType() ) {
			return false;
		}

		return this.getValue()?.length <= this.max;
	}

}