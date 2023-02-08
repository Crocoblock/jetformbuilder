import { isCalculated } from './functions';

const {
	      BaseSignal,
      } = window.JetFormBuilderAbstract;

/**
 * @property {CalculatedData} input
 */
function SignalCalculated() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isCalculated( node );
	};
	this.runSignal   = function () {
		const [ node ] = this.input.nodes;

		this.input.visibleValNode.textContent = this.input.value.current;

		if ( 'number' !== this.input.valueTypeProp ) {
			node.value = this.input.value.current;

			return;
		}

		let calcValue = Number(
			this.input.value.current.replace( /[^\d\.]/g, '' ),
		);

		this.input.calcValue = Number.isNaN( calcValue ) ? 0 : calcValue;
		node.value           = this.input.calcValue;
	};
}

SignalCalculated.prototype = Object.create( BaseSignal.prototype );

export default SignalCalculated;