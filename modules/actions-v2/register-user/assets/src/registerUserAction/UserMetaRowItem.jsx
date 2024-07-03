import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { Card, TextControl } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { styled } from '@linaria/react';

const StyledCard = styled( Card )`
    padding: 1em;
`;

function UserMetaRowItem( {
	label,
	value,
	onChange,
} ) {

	const htmlId = useInstanceId( UserMetaRowItem, 'jfb-user-meta' );

	return <StyledCard elevation={ 2 }>
		<RowControl
			createId={ false }
			controlSize={ 1 }
		>
			<Label htmlFor={ htmlId }>
				{ label }
			</Label>
			<TextControl
				id={ htmlId }
				value={ value }
				onChange={ onChange }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</RowControl>
	</StyledCard>;
}

export default UserMetaRowItem;