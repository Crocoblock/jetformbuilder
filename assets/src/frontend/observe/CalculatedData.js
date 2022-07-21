import InputData from './InputData';

class CalculatedData extends InputData {

	constructor() {
		super();

		this.listenTo = [];
		this.formula = '';
		this.precision = 0;
		this.sepDecimal = '';
		this.sepThousands = '';
		this.visibleValNode = null;
		this.regexp = /%([\w\-]+)%/g;
	}

	isSupported( node ) {
		return !! (
			node.parentElement.dataset?.formula?.length ?? ''
		);
	}

	setValue() {
		this.setListenTo();
		this.reCalculate();
		this.addWatchers();
	}

	makeReactive() {
		super.makeReactive();

		// run signals
		this.value = (this.value);
	}

	reCalculate() {
		this.value = this.calculate().toFixed( this.precision );
	}

	calculate() {
		const formula = this.formula.replace( this.regexp, ( match1, match2 ) => {
			if ( ! this.listenTo.includes( match2 ) ) {
				return 0;
			}

			return this.getInput( match2 ).calcValue;
		} );

		return (
			new Function( 'return ' + formula )
		)();
	}

	setNode( node ) {
		super.setNode( node );

		const { formula, precision, sepDecimal } = node.parentElement.dataset;

		this.formula = formula;
		this.precision = + precision;
		this.sepDecimal = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
	}

	setListenTo() {
		for ( const [ , fieldName ] of this.formula.matchAll( this.regexp ) ) {
			const input = this.getInput( fieldName );

			if ( false === input ) {
				continue;
			}

			this.listenTo.push( input.getName() );
		}

		this.listenTo = [ ...new Set( this.listenTo ) ];
	}

	addWatchers() {
		for ( const fieldName of this.listenTo ) {
			this.getInput( fieldName ).watch( () => this.reCalculate() );
		}
	}

	/**
	 * @param fieldName
	 * @returns {boolean|InputData}
	 */
	getInput( fieldName ) {
		return (
			this.root.dataInputs[ fieldName ] ??
			this.root.parent.dataInputs[ fieldName ] ?? false
		);
	}


	addListener() {
		// silence is golden
	}

}

export default CalculatedData;