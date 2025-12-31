/* eslint-disable import/no-extraneous-dependencies */
import getItemByName from '../helpers/getItemByName';
import { Flex, Tooltip } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';
import {
	Label,
	ClearBaseControlStyle,
	StyledTextControl,
	StyledFlexControl,
} from 'jet-form-builder-components';

const StyledIcon = styled( Icon )`
    svg {
        height: 24px;
        width: 24px;
    }
`;

function ValidationMetaMessage( {
	message,
	update,
	value = null,
	help = null,
} ) {
	const current = getItemByName( message.id );

	return <StyledFlexControl direction="column">
		<Flex>
			<Label htmlFor={ message.id }>{ current.label }</Label>
			<Flex style={ { width: 'auto' } }>
				{ message.blocks.map( block => (
					<Tooltip
						key={ 'message_block_item' + block.title }
						text={ block.title }
						delay={ 200 }
						placement="top"
					>
						<StyledIcon icon={ block.icon }/>
					</Tooltip>
				) ) }
			</Flex>
		</Flex>
		<StyledTextControl
			className={ ClearBaseControlStyle }
			id={ message.id }
			help={ help ?? current?.help }
			value={ value ?? current?.initial }
			onChange={ messageText => update( prev => (
				{
					...prev,
					[ message.id ]: messageText,
				}
			) ) }
		/>
	</StyledFlexControl>;
}

export default ValidationMetaMessage;