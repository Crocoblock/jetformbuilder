import { PluginSidebar } from '@wordpress/editor';
import { next } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
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
	const { closeGeneralSidebar } = useDispatch( 'core/edit-post' );

	const formId = useSelect( select => (
		select( store ).getEditedPostAttribute( 'id' )
	), [] );

	const [ args ] = useMetaState( '_jf_args' );

	return <PluginSidebar
		icon={ next }
		name="sidebar"
		title={ __( 'Use the form', 'jet-form-builder' ) }
	>
		<ResponsiveModal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ closeGeneralSidebar }
		>
			<FormAttributesContext.Provider
				value={ { formId, args, shouldUpdateForm: true } }
			>
				<UseFormRoot/>
			</FormAttributesContext.Provider>
		</ResponsiveModal>
	</PluginSidebar>;
}

export default PluginRoot;