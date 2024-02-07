import BaseSignal from './BaseSignal';

function SignalText() {
	BaseSignal.call( this );

	this.isSupported = function () {
		return true;
	};
	this.runSignal   = function () {
		this.input.calcValue = Number.isNaN( Number( this.input.calcValue ) )
		                       ? this.input.calcValue
		                       : parseFloat( this.input.calcValue );

		const [ node ] = this.input.nodes;

		if ( node.value === this.input.value.current ) {
			return;
		}

		node.value = this.input.value.current;

		this.triggerJQuery( node );
	};
}

SignalText.prototype = Object.create( BaseSignal.prototype );

export default SignalText;