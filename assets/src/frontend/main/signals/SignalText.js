import BaseSignal from './BaseSignal';

function SignalText() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return true;
	};
	this.runSignal   = function () {
		this.input.calcValue = Number.isNaN( Number( this.input.calcValue ) )
		                       ? 0
		                       : parseFloat( this.input.calcValue );

		this.input.nodes[ 0 ].value = this.input.value.current;
	};
}

SignalText.prototype = Object.create( BaseSignal.prototype );

export default SignalText;