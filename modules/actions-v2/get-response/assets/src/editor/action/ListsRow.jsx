import { Flex, SelectControl } from '@wordpress/components';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';
import { cx } from '@linaria/core';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

function ListsRow( { settings, onChangeSettingObj } ) {

	const lists = useSelect( select => (
		select( STORE_NAME ).getLists()
	), [] );

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'list_id' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<RequiredLabel htmlFor={ id }>
				{ __( 'List', 'jet-form-builder' ) }
			</RequiredLabel>
			<Flex
				className={ cx(
					RowControlEndStyle,
					hasError && ControlWithErrorStyle,
				) }
				direction="column"
			>
				{ hasError && <IconText>
					{ __(
						'Please fill this required field',
						'jet-form-builder',
					) }
				</IconText> }
				<SelectControl
					id={ id }
					value={ settings.list_id }
					onChange={ list_id => onChangeSettingObj(
						{ list_id },
					) }
					onBlur={ () => setShowError( true ) }
					options={ [
						{
							value: '',
							label: __(
								'-- Select list --',
								'jet-form-builder',
							),
						},
						...lists,
					] }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</Flex>
		</> }
	</RowControl>;
}

export default ListsRow;