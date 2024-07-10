import { isCalculated } from './functions';

const {
	      BaseSignal,
      } = window.JetFormBuilderAbstract;

/**
 * @property {CalculatedData} input Related input instance
 */
function SignalCalculated() {
	BaseSignal.call( this );

	this.isSupported = function ( node ) {
		return isCalculated( node );
	};

	this.baseSignal = function () {
		const [ node ] = this.input.nodes;

		const isNumber = 'number' === this.input.valueTypeProp;

		this.input.calcValue = isNumber
		                       ? this.withPrecision()
		                       : this.input.value.current;

		this.input.value.silence();
		this.input.value.current = isNumber
		                           ? this.convertValue()
		                           : this.input.value.current;
		this.input.value.silence();

		this.input.visibleValNode.textContent = this.input.value.current;

		node.value = this.input.calcValue;
	};

	this.runSignal = function () {
		this.baseSignal();

		const [ node ] = this.input.nodes;

		this.triggerJQuery( node );
	};
}

SignalCalculated.prototype = Object.create( BaseSignal.prototype );

SignalCalculated.prototype.convertValue = function () {
	const value = this.input.value.current;

	if ( Number.isNaN( Number( value ) ) ) {
		return 0;
	}

	const parts = this.withPrecision().toString().split( '.' );

	if ( this.input.sepThousands ) {
		parts[ 0 ] = parts[ 0 ].replace(
			/\B(?=(\d{3})+(?!\d))/g,
			this.input.sepThousands,
		);
	}

	return parts.join( this.input.sepDecimal );
};

SignalCalculated.prototype.withPrecision = function () {
	return Number( this.input.value.current ).toFixed( this.input.precision );
};

export default SignalCalculated;