const {
	      InputData,
      } = JetFormBuilderAbstract;

function addEyeIconListeners( input ) {
	const [ node ] = input.nodes;
	const button = input.getWrapperNode()?.querySelector?.( '.jfb-eye-icon' );

	if ( !button ) {
		return;
	}

	button.addEventListener( 'click', function () {
		button.classList.toggle( 'seen' );
		const isPressed = this.getAttribute( 'aria-pressed' ) === 'true';
		this.setAttribute( 'aria-pressed', !isPressed );

		node.type = button.classList.contains( 'seen' ) ? 'password' : 'text';
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
}

function TextFieldData() {
	InputData.call( this );

	this.isSupported = function () {
		return true;
	};

	this.addListeners = function () {
		InputData.prototype.addListeners.call( this );

		addEyeIconListeners( this );
	};
}

TextFieldData.prototype = Object.create( InputData.prototype );

export { addEyeIconListeners };
export default TextFieldData;
