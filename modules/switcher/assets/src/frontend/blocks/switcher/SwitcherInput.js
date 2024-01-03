const {
	      InputData,
	      ReactiveHook,
      } = JetFormBuilderAbstract;

/**
 * @property HTMLCollectionOf<HTMLInputElement> nodes
 */
function SwitcherInput() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return 'switch' === node?.role;
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'input', event => {
			this.value.current = event.target.checked;
		} );

		node.addEventListener( 'blur', event => {
			this.reportOnBlur();
		} );

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );

		this.sanitize( function transformNotValue( value ) {
			if ( !Boolean( value ) ) {
				return '';
			}
			// save node value if reactive value receive true (boolean)
			return node.value;
		} );
	};

	this.setValue = function () {
		const [ node ] = this.nodes;

		this.value.current = node.checked ? node.value : null;
	};

	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.inputType = 'switcher';
	};
}

SwitcherInput.prototype = Object.create( InputData.prototype );

export default SwitcherInput;