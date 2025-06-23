import { SelectControl } from '@wordpress/components';
import { styled } from '@linaria/react';

const StyledSelectControl = styled( SelectControl )`
    .components-input-control__container {
		select.components-select-control__input {
			height: 40px;
		}
	}
`;

export default StyledSelectControl;