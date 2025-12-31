import {
	Label, LabelWithActions,
	RowControl,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

const {
	      MacrosFields,
      } = JetFBComponents;

function FromNameRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'From Name', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						from_name: (
							settings.from_name ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<StyledTextControl
				id={ id }
				value={ settings.from_name }
				onChange={ val => onChangeSettingObj(
					{ from_name: val },
				) }
				help={ __(
					'Specify the name that will appear as the sender of the email. You can use form field macros to insert the values of form fields as part of the name. To add macros, use the wrench icon to the right of the current option name.',
					'jet-form-builder',
				) }
			/>
		</> }
	</RowControl>;
}

export default FromNameRow;