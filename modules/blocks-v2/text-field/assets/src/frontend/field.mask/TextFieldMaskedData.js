const { applyFilters } = JetPlugins.hooks;

const {
	ReactiveHook,
	InputData,
} = JetFormBuilderAbstract;

// eslint-disable-next-line max-lines-per-function
function TextFieldMaskedData() {
	InputData.call( this );

	this.maskOptions   = {};
	this.clearOnSubmit = false;

	this.isSupported = function ( node ) {
		return (
			node.classList.contains( 'jet-form-builder__masked-field' ) &&
			jQuery.fn.inputmask
		);
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
	};
	this.maskValidation = function() {
		const [ node ] = this.nodes;
		const { value } = node;

		this.value.current = node.inputmask.unmaskedvalue();

		setTimeout( () => {
			this.reporting.validateOnBlur();
		}, 0 );

		this.silenceSet( value );
	};
	this.changeStateMaskValidation = function() {
		const [ node ] = this.nodes;

		this.value.current = node.inputmask.unmaskedvalue();
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.clearOnSubmit = node.dataset.clearMaskOnSubmit ?? false;

		const inputMaskOpts = this.clearOnSubmit ? { autoUnmask: true } : {};

		inputMaskOpts.oncomplete   = this.maskValidation.bind( this );
		inputMaskOpts.onincomplete = this.maskValidation.bind( this );

		const options = applyFilters( 'jet.fb.inputmask.options', inputMaskOpts, this );

		jQuery( node ).inputmask( options );

		this.beforeSubmit( this.removeMask.bind( this ) );
		this.getSubmit().onEndSubmit( this.revertMask.bind( this ) );
	};
	this.removeMask   = function ( resolve ) {
		const $maskedField = jQuery( this.nodes[ 0 ] );
		this.maskOptions   = $maskedField[0].inputmask.opts;

		// Remove mask if empty value
		if ( !this.value.current || this.clearOnSubmit ) {
			$maskedField.inputmask( 'remove' );
			this.value.notify();
		}

		resolve();
	};
	this.revertMask   = function () {
		const [ node ]   = this.nodes;
		const opts       = this.maskOptions;
		this.maskOptions = {};

		if ( node.inputmask ) {
			return;
		}

		jQuery( node ).inputmask( opts );
	};

	this.onClear = function () {
		this.silenceSet( '' );
	};

}

TextFieldMaskedData.prototype = Object.create( InputData.prototype );

export default TextFieldMaskedData;