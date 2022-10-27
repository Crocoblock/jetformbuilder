import BaseSignal from './BaseSignal';
import { isWysiwyg } from '../supports';

/**
 * @property {WysiwygData} input
 */
function SignalWysiwyg() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isWysiwyg( node );
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