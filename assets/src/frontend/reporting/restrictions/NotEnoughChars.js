import Restriction from './Restriction';

class NotEnoughChars extends Restriction {

	constructor( report ) {
		super( report );

		const [ node ] = this.reporting.input.nodes;
		this.min       = node.minLength;
	}

	validate() {
		if ( String !== this.reporting.input.valueType() ) {
			return false;
		}

		return this.getValue()?.length >= this.min;
	}

}