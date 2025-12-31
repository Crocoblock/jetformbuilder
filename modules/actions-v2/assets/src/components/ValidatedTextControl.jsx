/* eslint-disable import/no-extraneous-dependencies */
import {
	Label,
	RequiredLabel,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { StyledTextControl } from 'jet-form-builder-components';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

function ValidatedTextControl( {
	value,
	onChange,
	label,
	help,
	isErrorSupported = () => false,
	errorText = "",
	required = false,
	disabled = false
} ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: isErrorSupported,
	} );

	const LabelComponent = required ? RequiredLabel : Label;

	return <RowControl>
		{ ( { id } ) => <>
			<LabelComponent htmlFor={ id }>
				{ label }
			</LabelComponent>
			<RowControlEnd hasError={ hasError } errorText={ errorText }>
				<StyledTextControl
					id={ id }
					value={ value }
					onChange={ onChange }
					onBlur={ () => setShowError( true ) }
					help={ help }
					disabled={ disabled }
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default ValidatedTextControl;