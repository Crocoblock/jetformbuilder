const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

/**
 * @property input {RadioData}
 */
function SignalRadio() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return 'radio' === node.type;
	};

	this.runSignal = function () {
		this.input.calcValue = 0;
		const currentValue   = this.input.value.current;
		let hasMatch         = false;

		for ( const node of this.input.nodes ) {
			if ( node.dataset.custom ) {
				continue;
			}
			node.checked = '' + currentValue === node.value;

			if ( !node.checked ) {
				continue;
			}

			hasMatch = true;

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);

			this.triggerJQuery( node );
			break;
		}

		if ( !this.input.hasCustom ) {
			return;
		}

		const lastNode = this.input.lastNode();
		const input    = this.input.getCustomInput();
		const useCustom = (
			!hasMatch &&
			'' !== currentValue &&
			null !== currentValue &&
			undefined !== currentValue
		);

		lastNode.checked = useCustom;

		if ( input.disabled === lastNode.checked ) {
			input.disabled = !lastNode.checked;
		}

		const value = '' + currentValue;

		if ( !lastNode.checked || input.value === value ) {
			return;
		}

		input.value = value;
	};
}

SignalRadio.prototype = Object.create( BaseSignal.prototype );

export default SignalRadio;
