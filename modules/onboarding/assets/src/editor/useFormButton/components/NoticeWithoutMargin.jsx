// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@linaria/react';
import { Notice } from '@wordpress/components';

const NoticeWithoutMargin = styled( Notice )`
    margin: inherit;
    margin-bottom: 1em;
`;

export default NoticeWithoutMargin;