const { strict_mode = false } = window?.JetFormBuilderSettings;

const STRICT_MODE = Boolean( strict_mode );

const {
	      InputData,
	      ReactiveHook,
      } = JetFormBuilderAbstract;

const { getParsedName } = JetFormBuilderFunctions;

function RadioData() {
	InputData.call( this );

	this.wrapper = null;

	this.isSupported        = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.radio-wrap' )
		);
	};
	this.addListeners       = function () {
		this.enterKey = new ReactiveHook();

		this.wrapper.addEventListener( 'change', ( { target } ) => {
			target.dataset.custom ? this.toggleCustomOption() : this.setValue();
		} );
		this.wrapper.addEventListener(
			'keydown',
			this.handleEnterKey.bind( this ),
		);
		this.wrapper.addEventListener( 'focusout', event => {
			if (
				// just simple radio
				[ ...this.nodes ].includes( event?.relatedTarget ) ||
				// input from custom radio
				event?.relatedTarget?.closest?.(
					'.jet-form-builder__field-wrap.custom-option',
				)
			) {
				return;
			}
			this.reportOnBlur();
		} );

		!STRICT_MODE && jQuery( this.wrapper ).on( 'change', event => {
			if ( this.value.current == event.target.value ) {
				return;
			}
			this.callable.lockTrigger();
			this.setValue();
			this.callable.unlockTrigger();
		} );
	};
	this.setValue           = function () {
		this.value.current = this.getActiveValue();
	};
	this.toggleCustomOption = function () {
		const node  = this.lastNode();
		const input = this.getCustomInput();

		if ( input.disabled === node.checked ) {
			input.disabled = !node.checked;
		}

		if ( node.checked ) {
			input.focus();
		}

	};
	this.getActiveValue     = function () {
		for ( const node of this.nodes ) {
			if ( node.dataset.custom ) {
				continue;
			}
			if ( node.checked ) {
				return node.value;
			}
		}

		if ( !this.hasCustom ) {
			return '';
		}

		return this.getCustomInput().value;
	};

	this.setNode = function ( node ) {
		node.jfbSync = this;
		/**
		 * It should be live collection for the case when items may change
		 */
		this.nodes = node.getElementsByClassName(
			'jet-form-builder__field radio-field' );

		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'radio';

		/**
		 * @type {HTMLElement|HTMLInputElement}
		 */
		this.wrapper = node;

		this.hasCustom = !!(
			this.lastNode()?.dataset?.custom
		);
	};
}

RadioData.prototype = Object.create( InputData.prototype );

RadioData.prototype.lastNode = function () {
	return this.nodes[ this.nodes.length - 1 ];
};

RadioData.prototype.getCustomInput = function () {
	const lastWrapper = this.lastNode().closest( '.custom-option' );

	return lastWrapper.querySelector( 'input.text-field' );
};

export default RadioData;