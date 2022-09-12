import { isCalculated } from './functions';

const { InputData } = window.JetFormBuilderAbstract;

function CalculatedData() {
	InputData.call( this );

	this.listenTo       = [];
	this.formula        = '';
	this.precision      = 0;
	this.sepDecimal     = '';
	this.sepThousands   = '';
	this.visibleValNode = null;
	this.regexp         = /%([\w\-]+)%/g;

	this.isSupported  = function ( node ) {
		return isCalculated( node );
	};
	this.setValue     = function () {
		this.setListenTo();
		this.reCalculate();
		this.addWatchers();
	};
	this.makeReactive = function () {
		InputData.prototype.makeReactive.call( this );

		// run signals
		this.value.notify();
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		const {
			      formula,
			      precision,
			      sepDecimal,
		      } = node.parentElement.dataset;

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
	};
	this.reCalculate  = function () {
		this.value.current = this.calculate().toFixed( this.precision );
	};
	this.calculate    = function () {
		const formula = this.formula.replace( this.regexp,
			( match1, match2 ) => {
				if ( !this.listenTo.includes( match2 ) ) {
					return 0;
				}

				return this.root.getInput( match2 ).calcValue;
			} );

		return (
			new Function( 'return ' + formula )
		)();
	};
	this.setListenTo  = function () {
		for ( const [ , fieldName ] of this.formula.matchAll( this.regexp ) ) {
			const input = this.root.getInput( fieldName );

			if ( !input ) {
				continue;
			}

			this.listenTo.push( input.getName() );
		}

		this.listenTo = [ ...new Set( this.listenTo ) ];
	};
	this.addWatchers  = function () {
		for ( const fieldName of this.listenTo ) {
			const input = this.root.getInput( fieldName );

			input.watch( () => this.reCalculate() );
		}
	};
	this.addListeners = function () {
		// silence is golden
	};
}

CalculatedData.prototype = Object.create( InputData.prototype );

export default CalculatedData;