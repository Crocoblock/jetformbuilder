import { Popover } from '@wordpress/components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@linaria/react';

const PopoverStandard = styled( Popover )`
    .components-popover__content {
        padding: 0.5em;
        width: max-content;
    }
`;

export default PopoverStandard;