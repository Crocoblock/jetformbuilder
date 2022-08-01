import InputData from './InputData';
import MultipleConditionChecker
	from '../conditional.logic/MultipleConditionChecker';
import { isMultiSelect } from '../supports';

class MultiSelectData extends InputData {

	isSupported( node ) {
		return isMultiSelect( node );
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const values = [];

			for ( const option of event.target.options ) {
				if ( ! option.selected ) {
					continue;
				}
				values.push( option.value );
			}

			this.value.current = values;
		} );
	}

	conditionChecker() {
		return new MultipleConditionChecker();
	}

}

export default MultiSelectData;