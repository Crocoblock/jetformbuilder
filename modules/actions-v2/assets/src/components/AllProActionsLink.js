import { styled } from '@linaria/react';
import { Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/icons';

const StyledFlex = styled( Flex )`
    border-top: 1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
    margin-top: 16px;
    margin-left: -16px;
    margin-bottom: -8px;
    padding-top: 8px;

    && {
        width: calc(100% + 32px);
    }
`;

function AllProActionsLink() {
	return (
		!JetFormEditorData.isActivePro
	) && <StyledFlex
		gap={ 3 }
		justify="center"
	>
		<a
			href={ JetFormEditorData.utmLinks.allProActions }
			target="_blank"
			rel="external noreferrer noopener"
			style={ {
				textDecoration: 'none',
			} }
		>
			<Flex>
				{ __( 'All PRO Actions', 'jet-form-builder' ) }
				<Icon
					size={ 20 }
					icon={
						<svg xmlns="http://www.w3.org/2000/svg"
						     viewBox="0 0 24 24"
						     width="24" height="24" aria-hidden="true"
						     focusable="false"
						     fill="currentColor"
						>
							<path
								d="M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"/>
						</svg>
					}
				/>
			</Flex>
		</a>
	</StyledFlex>;
}

// backward compatibility
window.JetFBComponents                   = window?.JetFBComponents ?? {};
window.JetFBComponents.AllProActionsLink = AllProActionsLink;

export default AllProActionsLink;