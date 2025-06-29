import {
	Label, LabelWithActions,
	RowControl,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

const {
	      MacrosFields,
      } = JetFBComponents;

function FromAddressRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'From Email Address', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						from_address: (
							settings.from_address ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<StyledTextControl
				id={ id }
				value={ settings.from_address }
				onChange={ val => onChangeSettingObj(
					{ from_address: val },
				) }
				help={ __(
					'Specify the email address that will appear as the sender of the email. You can use form field macros to insert the values of form fields as part of the address. To add macros, use the wrench icon to the right of the current option name.',
					'jet-form-builder',
				) }
			/>
		</> }
	</RowControl>;
}

export default FromAddressRow;