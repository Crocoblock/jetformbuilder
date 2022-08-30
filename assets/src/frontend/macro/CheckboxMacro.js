import DynamicMacro from './DynamicMacro';
import CheckboxData from '../observe/CheckboxData';

class CheckboxMacro extends DynamicMacro {

	isSupported( input ) {
		return input instanceof CheckboxData;
	}

	getValueFromField( input ) {
		return [ ...input.value.current ].join( ', ' );
	}

}

export default CheckboxMacro;