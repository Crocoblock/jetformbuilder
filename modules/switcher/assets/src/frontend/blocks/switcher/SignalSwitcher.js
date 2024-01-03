const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

/**
 * @property input {RadioData}
 */
function SignalSwitcher() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return 'switch' === node.role;
	};

	this.runSignal = function () {
		const [ node ] = this.input.nodes;

		this.input.calcValue = 0;
		node.checked         = this.input.value.current === node.value;

		if ( !node.checked ) {
			return;
		}

		this.input.calcValue += parseFloat(
			node.dataset?.calculate ?? node.value,
		);
	};
}

SignalSwitcher.prototype = Object.create( BaseSignal.prototype );

export default SignalSwitcher;