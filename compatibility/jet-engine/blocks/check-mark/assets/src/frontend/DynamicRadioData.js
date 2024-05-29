import sanitizeDynamicCheckbox
	from '@root/assets/src/frontend/sanitizeDynamicCheckbox';
import DynamicCheckboxData from '@root/assets/src/frontend/DynamicCheckboxData';
import onChangeRadio from '@root/assets/src/frontend/onChangeRadio';

const {
	      RadioData,
      } = JetFormBuilderAbstract;

function DynamicRadioData() {
	RadioData.call( this );
}

DynamicRadioData.prototype = Object.create( RadioData.prototype );

DynamicRadioData.prototype.isSupported = function ( node ) {
	return (
		CheckboxData.prototype.isSupported.call( this, node ) &&
		!!node.querySelector(
			'.jet-form-builder__field-template .wp-block-jet-forms-check-mark input',
		)
	);
};

DynamicRadioData.prototype.addListeners = function () {
	CheckboxData.prototype.addListeners.call( this );

	this.watch( () => onChangeRadio( this ) );
};

/**
 * @param event {Event}
 */
DynamicRadioData.prototype.onChangeValue = function ( event ) {
	if ( event.target.classList.contains( 'jet-form-builder__field' ) ) {
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