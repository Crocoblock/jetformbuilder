import InputData from './InputData';
import Observable from './Observable';

class RepeaterData extends InputData {

	constructor() {
		super();

		this.buttonNode = false;
		this.template   = null;
		this.container  = null;
	}

	isSupported( node ) {
		return 1 === +node.dataset.repeater;
	}

	addListener() {
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
		/**
		 * Save link to this object
		 * @type {RepeaterData}
		 */
		node.jfbSync = this;

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

	validate() {
		if ( this.isRequired() && !this.value.current?.length ) {
			return false;
		}

		for ( const observable of this.value.current ) {
			if ( !observable.inputsAreValid() ) {
				return false;
			}
		}

		return true;
	}

}

export default RepeaterData;