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

	this.baseSignal = function () {
		const [ node ] = this.input.nodes;

		this.input.visibleValNode.textContent = this.input.value.current;

		if ( 'number' !== this.input.valueTypeProp ) {
			node.value = this.input.value.current;

			return;
		}

		let calcValue = 'string' === typeof this.input.value.current
		                ? Number(
				this.input.value.current.replace( /[^\d\.]/g, '' ),
			) : this.input.value.current;

		this.input.calcValue = Number.isNaN( calcValue ) ? 0 : calcValue;
		node.value           = this.input.calcValue;
	};

	this.runSignal = function () {
		this.baseSignal();

		const [ node ] = this.input.nodes;

		this.triggerJQuery( node );
	};
}

SignalCalculated.prototype = Object.create( BaseSignal.prototype );

export default SignalCalculated;