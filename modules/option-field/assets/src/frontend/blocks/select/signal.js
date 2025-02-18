const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

function SignalSelect() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return [ 'select-multiple', 'select-one' ].includes( node?.type );
	};
	this.runSignal   = function () {
		const [ node ]   = this.input.nodes;
		const isMultiple = 'select-one' !== node?.type;
		const { value }  = this.input;

		for ( const option of node.options ) {
			option.selected = isMultiple
			                  ? value.current?.includes( option.value )
			                  : option.value === value.current;

			if ( !option.selected ) {
				continue;
			}

			this.input.calcValue = 0;

			this.input.calcValue += parseFloat(
				option.dataset?.calculate ?? option.value,
			);
		}

		this.triggerJQuery( node );
	};
}

SignalSelect.prototype = Object.create( BaseSignal.prototype );

export default SignalSelect;