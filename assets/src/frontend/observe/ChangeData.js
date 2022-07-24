import InputData from './InputData';

class ChangeData extends InputData {

	isSupported( node ) {
		return [ 'select', 'range' ].includes( node.type );
	}

	addListener() {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			this.value.current = event.target.value;
		} );
	}

}

export default ChangeData;