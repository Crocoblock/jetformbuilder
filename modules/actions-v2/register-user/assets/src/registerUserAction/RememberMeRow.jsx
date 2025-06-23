import {
	Label,
	RowControl,
	StyledSelectControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function RememberMeRow( { settings, onChangeSettingObj } ) {
	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( '"Remember me" field:', 'jet-form-builder' ) }
			</Label>
			<StyledSelectControl
				id={ id }
				value={ settings.remember_me_field }
				options={ formFields }
				onChange={ remember_me_field => onChangeSettingObj(
					{ remember_me_field } ) }
			/>
		</> }
	</RowControl>;
}

export default RememberMeRow;