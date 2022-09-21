import { isCalculated } from './functions';

const {
	      BaseSignal,
      } = window.JetFormBuilderAbstract;

/**
 * @property {CalculatedData} input
 */
function SignalCalculated() {
	BaseSignal.call( this );

	this.isSupported  = function ( node, inputData ) {
		return isCalculated( node );
	};
	this.runSignal    = function () {
		const [ node ] = this.input.nodes;
		node.value     = this.input.value.current;

		this.input.visibleValNode.textContent = this.convertValue();
	};
	this.convertValue = function () {
		const {
			      value,
			      sepThousands,
			      sepDecimal,
			      valueTypeProp,
		      } = this.input;

		if ( 'number' !== valueTypeProp ) {
			return value.current;
		}

		const parts = value.current.toString().split( '.' );

		parts[ 0 ] = parts[ 0 ].replace(
			/\B(?=(\d{3})+(?!\d))/g,
			sepThousands,
		);

		return parts.join( sepDecimal );
	};
}

SignalCalculated.prototype = Object.create( BaseSignal.prototype );

export default SignalCalculated;