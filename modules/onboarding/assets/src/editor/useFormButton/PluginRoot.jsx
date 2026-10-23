import { Button, SlotFillProvider } from '@wordpress/components';
import { createPortal, useEffect, useState } from '@wordpress/element';
import { next } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	ResponsiveModal,
	UseFormRoot,
	FormAttributesContext,
} from 'jet-form-builder-use-form';
import { store } from '@wordpress/editor';

const {
	      useMetaState,
      } = JetFBHooks;

function PluginRoot() {
	const [ isOpen, setIsOpen ] = useState( false );
	const [ buttonContainer, setButtonContainer ] = useState( null );

	useEffect( () => {
		const container = document.createElement( 'div' );
		container.classList.add( 'jfb-use-form-wrapper' );

		const appendButton = () => {
			// Support both the old and the WordPress 6.6+ editor header.
			const header = document.querySelector(
				'.edit-post-header__settings, .editor-header__settings',
			);

			if ( !header ) {
				return false;
			}

			header.insertBefore(
				container,
				header.querySelector( '.editor-post-publish-button__button' ),
			);
			setButtonContainer( container );
			return true;
		};

		const observer = new MutationObserver( () => {
			if ( appendButton() ) {
				observer.disconnect();
			}
		} );

		if ( !appendButton() ) {
			observer.observe( document.body, { childList: true, subtree: true } );
		}

		return () => {
			observer.disconnect();
			container.remove();
		};
	}, [] );

	const formId = useSelect( select => (
		select( store ).getEditedPostAttribute( 'id' )
	), [] );

	const [ args ] = useMetaState( '_jf_args' );

	if ( !buttonContainer ) {
		return null;
	}

	return createPortal( <SlotFillProvider>
		<Button
			className="jfb-use-form-button"
			icon={ next }
			label={ __( 'Use the form', 'jet-form-builder' ) }
			aria-haspopup="dialog"
			onClick={ () => setIsOpen( true ) }
		/>
		{ isOpen && <ResponsiveModal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ () => setIsOpen( false ) }
		>
			<FormAttributesContext.Provider
				value={ { formId, args, shouldUpdateForm: true } }
			>
				<UseFormRoot/>
			</FormAttributesContext.Provider>
		</ResponsiveModal> }
	</SlotFillProvider>, buttonContainer );
}

export default PluginRoot;