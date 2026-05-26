const { BaseSignal } = JetFormBuilderAbstract;
const {
	      toDate,
	      toDateTime,
	      toTime,
      } = JetFormBuilderFunctions;

function formatNativeDateLikeValue( node, value ) {
	if ( '' === value || null === value || undefined === value ) {
		return '';
	}

	if ( Number.isNaN( Number( value ) ) ) {
		return value;
	}

	const date = new Date( Number( value ) );

	if ( 'date' === node.type ) {
		return toDate( date );
	}

	if ( 'time' === node.type ) {
		return toTime( date );
	}

	if ( 'datetime-local' === node.type ) {
		return toDateTime( date );
	}

	return value;
}

function SignalTextField() {
	BaseSignal.call( this );

	this.isSupported = function () {
		return true;
	};
	this.runSignal   = function () {
		this.input.calcValue = Number.isNaN( Number( this.input.calcValue ) )
		                       ? this.input.calcValue
		                       : parseFloat( this.input.calcValue );

		const [ node ] = this.input.nodes;
		const nextValue = [ 'date', 'time', 'datetime-local' ].includes( node.type )
			? formatNativeDateLikeValue( node, this.input.value.current )
			: this.input.value.current;

		if ( node.value === nextValue ) {
			return;
		}

		node.value = nextValue;

		this.triggerJQuery( node );
	};
}

SignalTextField.prototype = Object.create( BaseSignal.prototype );

export default SignalTextField;
