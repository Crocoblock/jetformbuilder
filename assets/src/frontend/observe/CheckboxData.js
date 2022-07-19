import InputData from './InputData';
import MultipleConditionChecker from '../conditional.logic/MultipleConditionChecker';

class CheckboxData extends InputData {

	isSupported( node ) {
		return 'checkbox' === node.type;
	}

	addListener() {
		for ( const nodeElement of this.nodes ) {
			nodeElement.addEventListener( 'change', event => {
				this.setValue();
			} );
		}
	}

	conditionChecker() {
		return new MultipleConditionChecker();
	}

	setValue() {
		this.value = this.getActiveValue();
	}

	getActiveValue() {
		return Array.from( this.nodes ).filter( item => item.checked ).map( item => item.value );
	}
}

export default CheckboxData;