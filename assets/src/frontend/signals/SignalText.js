import BaseSignal from './BaseSignal';

class SignalText extends BaseSignal {

	isSupported( inputData ) {
		return true;
	}

	runSignal( inputData ) {
		inputData.calcValue = parseFloat( inputData.calcValue );
		inputData.nodes[ 0 ].value = inputData.value.current;
	}
}

export default SignalText;