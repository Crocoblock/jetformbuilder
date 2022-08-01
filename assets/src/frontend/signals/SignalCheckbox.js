import BaseSignal from './BaseSignal';
import { isCheckbox } from '../supports';

class SignalCheckbox extends BaseSignal {

	isSupported( node, inputData ) {
		return isCheckbox( node );
	}

	runSignal() {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.value.current.includes( node.value );

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);
		}
	}

}

export default SignalCheckbox;