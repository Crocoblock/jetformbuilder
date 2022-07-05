import BaseSignal from './BaseSignal';

class SignalRadio extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'radio' === node.type;
	}

	runSignal( inputData ) {
		for ( const node of inputData.nodes ) {
			node.checked = inputData.value === node.value;
		}
	}

}

export default SignalRadio;