import BaseSignal from './BaseSignal';

class SignalCheckbox extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'checkbox' === node.type;
	}

	runSignal( inputData ) {
		for ( const node of inputData.nodes ) {
			node.checked = inputData.value.includes( node.value );
		}
	}

}

export default SignalCheckbox;