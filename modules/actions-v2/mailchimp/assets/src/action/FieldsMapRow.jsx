import { __ } from '@wordpress/i18n';
import { STORE_NAME } from '../store';
import { Flex } from '@wordpress/components';
import {
	Label,
	RowControl,
	RowControlEnd,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';
import { useSelect } from '@wordpress/data';
import FieldsMapField from './FieldsMapField';

const {
	      useFields,
      } = JetFBHooks;

function FieldsMapRow( { getMapField, setMapField, listId } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	const fields = useSelect( select => {
		const allFields = select( STORE_NAME ).getFields();

		return allFields?.[ listId ] ?? [];
	}, [ listId ] );

	return <RowControl align="flex-start">
		<Label>{ __( 'Fields map', 'jet-form-builder' ) }</Label>
		<Flex
			className={ cx( RowControlEndStyle ) }
			direction="column"
			gap={ 4 }
		>
			{ fields.map( ( field ) => <FieldsMapField
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

export default FieldsMapRow;
