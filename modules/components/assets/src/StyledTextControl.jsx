import { TextControl } from '@wordpress/components';
import { styled } from '@linaria/react';

const StyledTextControl = styled( TextControl )`
	.components-base-control__field {
		input.components-text-control__input {
			height: 40px;
		}
	}
`;

export default StyledTextControl;