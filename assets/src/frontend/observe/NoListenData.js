import InputData from './InputData';
import { isHidden } from '../supports';

class NoListenData extends InputData {

	isSupported( node ) {
		return isHidden( node );
	}

	addListeners() {
		// silence is golden
	}
}

export default NoListenData;