import { css } from '@linaria/core';

const StickyFooter = css`
    position: sticky;
    bottom: 0;
    left: 0;
    padding: 18px 24px 20px 0;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #ddd;
    z-index: 100;
`;

export default StickyFooter;