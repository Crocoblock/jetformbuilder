import BaseSignal from './BaseSignal';

class SignalCalculated extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return !! (
			node.parentElement.dataset?.formula?.length ?? ''
		);
	}

	runSignal( inputData ) {

	}
}

export default SignalCalculated;