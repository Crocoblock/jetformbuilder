/* eslint-disable import/no-extraneous-dependencies */
import {
	RequiredLabel,
	Label,
	IconText,
	RowControl, ControlWithErrorStyle,
} from 'jet-form-builder-components';
import { Card, Flex, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cx } from '@linaria/core';
import { useInstanceId } from '@wordpress/compose';
import { styled } from '@linaria/react';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

const StyledFlex = styled( Flex )`
    padding: 1em;
`;

function FieldsMapField( {
	tag,
	label,
	isRequired,
	formFields,
	value,
	onChange,
} ) {
	const LabelComponent = isRequired ? RequiredLabel : Label;

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => (
			`field_${ tag }` === error?.property
		),
	} );

	const htmlId = useInstanceId( FieldsMapField, 'jfb-field-map' );

	return <Card elevation={ 2 }>
		<StyledFlex direction="column" gap={ 3 }>
			{ hasError && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			<RowControl
				createId={ false }
				controlSize={ 1 }
				className={ cx(
					hasError && ControlWithErrorStyle,
				) }
			>
				<LabelComponent htmlFor={ htmlId }>
					{ label }
				</LabelComponent>
				<SelectControl
					id={ htmlId }
					value={ value }
					onChange={ onChange }
					onBlur={ () => setShowError( true ) }
					options={ formFields }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</RowControl>
		</StyledFlex>
	</Card>;
}

export default FieldsMapField;