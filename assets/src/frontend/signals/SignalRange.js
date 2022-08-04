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
		this.input.numberNode.textContent = this.input.value.current;
	}

}

export default SignalRange;