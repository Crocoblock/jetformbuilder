const {
	      InputData,
      } = JetFormBuilderAbstract;

function TextFieldData() {
	InputData.call( this );

	this.isSupported = function ( node ) {
		return true;
	};

	this.addListeners = function () {
		InputData.prototype.addListeners.call( this );

		const [ node ] = this.nodes;

		const button = this.getWrapperNode()?.querySelector?.(
			'.jfb-eye-icon',
		);

		// show eye icon is disabled
		if ( !button ) {
			return;
		}

		button.addEventListener( 'click', function () {
			button.classList.toggle( 'seen' );
			let isPressed = this.getAttribute( 'aria-pressed' ) === 'true';
			this.setAttribute( 'aria-pressed', !isPressed );

			node.type = button.classList.contains( 'seen' )
			            ? 'password'
			            : 'text';
		} );

		button.addEventListener( 'keydown', function ( event ) {
			if ( event.key === ' ' || event.key === 'Enter' ) {
				event.preventDefault();
				this.click();
			}
		} );

		button.addEventListener( 'keyup', function ( event ) {
			if ( event.key === ' ' ) {
				event.preventDefault();
			}
		} );
	};
}

TextFieldData.prototype = Object.create( InputData.prototype );

export default TextFieldData;