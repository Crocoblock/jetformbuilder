/* eslint-disable import/no-extraneous-dependencies */
import { __ } from '@wordpress/i18n';
import {
	Label,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { Flex } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import { FieldsMapField } from 'jet-form-builder-actions';
import userFields from './userFields';

function UserFieldsRow( { getMapField, setMapField } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <RowControl createId={ false }>
		<Label>{ __( 'Fields map', 'jet-form-builder' ) }</Label>
		<Flex
			className={ cx( RowControlEndStyle ) }
			direction="column"
			gap={ 4 }
		>
			{ userFields.map( ( field ) => <FieldsMapField
				key={ field.value }
				tag={ field.value }
				label={ field.label }
				isRequired={ field.required }
				formFields={ formFields }
				value={ getMapField( { name: field.value } ) }
				onChange={ value => setMapField(
					{ nameField: field.value, value },
				) }
			/> ) }
		</Flex>
	</RowControl>;
}

export default UserFieldsRow;
