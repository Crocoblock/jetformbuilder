import { isRepeater } from './functions';
import ObservableRow from './ObservableRow';

const {
	      InputData,
	      ReactiveVar,
      } = JetFormBuilderAbstract;

function RepeaterData() {
	InputData.call( this );

	this.buttonNode   = false;
	this.template     = null;
	this.container    = null;
	this.lastObserved = new ReactiveVar();
	this.lastObserved.make();

	this.isSupported  = function ( node ) {
		return isRepeater( node );
	};
	this.valueType    = function () {
		return false;
	};
	this.addListeners = function () {
		if ( this.isManualCount ) {
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

		const removeButtons = this.container.querySelectorAll(
			'.jet-form-builder-repeater__remove',
		);

		for ( const button of removeButtons ) {
			const row = this.closestRow( button );

			if ( !row ) {
				continue;
			}

			button.addEventListener( 'click', () => row.remove() );
		}
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.nodes     = [ node ];
		this.name      = node.dataset.fieldName;
		this.rawName   = this.name;
		this.inputType = 'repeater';

		try {
			const settings = JSON.parse( node.dataset.settings );

			this.manageItems = settings?.manageItems || 'manually';
			this.calcType    = settings?.calcType || 'default';
			this.itemsField  = settings?.itemsField;
		}
		catch ( error ) {
			this.calcType    = 'default';
			this.manageItems = 'manually';
			// silence
		}

		this.isManualCount = (
			!this.itemsField || 'manually' === this.manageItems
		);

		// can be null
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
		this.value.current = [];
	};

	this.onForceValidate = function () {
		this.reporting.valuePrev = null;

		for ( const restriction of this.reporting.restrictions ) {
			if ( !restriction.hasOwnProperty( 'silenceInner' ) ) {
				continue;
			}
			restriction.silenceInner = false;
		}
	};
}

RepeaterData.prototype = Object.create( InputData.prototype );

RepeaterData.prototype.buttonNode = null;
RepeaterData.prototype.template   = null;
RepeaterData.prototype.container  = null;
RepeaterData.prototype.itemsField = false;
/**
 * @type {ReactiveVar}
 */
RepeaterData.prototype.lastObserved = null;

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

/**
 * @param node {Element}
 * @return {boolean|ObservableRow}
 */
RepeaterData.prototype.closestRow = function ( node ) {
	const rowNode = node.closest( '.jet-form-builder-repeater__row' );

	if ( !rowNode ) {
		return false;
	}

	/**
	 * @type {ObservableRow[]}
	 */
	const rows = this.value.current;

	for ( const row of rows ) {
		if ( row.rootNode === rowNode ) {
			return row;
		}
	}

	return false;
};

RepeaterData.prototype.remove = function ( observableRow ) {
	this.value.current = this.value.current.filter(
		current => current !== observableRow,
	);
};

export default RepeaterData;