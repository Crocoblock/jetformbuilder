/* eslint-disable import/no-extraneous-dependencies */
import { __ } from '@wordpress/i18n';
import {
	Help,
	Label,
	TableListStyle,
} from 'jet-form-builder-components';
import {SelectControl} from '@wordpress/components';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import { TableListContainer, TableListHead, TableListRow } from 'jet-form-builder-actions';
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

		<TableListContainer>
			<TableListHead
				columns={ [
					__( `User Meta Fields`, 'jet-form-builder' ),
					__( `Form Fields`, 'jet-form-builder' )
				] }
			/>
			{ userFields.map( ( field ) => <TableListRow
				key={ field.value }
				tag={ field.value }
				label={ field.label }
				help={ field.help }
				isRequired={ field.required }
			>
				{ ( { setShowError, htmlId } ) => ( <SelectControl
					id={ htmlId }
					onBlur={ () => setShowError( true ) }
					options={ formFields }
					formFields={ formFields }
					value={ getMapField( { name: field.value } ) }
					onChange={ value => setMapField(
						{ nameField: field.value, value },
					) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/> ) }
			</TableListRow> ) }
		</TableListContainer>
	</div>;
}

export default UserFieldsRow;
