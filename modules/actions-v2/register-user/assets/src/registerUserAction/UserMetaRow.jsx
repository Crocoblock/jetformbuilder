import { __ } from '@wordpress/i18n';
import {
	Help,
	Label,
	TableListStyle,
	StyledTextControl,
} from 'jet-form-builder-components';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import { TableListContainer, TableListHead, TableListRow } from 'jet-form-builder-actions';


function UserFieldsRow( { getMapField, setMapField,  } ) {

	const formFields = useFields( { withInner: false } );

	return <div createId={ false } className={TableListStyle.Wrap}>
		<Label className={TableListStyle.Label}>
			{ __( `User Meta`, 'jet-form-builder' ) }
		</Label>
		<Help className={TableListStyle.WhiteSpaceNormal}>
			Map form fields to custom user meta fields (e.g., "Phone") not included in WordPress by default.
		</Help>
		<TableListContainer>
			<TableListHead
				columns={ [
					__( `Form Fields`, 'jet-form-builder' ),
					__( `User Meta Fields`, 'jet-form-builder' )
				] }
			/>
			{ formFields.map( ( field ) => <TableListRow
				key={ field.value }
				tag={ field.value }
				label={ field.label }
			>
				{ ( { htmlId } ) => (
					<StyledTextControl
						placeholder="User meta field/key"
						id={ htmlId }
						value={ getMapField( {
							source: 'meta_fields_map',
							name: field.value,
						} ) }
						onChange={ newVal => setMapField( {
							nameField: field.value,
							value: newVal,
							source: 'meta_fields_map',
						} ) }
					/>
				) }
			</TableListRow> ) }
		</TableListContainer>
	</div>;
}

export default UserFieldsRow;
