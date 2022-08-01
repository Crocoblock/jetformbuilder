import BaseSignal from './BaseSignal';
import { isRadio } from '../supports';

class SignalRadio extends BaseSignal {

	isSupported( node, inputData ) {
		return isRadio( node );
	}

	runSignal() {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.value.current === node.value;

			if ( ! node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value
			);
		}
	}

}

export default SignalRadio;