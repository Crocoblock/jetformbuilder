import BaseSignal from './BaseSignal';

class SignalText extends BaseSignal {

	isSupported( node, inputData ) {
		return true;
	}

	runSignal() {
		this.input.calcValue = parseFloat( this.input.calcValue );
		this.input.nodes[ 0 ].value = this.input.value.current;
	}
}

export default SignalText;