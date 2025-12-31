import {
	LabelWithActions, RequiredLabel,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextareaControl } from '@wordpress/components';
import { useActionValidatorProvider } from 'jet-form-builder-actions';
import { styled } from '@linaria/react';

const StyledTextareaControl = styled(TextareaControl)`
	.components-base-control__field {
		margin-bottom: 0;
	}
`;

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
				<StyledTextareaControl
					id={ id }
					value={ settings.content }
					onChange={ content => onChangeSettingObj(
						{ content },
					) }
					help={ __(
						'Define the main body of the email. You can use form field macros to insert the values of form fields as part of the content. To add macros, use the wrench icon to the right of the current option name.',
						'jet-form-builder',
					) }
					onBlur={ () => setShowError( true ) }
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default ContentRow;