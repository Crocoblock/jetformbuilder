import InputData from './InputData';
import { isInputMask } from '../supports';

class InputMaskedData extends InputData {

	isSupported( node ) {
		return isInputMask( node );
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'blur', () => {
			this.value.current = node.inputmask.unmaskedvalue();
		} );
	}

	setNode( node ) {
		super.setNode( node );

		jQuery( node ).inputmask();
	}

	setRoot( observable ) {
		super.setRoot( observable );

		this.getSubmit().submitter.promise( this.removeMask.bind( this ) );
	}

	removeMask( resolve ) {
		const $maskedField = jQuery( this.nodes[ 0 ] );

		// Remove mask if empty value
		if ( !this.value.current ) {
			$maskedField.inputmask( 'remove' );
		}

		resolve();
	}

}

export default InputMaskedData;