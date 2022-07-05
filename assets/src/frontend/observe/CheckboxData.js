import InputData from './InputData';
import CheckboxConditionChecker from '../conditional.logic/CheckboxConditionChecker';

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
		return new CheckboxConditionChecker();
	}

	setValue() {
		this.value = this.getActiveValue();
	}

	getActiveValue() {
		return Array.from( this.nodes ).filter( item => item.checked ).map( item => item.value );
	}
}

export default CheckboxData;