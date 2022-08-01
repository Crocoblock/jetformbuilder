import InputData from './InputData';
import { isChangeType } from '../supports';

class ChangeData extends InputData {

	isSupported( node ) {
		return isChangeType( node );
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			this.value.current = event.target.value;
		} );
	}

}

export default ChangeData;