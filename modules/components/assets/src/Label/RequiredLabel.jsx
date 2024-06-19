import { styled } from '@linaria/react';
import Label from './Label';

const RequiredLabel = styled( Label )`
    display: flex;
    gap: 0.35em;
    align-items: flex-end;

    &:after {
        content: '*';
        font-size: ${ ( { size = 1.5 } ) => size + 'em' };
        color: #d63638;
        line-height: inherit;
    }
`;

export default RequiredLabel;