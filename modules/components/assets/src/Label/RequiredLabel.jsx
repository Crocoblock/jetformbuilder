import { styled } from '@linaria/react';
import Label from './Label';

const RequiredLabel = styled( Label )`
    position: relative;

    &:after {
        content: '*';
        font-size: ${ ( { size = 1.5 } ) => size + 'em' };
        color: #d63638;
        line-height: 1;
        position: absolute;
        top: 0;
        margin-left: 4px;

        .rtl & {
            margin-right: 4px;
        }

    }
`;

export default RequiredLabel;