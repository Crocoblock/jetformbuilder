const {
	      InputData,
	      BaseSignal,
      } = JetFormBuilderAbstract;

const {
	      addAction,
	      addFilter,
      } = wp.hooks;

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
}

function AppointmentSignal() {
	BaseSignal.call( this );

	this.isSupported = function ( node, input ) {
		return input instanceof AppointmentInput;
	};

	this.runSignal = function () {

	};
}

AppointmentInput.prototype  = Object.create( InputData.prototype );
AppointmentSignal.prototype = Object.create( BaseSignal.prototype );

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
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/appointment-field',
	function ( inputs ) {
		inputs = [ AppointmentInput, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/appointment-field',
	function ( signals ) {
		signals = [ AppointmentSignal, ...signals ];

		return signals;
	},
);
