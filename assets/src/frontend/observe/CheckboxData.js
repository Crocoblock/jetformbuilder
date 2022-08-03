import InputData from './InputData';
import MultipleConditionChecker
	from '../conditional.logic/MultipleConditionChecker';
import { isCheckbox } from '../supports';

class CheckboxData extends InputData {

	isSupported( node ) {
		return isCheckbox( node );
	}

	addListeners() {
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
		this.value.current = this.getActiveValue();
	}

	getActiveValue() {
		return Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );
	}

	valueType() {
		return Array;
	}
}

export default CheckboxData;