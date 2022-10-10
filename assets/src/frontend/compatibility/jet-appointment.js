const {
	      InputData,
      } = JetFormBuilderAbstract;

const Calendar = window?.VanillaCalendar;

const {
	      addAction,
      } = wp.hooks;

function AppointmentInput() {
	InputData.call( this );
}

AppointmentInput.prototype = Object.create( InputData.prototype );

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

		}
	},
);
