import { useInstanceId } from '@wordpress/compose';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
	StyledSelectControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

function SelectListRow( { settings, onChangeSettingObj } ) {
	const lists = useSelect( select => (
		select( STORE_NAME ).getLists()
	), [] );

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'list_id' === error?.property,
	} );

	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<RequiredLabel htmlFor={ id }>
			{ __( 'Audience', 'jet-form-builder' ) }
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
			<StyledSelectControl
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
							'-- Select list / audience --',
							'jet-form-builder',
						),
					},
					...lists,
				] }
			/>
		</Flex>
	</RowControl>;
}

export default SelectListRow;
