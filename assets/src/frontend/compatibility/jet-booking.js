const {
	      InputData,
	      BaseSignal,
      } = JetFormBuilderAbstract;

const {
	      addAction,
	      addFilter,
      } = JetPlugins.hooks;

function CheckOutInput() {
	InputData.call( this );

	/**
	 * @see https://github.com/Crocoblock/jetformbuilder/issues/222
	 * @type {string}
	 */
	this.value.current = '';

	this.isSupported = function ( node ) {
		return 'checkin-checkout' === node.dataset.field;
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		jQuery( node ).on( 'change.JetFormBuilderMain', () => {
			this.value.current = node.value;
		} );

		const inputs = node.parentElement.querySelectorAll(
			'.jet-abaf-field__input' );

		for ( const input of inputs ) {
			input.addEventListener( 'blur', () => this.reportOnBlur() );
		}
	};

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1562
	 *
	 * @returns {boolean}
	 */
	this.checkIsRequired = function () {
		const [ node ] = this.nodes;

		if ( node.required ) {
			return true;
		}

		return !!node.parentElement.querySelector(
			'.jet-abaf-field__input[required]',
		);
	};

	this.isVisible = function () {
		const [ , wrapper ] = this.nodes;

		return (
			wrapper?.isConnected && null !== wrapper?.offsetParent
		);
	};

	this.onClear = function () {
		this.silenceSet( '' );
	};

	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		let fieldsWrapper = node.closest( '.jet-abaf-separate-fields' );

		if ( !fieldsWrapper ) {
			fieldsWrapper = node.closest( '.jet-abaf-field' );
		}

		this.nodes.push( fieldsWrapper );
	};
}

function CheckOutSignal() {
	BaseSignal.call( this );

	this.isSupported = function ( node, input ) {
		return input instanceof CheckOutInput;
	};

	this.runSignal = function () {

	};
}

CheckOutInput.prototype  = Object.create( InputData.prototype );
CheckOutSignal.prototype = Object.create( BaseSignal.prototype );

addAction(
	'jet.fb.observe.before',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		const { rootNode } = observable;

		for ( const checkOutWrapper of rootNode.querySelectorAll(
			'.field-type-check-in-out',
		) ) {
			const input = checkOutWrapper.querySelector(
				'input[data-field="checkin-checkout"]',
			);

			if ( !input ) {
				continue;
			}

			input.dataset.jfbSync = 1;
		}
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/booking-compatibility',
	function ( inputs ) {
		inputs = [ CheckOutInput, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/booking-compatibility',
	function ( signals ) {
		signals = [ CheckOutSignal, ...signals ];

		return signals;
	},
);

const relatedCheckOut = [];

addFilter(
	'jet.fb.onCalculate.part',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param macroPart
	 * @param formula {CalculatedFormula}
	 * @return {*}
	 */
	function ( macroPart, formula ) {
		const matches = macroPart.match( /ADVANCED_PRICE::([\w\-]+)/ );

		if ( !matches?.length || !formula?.input ) {
			return macroPart;
		}
		const [ , fieldName ] = matches;

		const checkoutField = formula.input.root.getInput( fieldName );

		if ( !checkoutField ) {
			return 0;
		}

		const formId = formula.input.getSubmit().getFormId();

		if ( !relatedCheckOut.includes( formId + checkoutField.name ) ) {
			relatedCheckOut.push( formId + checkoutField.name );

			checkoutField.watch( () => formula.setResult() );
		}

		return macroPart;
	},
);
