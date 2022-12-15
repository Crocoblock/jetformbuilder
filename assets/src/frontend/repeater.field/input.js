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
		if ( !this.itemsField ) {
			this.buttonNode.addEventListener( 'click', () => this.addNew() );

			return;
		}

		const input = this.root.getInput( this.itemsField );

		if ( !input ) {
			console.error(
				`JetFormBuilder error: undefined input by name [${ this.itemsField }]`,
			);

			return;
		}

		input.watch( () => {
			const currentCount = this.value.current?.length ?? 0;

			// if it < 0 ==> we should add {diff} new repeater items
			// if it > 0 ==> we should remove last {diff} items
			const diff = currentCount - input.calcValue;

			if ( 0 === diff ) {
				return;
			}

			if ( diff < 0 ) {
				this.addNew( -1 * diff );

				return;
			}

			this.value.current = this.value.current.slice( 0, -1 * diff );
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

		try {
			const settings = JSON.parse( node.dataset.settings );

			this.itemsField = settings?.itemsField;
		}
		catch ( error ) {
			// silence
		}

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
RepeaterData.prototype.itemsField = false;

RepeaterData.prototype.addNew = function ( count = 1 ) {
	this.value.current = [
		...this.value.current,
		...(
			new Array( count )
		).fill( null ).map(
			() => new ObservableRow( this ),
		),
	];
};

RepeaterData.prototype.findIndex = function ( observableRow ) {
	return this.value.current.findIndex(
		current => current === observableRow,
	);
};

RepeaterData.prototype.remove = function ( observableRow ) {
	this.value.current = this.value.current.filter(
		current => current !== observableRow,
	);
};

export default RepeaterData;