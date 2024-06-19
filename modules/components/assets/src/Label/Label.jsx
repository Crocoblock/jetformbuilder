import { styled } from '@linaria/react';

const Label = styled.label`
    font-size: 11px;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    box-sizing: border-box;
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 100%;
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default Label;