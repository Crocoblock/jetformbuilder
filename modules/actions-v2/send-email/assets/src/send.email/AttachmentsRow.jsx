import {
	FormLabeledTokenField,
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function AttachmentsRow( { settings, onChangeSettingObj } ) {
	const formFields = useFields( { withInner: false } );

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Attachments', 'jet-form-builder' ) }
		</Label>
		<FormLabeledTokenField
			label={ __( 'Add form field with attachment', 'jet-form-builder' ) }
			value={ settings.attachments }
			suggestions={ formFields }
			onChange={ tokens => onChangeSettingObj(
				{ attachments: [ ...new Set( tokens ) ] } ) }
			__experimentalExpandOnFocus
		/>
	</RowControl>;
}

export default AttachmentsRow;