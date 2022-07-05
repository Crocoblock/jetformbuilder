import BaseSignal from './BaseSignal';

class SignalText extends BaseSignal {

	isSupported( inputData ) {
		return true;
	}

	runSignal( inputData ) {
		inputData.nodes[ 0 ].value = inputData.value;
	}
}

export default SignalText;