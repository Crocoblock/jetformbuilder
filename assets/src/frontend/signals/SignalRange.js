import BaseSignal from './BaseSignal';
import { isRange } from '../supports';

/**
 * @property {RangeData} input
 */
class SignalRange extends BaseSignal {

	isSupported( node, inputData ) {
		return isRange( node );
	}

	runSignal() {
		const [ node ] = this.input.nodes;
		node.value     = this.input.value.current;

		this.input.numberNode.textContent = node.value;
	}

}

export default SignalRange;