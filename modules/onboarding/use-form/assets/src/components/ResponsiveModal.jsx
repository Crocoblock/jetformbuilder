import { styled } from '@linaria/react';
import { Modal } from '@wordpress/components';

const ResponsiveModal = styled( Modal )`
    && {
        @media (min-width: 900px) {
            width: 70vw;
        }

        @media (min-width: 1200px) {
            width: 55vw;
        }
    }
`;

export default ResponsiveModal;