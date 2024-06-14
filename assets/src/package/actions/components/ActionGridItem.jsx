import { styled } from '@linaria/react';
import { Flex, ExternalLink } from '@wordpress/components';
import { plugins, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

const ActionTitle = styled.h3`
    margin: unset;
`;

const ColoredIcon = styled( Icon )`
    fill: currentColor;
`;

const Wrapper = styled( Flex )`
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
    cursor: pointer;
    padding: 1em;
    border-radius: 8px;
	
    &, & ${ ActionTitle } {
        transition: 0.2s ease-in-out;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    }

    &:hover, &:hover ${ ActionTitle } {
        color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
    }
`;

function ActionGridItem( { action, onClick } ) {
	return <Wrapper
		onClick={ onClick }
		direction="column"
		align="center"
	>
		<ActionTitle>{ action.label }</ActionTitle>
		<ColoredIcon icon={ action?.icon ?? plugins } size={ 128 }/>
		{ action?.docHref && <ExternalLink href={ action?.docHref }>
			{ __( 'Documentation', 'jet-form-builder' ) }
		</ExternalLink> }
	</Wrapper>;
}

export default ActionGridItem;