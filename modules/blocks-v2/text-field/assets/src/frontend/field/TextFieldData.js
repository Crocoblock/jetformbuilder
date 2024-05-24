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

		const wrapper = this.getWrapperNode();
		const checkbox = wrapper.querySelector(
			'.has-eye-icon input[type="checkbox"]'
		);

		// show eye icon is disabled
		if ( !checkbox ) {
			return;
		}

		const label = checkbox.closest( '.jfb-eye-icon' );
		label.style.display = 'block';

		checkbox.addEventListener( 'change', event => {
			node.type = event.target.checked ? 'text' : 'password';
		} );
	}
}

TextFieldData.prototype = Object.create( InputData.prototype );

export default TextFieldData;