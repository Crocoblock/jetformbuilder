import BaseSignal from './BaseSignal';

class SignalCalculated extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return !! (
			node.parentElement.dataset?.formula?.length ?? ''
		);
	}

	/**
	 * @param inputData {CalculatedData|InputData}
	 */
	runSignal( inputData ) {
		const [ node ] = inputData.nodes;

		node.value = inputData.value.current;

		inputData.visibleValNode.textContent = this.convertValue( inputData );
	}

	/**
	 * @param calculateData {CalculatedData}
	 */
	convertValue( { value, sepThousands, sepDecimal } ) {
		const parts = value.current.toString().split( '.' );
		parts[ 0 ] = parts[ 0 ].replace( /\B(?=(\d{3})+(?!\d))/g, sepThousands );

		return parts.join( sepDecimal );
	}
}

export default SignalCalculated;