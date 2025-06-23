import {
	Label,
	RowControl,
	TableListStyle,
	StyledTextControl,
} from 'jet-form-builder-components';
import { Flex } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { styled } from '@linaria/react';

const StyledFlex = styled( Flex )`
    padding: 1em;
`;

function UserMetaRowItem( {
	label,
	value,
	onChange,
} ) {

	const htmlId = useInstanceId( UserMetaRowItem, 'jfb-user-meta' );

	return <StyledFlex direction="column" gap={ 3 } className={TableListStyle.Td}>
		<RowControl
			createId={ false }
			controlSize={ 1 }
		>
			<Label htmlFor={ htmlId }  className={TableListStyle.WhiteSpaceNormal}>
				{ label }
			</Label>
			<StyledTextControl
				placeholder="User meta field/key"
				id={ htmlId }
				value={ value }
				onChange={ onChange }
			/>
		</RowControl>
	</StyledFlex>;
}

export default UserMetaRowItem;