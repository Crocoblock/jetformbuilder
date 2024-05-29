import sanitizeDynamicCheckbox from './sanitizeDynamicCheckbox';

const {
	      CheckboxData,
      } = JetFormBuilderAbstract;

function DynamicCheckboxData() {
	CheckboxData.call( this );
}

DynamicCheckboxData.prototype = Object.create( CheckboxData.prototype );

DynamicCheckboxData.prototype.isSupported = function ( node ) {
	return (
		CheckboxData.prototype.isSupported.call( this, node ) &&
		!!node.querySelector(
			'.jet-form-builder__field-template .wp-block-jet-forms-check-mark input',
		)
	);
};

DynamicCheckboxData.prototype.addListeners = function () {
	CheckboxData.prototype.addListeners.call( this );

	this.sanitize( value => sanitizeDynamicCheckbox( value, this ) );
};

/**
 * @param event {Event}
 */
DynamicCheckboxData.prototype.onChangeValue = function ( event ) {
	if ( !event.target.classList.contains( 'check-mark-control' ) ) {
		CheckboxData.prototype.onChangeValue.call( this, event );

		return;
	}

	const realInput = event.target.closest(
		'.jet-form-builder__field-wrap',
	).querySelector(
		'.jet-form-builder__field',
	);

	realInput.checked = event.target.checked;
	CheckboxData.prototype.onChangeValue.call( this, event );
};

export default DynamicCheckboxData;