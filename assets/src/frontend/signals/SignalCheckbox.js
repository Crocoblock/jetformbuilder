import BaseSignal from './BaseSignal';

class SignalCheckbox extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'checkbox' === node.type;
	}

	runSignal( inputData ) {
		inputData.calcValue = 0;

		for ( const node of inputData.nodes ) {
			node.checked = inputData.value.includes( node.value );

			if ( ! node.checked ) {
				continue;
			}

			inputData.calcValue += parseFloat( node.dataset?.calculate ?? node.value );
		}
	}

}

export default SignalCheckbox;