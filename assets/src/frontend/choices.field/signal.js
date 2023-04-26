import { getWrapper } from './functions';

const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

function SignalChoices() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return !!getWrapper( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.isArray()
			               ? this.input.value.current?.includes( node.value )
			               : this.input.value.current === node.value;

			const wrapper = getWrapper( node );

			wrapper.classList.toggle( 'is-checked', node.checked );
			wrapper.ariaPressed = node.checked;

			this.toggleImageControl( wrapper, node.checked );

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);
		}
	};
}

SignalChoices.prototype = Object.create( BaseSignal.prototype );

/**
 * @param wrapper {HTMLElement}
 * @param isChecked {Boolean}
 */
SignalChoices.prototype.toggleImageControl = function ( wrapper, isChecked ) {
	/**
	 * @type {Element|HTMLImageElement}
	 */
	const image = wrapper.querySelector(
		'.jet-form-builder-choice--item-control-img',
	);

	if ( !image ) {
		return;
	}

	const newSrc = isChecked
	               ? image.dataset.srcChecked
	               : image.dataset.srcDefault;

	if ( image.src === newSrc ) {
		return;
	}

	image.src = newSrc;
};

export default SignalChoices;