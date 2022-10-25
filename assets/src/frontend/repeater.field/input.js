import { isRepeater } from './functions';
import ObservableRow from './ObservableRow';

const {
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
				new ObservableRow( this ),
			];
		} );
	};
	this.setValue     = function () {
		const [ node ]     = this.nodes;
		this.value.current = [];

		for ( const row of node.querySelectorAll(
			'.jet-form-builder-repeater__row',
		) ) {
			const current = new ObservableRow( this );
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

	this.onClear = function () {
		if ( !this.value.current ) {
			return;
		}
		this.value.current.forEach( current => current.remove() );
	};
}

RepeaterData.prototype = Object.create( InputData.prototype );

RepeaterData.prototype.buttonNode = null;
RepeaterData.prototype.template   = null;
RepeaterData.prototype.container  = null;

export default RepeaterData;