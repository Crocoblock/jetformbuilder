import InputData from './InputData';
import { isInputMask } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';

const { applyFilters } = JetPlugins.hooks;

function InputMaskedData() {
	InputData.call( this );

	this.maskOptions   = {};
	this.clearOnSubmit = false;

	this.isSupported  = function ( node ) {
		return isInputMask( node );
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'blur', () => {
			this.value.current = node.inputmask.unmaskedvalue();
		} );

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.clearOnSubmit = node.dataset.clearMaskOnSubmit ?? false;

		const options = applyFilters( 'jet.fb.inputmask.options', {}, this );
		jQuery( node ).inputmask( options );

		this.beforeSubmit( this.removeMask.bind( this ) );
		this.getSubmit().onEndSubmit( this.revertMask.bind( this ) );
	};
	this.removeMask   = function ( resolve ) {
		const $maskedField = jQuery( this.nodes[ 0 ] );
		this.maskOptions   = $maskedField.inputmask.opts;

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

InputMaskedData.prototype = Object.create( InputData.prototype );

export default InputMaskedData;