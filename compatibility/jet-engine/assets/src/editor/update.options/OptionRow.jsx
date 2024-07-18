/* eslint-disable import/no-extraneous-dependencies */
import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { Card, Flex, TextControl } from '@wordpress/components';
import { styled } from '@linaria/react';

const StyledFlex = styled( Flex )`
    padding: 1em;
`;

function OptionRow( {
	label,
	value,
	onChange,
} ) {

	return <Card elevation={ 2 }>
		<StyledFlex direction="column" gap={ 3 }>
			<RowControl controlSize={ 1 }>
				{ ({id}) => <>
					<Label htmlFor={ id }>
						{ label }
					</Label>
					<TextControl
						id={ id }
						value={ value }
						onChange={ onChange }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</> }
			</RowControl>
		</StyledFlex>
	</Card>;
}

export default OptionRow;