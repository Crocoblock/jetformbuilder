const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

/**
 * @property {WysiwygData} input
 */
function SignalWysiwyg() {
	BaseSignal.call( this );

	this.lock.current = true;

	this.isSupported = function ( node, inputData ) {
		return node.classList.contains( 'wysiwyg-field' );
	};
	this.runSignal   = function () {
		if ( this.input.value.current === this.input.editor.getContent() ) {
			return;
		}
		this.input.editor.setContent( this.input.value.current ?? '' );
	};
}

SignalWysiwyg.prototype = Object.create( BaseSignal.prototype );

export default SignalWysiwyg;