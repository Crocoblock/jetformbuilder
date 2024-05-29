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
}

RadioData.prototype = Object.create( InputData.prototype );

RadioData.prototype.wrapper = null;

RadioData.prototype.isSupported  = function ( node ) {
	return (
		node.classList.contains( 'checkradio-wrap' ) &&
		node.querySelector( '.radio-wrap' )
	);
};
RadioData.prototype.addListeners = function () {
	this.enterKey = new ReactiveHook();

	this.wrapper.addEventListener( 'change', this.onChangeValue.bind( this ) );
	this.wrapper.addEventListener(
		'keydown',
		this.handleEnterKey.bind( this ),
	);

	const input = this.getCustomInput();

	this.wrapper.addEventListener( 'focusout', event => {
		if (
			[ ...this.nodes ].includes( event?.relatedTarget ) ||
			[ event.relatedTarget, event.target ].includes( input )
		) {
			return;
		}
		this.reportOnBlur();
	} );

	input?.addEventListener?.( 'blur', event => {
		const prevValue = this.value.current;

		// update this.value.current
		this.setValue();

		// trigger signals & reporting
		if ( prevValue === this.value.current ) {
			this.onChange( prevValue );
		}
	} );

	!STRICT_MODE && jQuery( this.wrapper ).on( 'change', event => {
		if (
			this.value.current == event.target.value ||
			event.target?.dataset?.custom
		) {
			return;
		}
		this.callable.lockTrigger();
		this.setValue();
		this.callable.unlockTrigger();
	} );
};

RadioData.prototype.setValue = function () {
	this.value.current = this.getActiveValue();
};

RadioData.prototype.onChangeValue = function ( event ) {
	event.target.dataset.custom ? this.toggleCustomOption() : this.setValue();
}

RadioData.prototype.toggleCustomOption = function () {
	const node  = this.lastNode();
	const input = this.getCustomInput();

	if ( input.disabled === node.checked ) {
		input.disabled = !node.checked;
	}

	if ( node.checked ) {
		input.focus();
	}

};

RadioData.prototype.getActiveValue = function () {
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

RadioData.prototype.setNode = function ( node ) {
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

RadioData.prototype.lastNode = function () {
	return this.nodes[ this.nodes.length - 1 ];
};

RadioData.prototype.getCustomInput = function () {
	const lastWrapper = this.lastNode().closest( '.custom-option' );

	return lastWrapper?.querySelector?.( 'input.text-field' );
};

export default RadioData;