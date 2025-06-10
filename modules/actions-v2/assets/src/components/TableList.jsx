/* eslint-disable import/no-extraneous-dependencies */
import {
	RequiredLabel,
	Label,
	IconText,
	RowControl, ControlWithErrorStyle,
	Help,
	TableListStyle,
} from 'jet-form-builder-components';
import { Flex, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cx } from '@linaria/core';
import { useInstanceId } from '@wordpress/compose';
import { styled } from '@linaria/react';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

const StyledFlex = styled( Flex )`
    padding: 1em;
`;

function TableList( {
	tag,
	label,
	help,
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

	const htmlId = useInstanceId( TableList, 'jfb-field-map' );

	return <StyledFlex className={TableListStyle.Td} direction="column" gap={ 3 }>
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
			<div className={TableListStyle.TdItem}>
				<LabelComponent htmlFor={ htmlId }  className={TableListStyle.WhiteSpaceNormal}>
					{ label }
				</LabelComponent>
				{ Boolean( help ) && <Help className={TableListStyle.WhiteSpaceNormal}>
					{ help }
				</Help> }
			</div>

			<SelectControl
				className={TableListStyle.TdItem}
				id={ htmlId }
				value={ value }
				onChange={ onChange }
				onBlur={ () => setShowError( true ) }
				options={ formFields }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</RowControl>

	</StyledFlex>;
}

export default TableList;