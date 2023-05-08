import { getWrapper } from './functions';

const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

/**
 * @property {ChoicesData} input
 */
function SignalChoices() {
	BaseSignal.call( this );

	/**
	 * @type {Boolean|null}
	 */
	this.isRadio = null;
	this.indexedFirst = false;

	this.isSupported = function ( node, inputData ) {
		return !!getWrapper( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;
		this.indexedFirst    = false;

		for ( const node of this.input.nodes ) {
			node.checked = !this.isRadio
			               ? this.input.value.current?.includes( node.value )
			               : this.input.value.current === node.value;

			const wrapper = getWrapper( node );

			this.toggleTabIndex( node, wrapper );

			wrapper.classList.toggle( 'is-checked', node.checked );
			wrapper.ariaChecked = node.checked;

			this.toggleImageControl( wrapper, node.checked );

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);
		}
	};

	this.setInput = function ( input ) {
		BaseSignal.prototype.setInput.call( this, input );

		this.isRadio = !this.input.isArray();
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

/**
 * @param node {HTMLInputElement}
 * @param wrapper {HTMLInputElement}
 */
SignalChoices.prototype.toggleTabIndex = function ( node, wrapper ) {
	if ( !this.isRadio || this.input.isNativeControl( node ) ) {
		return;
	}
	const hasValue = !isEmpty( this.input.value.current );

	// set tabIndex = 1 for the first element if empty value
	if ( !hasValue ) {
		this.setRawTabIndex( wrapper, this.indexedFirst ? -1 : 0 );
		this.indexedFirst = true;

		return;
	}

	this.setRawTabIndex( wrapper, node.checked ? 0 : -1 );
};

/**
 * @param node {HTMLInputElement}
 * @param tabIndex {Number}
 */
SignalChoices.prototype.setRawTabIndex = function ( node, tabIndex ) {
	if ( tabIndex !== node.tabIndex ) {
		node.tabIndex = tabIndex;
	}
};

export default SignalChoices;