import { useState } from '@wordpress/element';
import { Button, SlotFillProvider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { next } from '@wordpress/icons';
import {
	ResponsiveModal,
	UseFormRoot,
	FormAttributesContext,
} from 'jet-form-builder-use-form';
import { getQueryArg } from '@wordpress/url';
import { useSelect } from '@wordpress/data';

const formId = +getQueryArg( window.location.href, 'p' );

function UseFormButton() {
	const [ showModal, setShowModal ] = useState( false );

	const args = useSelect( select => {
		const entity = select( 'core' ).getEntityRecord(
			'postType',
			'jet-form-builder',
			formId,
		);

		if ( !entity?.meta ) {
			return {};
		}

		return JSON.parse( entity.meta._jf_args );
	}, [] );

	return <SlotFillProvider>
		<Button
			variant="secondary"
			icon={ next }
			onClick={ () => setShowModal( true ) }
		>
			{ __( 'Use the form', 'jet-form-builder' ) }
		</Button>
		{ showModal && <ResponsiveModal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ () => setShowModal( false ) }
		>
			<FormAttributesContext.Provider
				value={ { formId, args, shouldUpdateForm: false } }
			>
				<UseFormRoot/>
			</FormAttributesContext.Provider>
		</ResponsiveModal> }
	</SlotFillProvider>;
}

export default UseFormButton;