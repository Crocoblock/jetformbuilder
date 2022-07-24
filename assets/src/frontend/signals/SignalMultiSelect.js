import BaseSignal from './BaseSignal';

class SignalMultiSelect extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'select-multiple' === node.type;
	}

	runSignal( inputData ) {
		inputData.calcValue = 0;
		const [ node ]      = inputData.nodes;

		for ( const option of node.options ) {
			option.selected = inputData.value.current.includes( option.value );

			if ( !option.selected ) {
				continue;
			}

			inputData.calcValue += parseFloat(
				option.dataset?.calculate ?? option.value,
			);
		}
	}

}

export default SignalMultiSelect;