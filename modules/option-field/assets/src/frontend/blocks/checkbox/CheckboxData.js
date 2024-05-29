import getCustomCheckboxInput from './functions/getCustomCheckboxInput';
import sanitizeCheckbox from './functions/sanitizeCheckbox';

const {
	      InputData,
	      ReactiveHook,
      } = JetFormBuilderAbstract;

const { getParsedName } = JetFormBuilderFunctions;

function sanitizeValue( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}

	return [ value ].filter(
		Boolean,
	);
}

/**
 * @property HTMLCollectionOf<HTMLInputElement> nodes
 */
function CheckboxData() {
	InputData.call( this );

	this.wrapper          = null;
	this.isResetCalcValue = false;
}

CheckboxData.prototype = Object.create( InputData.prototype );

CheckboxData.prototype.wrapper = null;

CheckboxData.prototype.isSupported  = function ( node ) {
	return (
		node.classList.contains( 'checkradio-wrap' ) &&
		node.querySelector( '.checkboxes-wrap' )
	);
};
CheckboxData.prototype.addListeners = function () {
	this.enterKey = new ReactiveHook();

	this.wrapper.addEventListener( 'change', this.onChangeValue.bind( this ) );
	this.wrapper.addEventListener(
		'keydown',
		this.handleEnterKey.bind( this ),
	);

	this.wrapper.addEventListener( 'focusout', event => {
		if (
			// just simple checkbox
			[ ...this.nodes ].includes( event?.relatedTarget ) ||
			// input from custom checkbox
			event?.relatedTarget?.closest?.(
				'.jet-form-builder__field-wrap.custom-option',
			)
		) {
			return;
		}
		this.reportOnBlur();
	} );

	if ( this.addNewButton ) {
		this.wrapper.addEventListener( 'click', event => {
			if ( event?.target &&
				!this.addNewButton.isEqualNode( event.target )
			) {
				return;
			}
			this.silenceSet( [ ...this.value.current, true ] );
			const lastNode = this.getCustomNodes().at( -1 );

			const input = lastNode.closest(
				'.jet-form-builder__field-wrap',
			).querySelector( 'span input.jet-form-builder__field' );

			input.focus();
		} );
	}

	this.isArray() && this.sanitize( sanitizeValue );

	/**
	 * Use Sanitizer instead of BaseSignal prototype.
	 * We need it because of deletion "null" values
	 */

	this.callable = null;
	this.sanitize( value => sanitizeCheckbox( value, this ) );
};

CheckboxData.prototype.onChangeValue = function ( event ) {
	this.value.current = this.getActiveValue();
};

CheckboxData.prototype.setValue = function () {
	this.value.current = this.getActiveValue();
	this.value.applySanitizers( this.value.current );
};

CheckboxData.prototype.setNode = function ( node ) {
	node.jfbSync = this;
	/**
	 * It should be live collection for the case when items may change
	 */
	this.nodes = node.getElementsByClassName(
		'jet-form-builder__field checkboxes-field' );

	this.rawName   = this.nodes[ 0 ].name;
	this.name      = getParsedName( this.rawName );
	this.inputType = 'checkbox';

	/**
	 * @type {HTMLElement|HTMLInputElement}
	 */
	this.wrapper = node;

	this.addNewButton = node.querySelector(
		'.jet-form-builder__field-wrap.custom-option .add-custom-option',
	);
};

CheckboxData.prototype.getActiveValue = function () {
	const value = [];

	// iterate checkboxes
	for ( const node of this.nodes ) {
		this.processValueFormSingleChoice( node, value );
	}

	return this.isArray() ? value : (
		value?.[ 0 ] ?? ''
	);
};

/**
 * @param node {Element}
 * @param value {Array}
 */
CheckboxData.prototype.processValueFormSingleChoice = function ( node, value ) {
	if ( !node.dataset.custom && !node.checked ) {
		return;
	}

	// if basic option just return value
	if ( !node.dataset.custom ) {
		value.push( node.value );
		return;
	}

	const input = getCustomCheckboxInput( node );

	if ( !node.checked && !input.value ) {
		value.push( null );
		return;
	}

	// recently added new option
	if ( !input.value && node.checked ) {
		value.push( true );
		return;
	}

	if ( !input.value ) {
		return;
	}

	// disabled or enable input, depending on checkbox check state
	value.push( !node.checked ? false : input.value );
};

CheckboxData.prototype.isArray = function () {
	return (
		Boolean( this.addNewButton ) ||
		this.nodes.item( 0 )?.name?.includes?.( '[]' )
	);
};

CheckboxData.prototype.addCustomOption = function () {
	const rowWrapper = this.addNewButton.closest(
		'.custom-option',
	);

	return this.wrapper.insertBefore(
		this.getCustomOptionNode(),
		rowWrapper,
	);
};

CheckboxData.prototype.getCustomOptionNode = function () {
	if ( !this.addNewButton ) {
		return false;
	}

	const initial = this.addNewButton.querySelector( 'template' );

	const template     = document.createElement( 'template' );
	template.innerHTML = initial.innerHTML.trim();

	return template.content.firstChild;
};

CheckboxData.prototype.getCustomNodes = function () {
	return [ ...this.nodes ].filter(
		node => node.dataset.custom && node.nextElementSibling,
	);
};

export default CheckboxData;