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
	this.addListeners = function () {
		// disable aria attributes
		this.reporting.makeInvalid = () => {};
		this.reporting.makeValid   = () => {};
	};

	this.hasAutoScroll = function () {
		return false;
	};

	this.setValue = function () {
		const [ node ]     = this.nodes;
		this.value.current = [];

		for ( const row of node.querySelectorAll(
			'.jet-form-builder-repeater__row',
		) ) {
			const current    = new ObservableRow( this );
			current.rootNode = row;

			this.value.current.push( current );
		}

		for ( const currentElement of this.value.current ) {
			currentElement.observe();
		}

		for ( const currentElement of this.value.current ) {
			currentElement.initCalc();
		}

		const removeButtons = this.container.querySelectorAll(
			'.jet-form-builder-repeater__remove',
		);

		for ( const button of removeButtons ) {
			const row = this.closestRow( button );

			if ( !row ) {
				continue;
			}

			button.addEventListener( 'click', () => row.removeManually() );
		}

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

		input.watch( () => this.recalculateItems( input ) );
		this.recalculateItems( input );
	};
	this.setNode  = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.nodes     = [ node ];
		this.name      = node.dataset.fieldName;
		this.rawName   = this.name;
		this.inputType = 'repeater';

		this.manageItems = node.dataset?.manageItems || 'manually';
		this.calcType    = node.dataset?.calcType || 'default';
		this.itemsField  = node.dataset?.itemsField;

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

	this.populateInner = function () {
		if ( !this.value.current?.length ) {
			return false;
		}

		const inputs = [];
		/**
		 * @type {ObservableRow[]}
		 */
		const rows   = this.value.current;

		for ( const row of rows ) {
			for ( const input of row.getInputs() ) {
				if ( !input.reporting?.restrictions?.length ) {
					continue;
				}
				inputs.push( input );
			}
		}

		return inputs;
	};

	this.onRemove = function () {
		/**
		 * @type {ObservableRow[]}
		 */
		const rows = this.value.current;

		for ( const row of rows ) {
			row.remove();
		}
	};

	this.reQueryValue = function () {
		if ( !this.value.current?.length ) {
			return;
		}

		/**
		 * @type {ObservableRow[]}
		 */
		const repeaterRows = this.value.current

		repeaterRows.forEach( row => {
			row.getInputs().forEach( input => input.setValue() );
		} )
	}
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
		...this.value?.current ?? [],
		...(
			new Array( count )
		).fill( null ).map(
			() => new ObservableRow( this ),
		),
	];
};

RepeaterData.prototype.findIndex = function ( observableRow ) {
	if ( !Array.isArray( this.value.current ) ) {
		return -1;
	}
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

RepeaterData.prototype.recalculateItems = function ( input ) {
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
};

export default RepeaterData;