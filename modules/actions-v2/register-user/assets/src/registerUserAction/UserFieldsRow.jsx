/* eslint-disable import/no-extraneous-dependencies */
import { __ } from '@wordpress/i18n';
import {
	ClearBaseControlStyle,
	Help,
	Label,
	RowControl,
	RowControlEndStyle,
	TableListStyle,
} from 'jet-form-builder-components';
import {Card, Flex, FlexItem, SelectControl} from '@wordpress/components';
import { cx } from '@linaria/core';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import { TableList } from 'jet-form-builder-actions';
import userFields from './userFields';

function UserFieldsRow( { getMapField, setMapField } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <div className={ TableListStyle.Wrap }>
		<Label className={TableListStyle.Label} >
			{ __( `Fields map`, 'jet-form-builder' ) }
		</Label>
		<Help className={TableListStyle.WhiteSpaceNormal}>
			Map your form fields to standard user’s fields. This links the form input to user profile data, so values are saved in the user’s account.
		</Help>

		<Card className={TableListStyle.Card}>
			<Flex className={TableListStyle.Th}>
				<FlexItem className={TableListStyle.ThItem}>
					{ __( `Form Fields`, 'jet-form-builder' ) }
				</FlexItem>
				<FlexItem className={TableListStyle.ThItem} >
					{ __( `User Meta Fields`, 'jet-form-builder' ) }
				</FlexItem>
			</Flex>
				{ userFields.map( ( field ) => <TableList
					key={ field.value }
					tag={ field.value }
					label={ field.label }
					help={ field.help }
					isRequired={ field.required }
					formFields={ formFields }
					value={ getMapField( { name: field.value } ) }
					onChange={ value => setMapField(
						{ nameField: field.value, value },
					) }
				/> ) }
		</Card>
	</div>;
}

export default UserFieldsRow;
