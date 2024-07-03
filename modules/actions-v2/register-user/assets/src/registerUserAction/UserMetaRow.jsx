import { __ } from '@wordpress/i18n';
import {
	Label,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { Flex } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import UserMetaRowItem from './UserMetaRowItem';

function UserFieldsRow( { getMapField, setMapField } ) {

	const formFields = useFields( { withInner: false } );

	return <RowControl createId={ false }>
		<Label>{ __( 'User Meta', 'jet-form-builder' ) }</Label>
		<Flex
			className={ cx( RowControlEndStyle ) }
			direction="column"
			gap={ 4 }
		>
			{ formFields.map( ( field ) => <UserMetaRowItem
				key={ field.value }
				label={ field.label }
				value={ getMapField( {
					source: 'meta_fields_map',
					name: field.value,
				} ) }
				onChange={ newVal => setMapField( {
					nameField: field.value,
					value: newVal,
					source: 'meta_fields_map',
				} ) }
			/> ) }
		</Flex>
	</RowControl>;
}

export default UserFieldsRow;
