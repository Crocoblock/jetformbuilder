import InputData from './InputData';
import MultipleConditionChecker
	from '../conditional.logic/MultipleConditionChecker';

class MultiSelectData extends InputData {

	isSupported( node ) {
		return 'select-multiple' === node.type;
	}

	addListener() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const values = [];

			for ( const option of event.target.options ) {
				if ( ! option.selected ) {
					continue;
				}
				values.push( option.value );
			}

			this.value = values;
		} );
	}

	conditionChecker() {
		return new MultipleConditionChecker();
	}

}

export default MultiSelectData;