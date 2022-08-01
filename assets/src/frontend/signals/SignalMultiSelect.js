import BaseSignal from './BaseSignal';
import { isMultiSelect } from '../supports';

class SignalMultiSelect extends BaseSignal {

	isSupported( node, inputData ) {
		return isMultiSelect( node );
	}

	runSignal() {
		this.input.calcValue = 0;
		const [ node ]      = this.input.nodes;

		for ( const option of node.options ) {
			option.selected = this.input.value.current.includes( option.value );

			if ( !option.selected ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				option.dataset?.calculate ?? option.value,
			);
		}
	}

}

export default SignalMultiSelect;