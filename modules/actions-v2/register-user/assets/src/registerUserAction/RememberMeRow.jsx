import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
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
			<SelectControl
				id={ id }
				value={ settings.remember_me_field }
				options={ formFields }
				onChange={ remember_me_field => onChangeSettingObj(
					{ remember_me_field } ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default RememberMeRow;