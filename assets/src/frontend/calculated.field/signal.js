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
		node.value     = this.input.value.current;

		this.input.visibleValNode.textContent = this.input.value.current;
	};
}

SignalCalculated.prototype = Object.create( BaseSignal.prototype );

export default SignalCalculated;