import {
	Label, LabelWithActions,
	RowControl,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

const {
	      MacrosFields,
      } = JetFBComponents;

function EmailReplyToRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'Reply to Email Address', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						reply_to_email: (
							settings.reply_to_email ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<StyledTextControl
				id={ id }
				value={ settings.reply_to_email }
				onChange={ reply_to_email => onChangeSettingObj(
					{ reply_to_email },
				) }
			/>
		</> }
	</RowControl>;
}

export default EmailReplyToRow;