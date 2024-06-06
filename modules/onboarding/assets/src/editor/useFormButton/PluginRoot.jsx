import { PluginSidebar } from '@wordpress/edit-post';
import { next } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	Modal,
} from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart/SecondPart';
import { styled } from '@linaria/react';

const ResponsiveModal = styled( Modal )`

    @media (min-width: 900px) {
        width: 70vw;
    }
	
    @media (min-width: 1200px) {
        width: 55vw;
    }
`;

function PluginRoot() {
	const { closeGeneralSidebar } = useDispatch( 'core/edit-post' );

	return <PluginSidebar
		icon={ next }
		name="sidebar"
		title={ __( 'Use the form', 'jet-form-builder' ) }
	>
		<ResponsiveModal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ closeGeneralSidebar }
		>
			<FirstPart/>
			<SecondPart/>
		</ResponsiveModal>
	</PluginSidebar>;
}

export default PluginRoot;