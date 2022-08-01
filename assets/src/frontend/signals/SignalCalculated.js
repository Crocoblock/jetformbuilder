import BaseSignal from './BaseSignal';
import { isCalculated } from '../supports';

/**
 * @property {CalculatedData} input
 */
class SignalCalculated extends BaseSignal {

	isSupported( node, inputData ) {
		return isCalculated( node );
	}

	runSignal() {
		const [ node ] = this.input.nodes;
		node.value     = this.input.value.current;

		this.input.visibleValNode.textContent = this.convertValue();
	}

	convertValue() {
		const {
			      value,
			      sepThousands,
			      sepDecimal,
		      } = this.input;

		const parts = value.current.toString().split( '.' );

		parts[ 0 ] = parts[ 0 ].replace(
			/\B(?=(\d{3})+(?!\d))/g,
			sepThousands,
		);

		return parts.join( sepDecimal );
	}
}

export default SignalCalculated;