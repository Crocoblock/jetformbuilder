/* eslint-disable import/no-extraneous-dependencies */
import getItemByName from '../helpers/getItemByName';
import { Flex, TextControl, Tooltip } from '@wordpress/components';
import { Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';
import { Label, ClearBaseControlStyle } from 'jet-form-builder-components';

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

	return <Flex direction="column">
		<Flex>
			<Label htmlFor={ message.id }>{ current.label }</Label>
			<Flex style={ { width: 'auto' } }>
				{ message.blocks.map( block => (
					<Tooltip
						key={ 'message_block_item' + block.title }
						text={ block.title }
						delay={ 200 }
						position={ 'top center' }
					>
						<StyledIcon icon={ block.icon }/>
					</Tooltip>
				) ) }
			</Flex>
		</Flex>
		<TextControl
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
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	</Flex>;
}

export default ValidationMetaMessage;