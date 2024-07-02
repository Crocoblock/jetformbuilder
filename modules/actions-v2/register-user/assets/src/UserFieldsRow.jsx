import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	Label,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { Flex } from '@wordpress/components';
import { cx } from '@linaria/core';

const userFields = [
	{
		value: 'login',
		label: __( 'User Login', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'email',
		label: __( 'Email', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'password',
		label: __( 'Password', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'confirm_password',
		label: __( 'Confirm Password', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'first_name',
		label: __( 'First Name', 'jet-form-builder' ),
	},
	{
		value: 'last_name',
		label: __( 'Last Name', 'jet-form-builder' ),
	},
	{
		value: 'user_url',
		label: __( 'User URL', 'jet-form-builder' ),
	},
];

function UserFieldsRow( { getMapField, setMapField } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <RowControl createId={false}>
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
