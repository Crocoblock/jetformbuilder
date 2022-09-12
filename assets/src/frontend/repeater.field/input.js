import { isRepeater } from './functions';

const {
	      Observable,
	      InputData,
      } = JetFormBuilderAbstract;

function RepeaterData() {
	InputData.call( this );

	this.buttonNode = false;
	this.template   = null;
	this.container  = null;

	this.isSupported  = function ( node ) {
		return isRepeater( node );
	};
	this.valueType    = function () {
		return false;
	};
	this.addListeners = function () {
		this.buttonNode.addEventListener( 'click', () => {
			this.value.current = [
				...this.value.current,
				new Observable( this ),
			];
		} );
	};
	this.setValue     = function () {
		const [ node ]     = this.nodes;
		this.value.current = [];

		for ( const row of node.querySelectorAll(
			'.jet-form-builder-repeater__row',
		) ) {
			const current = new Observable( this );
			current.observe( row );

			this.value.current.push( current );
		}
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

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
	};
}

RepeaterData.prototype = Object.create( InputData.prototype );

export default RepeaterData;