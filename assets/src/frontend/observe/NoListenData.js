import InputData from './InputData';

class NoListenData extends InputData {

	isSupported( node ) {
		return 'hidden' === node.type;
	}

	addListener() {
		// silence is golden
	}
}

export default NoListenData;