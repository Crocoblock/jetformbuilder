/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@linaria/react';
import { Flex, ExternalLink } from '@wordpress/components';
import { plugins, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import ProActionOverlay from '../ProActionOverlay';

const ActionTitle = styled.h5`
    margin: unset;
    text-align: center;
    font-size: 15px;
    color: #1d2327;
`;

const ColoredIcon = styled( Icon )`
    fill: currentColor;
`;

const Overlay = styled.div`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 1em;
    text-align: center;
    color: #1d2327;
    font-weight: 600;
    cursor: auto;
`;

const FlexWrapper = styled( Flex )`
    cursor: pointer;
    padding: 1.5em;
    border-radius: 2px;
    border: 1px solid #ddd;
    position: relative;
    color: #848485;

    &, & ${ ActionTitle }, & ${ Overlay } {
        transition: 0.2s ease-in-out;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
    }


    &:hover, &:hover ${ ActionTitle } {
        color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
    }

    &.is-disabled {
        &, & ${ ActionTitle } {
            color: #c7c7c7;
        }

        &:hover > *:not(${ Overlay }) {
            filter: blur(2px);
        }

        &:hover {
            ${ Overlay } {
                opacity: 1;
            }
        }
    }
`;

function ActionGridItem( { action, onClick } ) {
	const ActionOverlay = action?.disabledOverlay ?? ProActionOverlay;

	return <FlexWrapper
		onClick={ onClick }
		direction="column"
		align="center"
		justify="flex-start"
		className={ action.disabled ? 'is-disabled' : '' }
	>
		<ColoredIcon icon={ action?.icon ?? plugins } size={ 32 }/>
		<ActionTitle>{ action.label }</ActionTitle>
		{ action?.docHref && <ExternalLink href={ action?.docHref }>
			{ __( 'Documentation', 'jet-form-builder' ) }
		</ExternalLink> }
		{ action.disabled && <Overlay>
			<ActionOverlay action={ action }/>
		</Overlay> }
	</FlexWrapper>;
}

export default ActionGridItem;