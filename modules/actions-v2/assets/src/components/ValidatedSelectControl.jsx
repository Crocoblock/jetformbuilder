/* eslint-disable import/no-extraneous-dependencies */
import {
	RequiredLabel,
	Label,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { SelectControl } from '@wordpress/components';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

function ValidatedTextControl( {
	value,
	onChange,
	label,
	help = '',
	options,
	required = false,
	isErrorSupported = () => false,
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
			<RowControlEnd hasError={ hasError }>
				<SelectControl
					id={ id }
					value={ value }
					onChange={ onChange }
					onBlur={ () => setShowError( true ) }
					help={ help }
					options={ options }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default ValidatedTextControl;