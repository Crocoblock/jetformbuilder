import InputData from './InputData';

class InputMaskedData extends InputData {

	isSupported( node ) {
		return (
			node.classList.contains( 'jet-form-builder__masked-field' ) &&
			jQuery.fn.inputmask
		);
	}

	addListener() {
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