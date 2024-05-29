import onChangeRadio from './onChangeRadio';

const {
	      RadioData,
      } = JetFormBuilderAbstract;

function DynamicRadioData() {
	RadioData.call( this );
}

DynamicRadioData.prototype = Object.create( RadioData.prototype );

DynamicRadioData.prototype.isSupported = function ( node ) {
	return (
		RadioData.prototype.isSupported.call( this, node ) &&
		!!node.querySelector(
			'.jet-form-builder__field-template .wp-block-jet-forms-check-mark input',
		)
	);
};

DynamicRadioData.prototype.addListeners = function () {
	RadioData.prototype.addListeners.call( this );

	this.watch( () => onChangeRadio( this ) );
};

/**
 * @param event {Event}
 */
DynamicRadioData.prototype.onChangeValue = function ( event ) {
	if ( !event.target.classList.contains( 'check-mark-control' ) ) {
		RadioData.prototype.onChangeValue.call( this, event );

		return;
	}

	const realInput = event.target.closest(
		'.jet-form-builder__field-wrap',
	).querySelector(
		'.jet-form-builder__field',
	);

	realInput.checked = event.target.checked;
	RadioData.prototype.onChangeValue.call( this, event );
};

export default DynamicRadioData;