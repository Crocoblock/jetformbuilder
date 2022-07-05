import InputData from './InputData';
import Observable from './Observable';

class RepeaterData extends InputData {

	constructor() {
		super();

		this.buttonNode = false;
		this.template = null;
		this.container = null;
	}

	isSupported( node ) {
		return 1 === + node.dataset.repeater;
	}

	addListener() {
		this.buttonNode.addEventListener( 'click', () => {
			this.value = [ ...this.value, new Observable() ];
		} );
	}

	setValue() {
		const [ node ] = this.nodes;
		this.value = [];

		for ( const row of node.querySelectorAll( '.jet-form-builder-repeater__row' ) ) {
			const current = new Observable();
			current.observe( row );

			this.value.push( current );
		}
	}

	setNode( node ) {
		this.nodes = [ node ];
		this.name = node.dataset.fieldName;
		this.rawName = this.name;

		this.buttonNode = node.querySelector( '.jet-form-builder-repeater__new' );
		this.template = node.querySelector( '.jet-form-builder-repeater__initial' );
		this.container = node.querySelector( '.jet-form-builder-repeater__items' );
	}
}

export default RepeaterData;