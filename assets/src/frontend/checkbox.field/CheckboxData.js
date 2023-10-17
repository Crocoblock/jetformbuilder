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

	this.isSupported  = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.checkboxes-wrap' )
		);
	};
	this.addListeners = function () {
		this.enterKey = new ReactiveHook();

		this.wrapper.addEventListener( 'change', () => this.setValue() );
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

	this.setValue = function () {
		this.value.current = this.getActiveValue();
	};

	this.setNode = function ( node ) {
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

	this.getActiveValue = function () {
		const value = [];

		// iterate checkboxes
		for ( const node of this.nodes ) {
			if ( !node.dataset.custom && !node.checked ) {
				continue;
			}

			// if basic option just return value
			if ( !node.dataset.custom ) {
				value.push( node.value );
				continue;
			}

			const input = getCustomCheckboxInput( node );

			if ( !node.checked && !input.value ) {
				value.push( null );
				continue;
			}

			// recently added new option
			if ( !input.value && node.checked ) {
				value.push( true );
				continue;
			}

			if ( !input.value ) {
				continue;
			}

			// disabled or enable input, depending on checkbox check state
			value.push( !node.checked ? false : input.value );
		}

		return this.isArray() ? value : (
			value?.[ 0 ] ?? ''
		);
	};

	this.isArray = function () {
		return (
			Boolean( this.addNewButton ) ||
			this.nodes.item( 0 )?.name?.includes?.( '[]' )
		);
	};
}

CheckboxData.prototype = Object.create( InputData.prototype );

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