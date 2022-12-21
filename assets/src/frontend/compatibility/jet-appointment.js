const {
	      InputData,
      } = JetFormBuilderAbstract;

const {
	      ListingAddTemplateWatcher,
	      ListingTemplateClick,
      } = JetFormBuilderFunctions;

const {
	      addAction,
	      addFilter,
      } = JetPlugins.hooks;

function AppointmentInput() {
	InputData.call( this );

	this.isSupported = function ( node ) {
		return 'appointment' === node.dataset.field;
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		jQuery( node ).on( 'change', () => {
			this.value.current = node.value;
		} );
	};

	this.onObserve = function () {
		InputData.prototype.onObserve.call( this );

		this.callable = null;

		this.value.sanitize( value => {
			return [ '{}', '[]' ].includes( value ) ? '' : value;
		} );
	};
}

function AppointmentProvider() {
	InputData.call( this );

	/**
	 * Node can be <div> or <select>
	 *
	 * @param node {Element}
	 * @returns {boolean}
	 */
	this.isSupported = function ( node ) {
		return node.classList.contains( 'appointment-provider' );
	};

	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.name = node.dataset.field;
	};

	this.checkIsRequired = function () {
		const [ node ] = this.nodes;
		const args     = JSON.parse( node.dataset.args );

		return args?.args_str?.includes( 'required' );
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', ( { target } ) => {
			this.value.current = target.value;
		} );

		if ( 'SELECT' === node.nodeName ) {
			node.addEventListener( 'blur', () => this.reportOnBlur() );
		}

		this.addListingTemplateListener();
		this.addServiceListener();
	};

	this.addServiceListener = function () {
		const [ node ] = this.nodes;

		const args = JSON.parse( node.dataset.args );

		if ( !args?.service?.field ) {
			return;
		}

		const service = this.root.getInput( args.service.field );

		if ( !service ) {
			return;
		}

		service.watch( () => {
			this.value.setIfEmpty( null );
		} );
	};

	this.addListingTemplateListener = function () {
		const [ node ] = this.nodes;

		// has template?
		if ( 'DIV' !== node.nodeName ) {
			return;
		}

		node.addEventListener( 'click', ListingTemplateClick );
		ListingAddTemplateWatcher( this );
	};

	this.onObserve = function () {
		InputData.prototype.onObserve.call( this );

		this.callable = null;
	};
}

AppointmentInput.prototype    = Object.create( InputData.prototype );
AppointmentProvider.prototype = Object.create( InputData.prototype );

addAction(
	'jet.fb.observe.before',
	'jet-form-builder/appointment-compatibility',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		const { rootNode } = observable;

		for ( const calendarWrapper of rootNode.querySelectorAll(
			'.jet-apb-calendar-wrapper',
		) ) {
			const input = calendarWrapper.querySelector( 'input[data-field]' );

			if ( 'appointment' !== input.dataset.field ) {
				continue;
			}

			input.dataset.jfbSync = 1;
		}

		for ( const provider of rootNode.querySelectorAll(
			'.field-type-appointment-provider .appointment-provider',
		) ) {
			provider.dataset.jfbSync = 1;
		}
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/appointment-field',
	function ( inputs ) {
		inputs = [
			AppointmentInput,
			AppointmentProvider,
			...inputs,
		];

		return inputs;
	},
);
