import { styled } from '@linaria/react';
import { Flex, ExternalLink } from '@wordpress/components';
import { plugins, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Disabled } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

const ActionTitle = styled.h3`
    margin: unset;
`;

const ColoredIcon = styled( Icon )`
    fill: currentColor;
`;

const FlexWrapper = styled( Flex )`
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

    .components-disabled & {
        &, & ${ ActionTitle } {
            color: #c7c7c7;
        }
    }
`;

function ActionGridItem( { action, onClick } ) {
	const Wrapper = action.disabled ? Disabled : Fragment;

	return <Wrapper>
		<FlexWrapper
			onClick={ onClick }
			direction="column"
			align="center"
		>
			<ActionTitle>{ action.label }</ActionTitle>
			<ColoredIcon icon={ action?.icon ?? plugins } size={ 128 }/>
			{ action?.docHref && <ExternalLink href={ action?.docHref }>
				{ __( 'Documentation', 'jet-form-builder' ) }
			</ExternalLink> }
		</FlexWrapper>
	</Wrapper>;
}

export default ActionGridItem;