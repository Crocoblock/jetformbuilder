import {
	LabelWithActions, RequiredLabel,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextareaControl } from '@wordpress/components';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

const {
	      MacrosFields,
      } = JetFBComponents;

function ContentRow( { settings, onChangeSettingObj } ) {
	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'content' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<RequiredLabel htmlFor={ id }>
					{ __( 'Content', 'jet-form-builder' ) }
				</RequiredLabel>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						content: (
							settings.content ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<RowControlEnd hasError={ hasError }>
				<TextareaControl
					id={ id }
					value={ settings.content }
					onChange={ content => onChangeSettingObj(
						{ content },
					) }
					onBlur={ () => setShowError( true ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default ContentRow;