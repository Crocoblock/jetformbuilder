import InputData from './InputData';
import Observable from './Observable';
import { isRepeater } from '../supports';

class RepeaterData extends InputData {

	constructor() {
		super();

		this.buttonNode = false;
		this.template   = null;
		this.container  = null;
	}

	isSupported( node ) {
		return isRepeater( node );
	}

	// custom
	valueType() {
		return false;
	}

	addListeners() {
		this.buttonNode.addEventListener( 'click', () => {
			this.value.current = [
				...this.value.current,
				new Observable( this ),
			];
		} );
	}

	setValue() {
		const [ node ]     = this.nodes;
		this.value.current = [];

		for ( const row of node.querySelectorAll(
			'.jet-form-builder-repeater__row',
		) ) {
			const current = new Observable( this );
			current.observe( row );

			this.value.current.push( current );
		}
	}

	setNode( node ) {
		super.setNode( node );

		this.nodes   = [ node ];
		this.name    = node.dataset.fieldName;
		this.rawName = this.name;

		this.buttonNode = node.querySelector(
			'.jet-form-builder-repeater__new',
		);
		this.template   = node.querySelector(
			'.jet-form-builder-repeater__initial',
		);
		this.container  = node.querySelector(
			'.jet-form-builder-repeater__items',
		);
	}

}

export default RepeaterData;