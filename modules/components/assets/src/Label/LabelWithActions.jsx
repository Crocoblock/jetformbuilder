import { styled } from '@linaria/react';
import RequiredLabel from './RequiredLabel';
import RowControlStartStyle from '../RowControl/RowControlStartStyle';
import { cx } from '@linaria/core';
import { Flex } from '@wordpress/components';

function NoStyledLabelWithActions( { children, className, ...props } ) {
	return <Flex
		justify="flex-start"
		className={ cx( RowControlStartStyle, className ) }
		{ ...props }
	>
		{ children }
	</Flex>;
}

const LabelWithActions = styled( NoStyledLabelWithActions )`
    ${ RequiredLabel } {
        padding-right: 16px;

        .rtl & {
            padding-left: 16px;
        }
    }
`;

export default LabelWithActions;