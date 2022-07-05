import InputData from './InputData';

class CalculatedData extends InputData {

	constructor() {
		super();

		this.listenTo = [];
		this.formula = '';
		this.precision = 0;
		this.sepDecimal = '';
	}

	isSupported( node ) {
		return !! (
			node.parentElement.dataset?.formula?.length ?? ''
		);
	}

	setNode( node ) {
		super.setNode( node );

		const { formula, precision, sepDecimal } = node.parentElement.dataset;

		this.formula = formula;
		this.precision = + precision;
		this.sepDecimal = sepDecimal;
	}

	setListenTo() {
		for ( const [, fieldName] of this.formula.matchAll(/%([\w\-]+)%/g) ) {
			if ( ! this.root.dataInputs.hasOwnProperty( fieldName ) ) {
				continue;
			}


		}
	}

	addListener() {
		// silence is golden
	}

}

export default CalculatedData;