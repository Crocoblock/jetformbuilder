import {
	Label, LabelWithActions,
	RowControl,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';


const {
	      MacrosFields,
      } = JetFBComponents;

function SubjectRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'Subject', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						subject: (
							settings.subject ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<StyledTextControl
				id={ id }
				value={ settings.subject }
				onChange={ subject => onChangeSettingObj(
					{ subject },
				) }
				help={ __(
					'Define the subject line of the email. This will appear as the email\'s title when it is received. You can use form field macros to insert the values of form fields as part of the subject. To add macros, use the wrench icon to the right of the current option name.',
					'jet-form-builder',
				) }
			/>
		</> }
	</RowControl>;
}

export default SubjectRow;