import InputData from './InputData';

class RadioData extends InputData {

	isSupported( node ) {
		return ;
	}

	addListeners() {
		for ( const nodeElement of this.nodes ) {
			nodeElement.addEventListener( 'change', event => {
				this.setValue();
			} );
		}
	}

	setValue() {
		this.value.current = this.getActiveValue();
	}

	getActiveValue() {
		for ( const node of this.nodes ) {
			if ( node.checked ) {
				return node.value;
			}
		}

		return '';
	}
}

export default RadioData;