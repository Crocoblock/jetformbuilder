import InputData from './InputData';

class NoListenData extends InputData {

	isSupported( node ) {
		return ;
	}

	addListeners() {
		// silence is golden
	}
}

export default NoListenData;