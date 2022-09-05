import InputData from './InputData';
import { isCalculated } from '../supports';

class CalculatedData extends InputData {

	constructor() {
		super();

		this.listenTo       = [];
		this.formula        = '';
		this.precision      = 0;
		this.sepDecimal     = '';
		this.sepThousands   = '';
		this.visibleValNode = null;
		this.regexp         = /%([\w\-]+)%/g;
	}

	isSupported( node ) {
		return isCalculated( node );
	}

	setValue() {
		this.setListenTo();
		this.reCalculate();
		this.addWatchers();
	}

	makeReactive() {
		super.makeReactive();

		// run signals
		this.value.notify();
	}

	reCalculate() {
		this.value.current = this.calculate().toFixed( this.precision );
	}

	calculate() {
		const formula = this.formula.replace( this.regexp,
			( match1, match2 ) => {
				if ( !this.listenTo.includes( match2 ) ) {
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

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
	}

	setListenTo() {
		for ( const [ , fieldName ] of this.formula.matchAll( this.regexp ) ) {
			const input = this.root.getInput( fieldName );

			if ( ! input ) {
				continue;
			}

			this.listenTo.push( input.getName() );
		}

		this.listenTo = [ ...new Set( this.listenTo ) ];
	}

	addWatchers() {
		for ( const fieldName of this.listenTo ) {
			this.root.getInput( fieldName ).watch( () => this.reCalculate() );
		}
	}

	addListeners() {
		// silence is golden
	}

}

export default CalculatedData;