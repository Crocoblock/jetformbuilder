import resolveCheckMark from './resolveCheckMark';
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

DynamicCheckboxData.prototype.processValueFormSingleChoice = function (
	node, value,
) {

	const prevLength = value.length;

	CheckboxData.prototype.processValueFormSingleChoice.call(
		this,
		node,
		value,
	);

	if ( value.includes( node.value ) ) {
		return;
	}

	const checkMark = resolveCheckMark( node );

	if ( checkMark?.checked ) {
		value.push( node.value );
	}
};

export default DynamicCheckboxData;