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

	this.providerArgs = {};

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

		this.name         = node.dataset?.field || node.name;
		this.providerArgs = JSON.parse( node.dataset.args );
	};

	this.checkIsRequired = function () {
		return this.providerArgs?.args_str?.includes( 'required' );
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
		if ( !this.providerArgs?.service?.field ) {
			return;
		}

		const service = this.root.getInput( this.providerArgs.service.field );

		if ( !service ) {
			return;
		}

		service.watch( () => {
			this.silenceSet( null );
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

addAction(
	'jet.fb.input.makeReactive',
	'jet-form-builder/appointment-compatibility',
	/**
	 * @param input {InputData}
	 */
	function ( input ) {
		for ( const currentInput of input.root.getInputs() ) {
			// is calendar
			if ( currentInput instanceof AppointmentInput ) {
				const [ node ] = currentInput.nodes;

				const wrapper = node.closest( '.appointment-calendar' );
				const args    = JSON.parse( wrapper.dataset.args );

				if ( args?.service?.field === input.name ) {
					input.callable.triggerJQuery = () => {};
				}
			}

			if ( currentInput instanceof AppointmentProvider ) {
				const [ node ] = currentInput.nodes;

				const args = JSON.parse( node.dataset.args );

				if ( args?.service?.field === input.name ) {
					input.callable.triggerJQuery = () => {};
				}
			}
		}
	},
);

addAction(
	'jet.fb.multistep.page.init',
	'jet-form-builder/appointment-compatibility/switch-page-on-change',
	/**
	 * @param page {PageState}
	 */
	function ( page ) {
		const wrappers = page.node.querySelectorAll(
			'.appointment-provider[data-args*="data-switch"], .appointment-provider[data-switch="1"]',
		);
		if ( !wrappers?.length ) {
			return;
		}
		for ( const wrapper of wrappers ) {
			wrapper.jfbSync.watch( () => {
				if ( !wrapper.jfbSync.value.current ) {
					return;
				}
				page.changePage( false ).then( () => {} ).catch( () => {} );
			} );
		}
	},
);

