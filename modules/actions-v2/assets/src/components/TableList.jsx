/* eslint-disable import/no-extraneous-dependencies */
import {
	RequiredLabel,
	Label,
	IconText,
	RowControl, ControlWithErrorStyle,
	Help,
	TableListStyle,
} from 'jet-form-builder-components';
import { Flex, FlexItem, Card } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cx } from '@linaria/core';
import { useInstanceId } from '@wordpress/compose';
import { styled } from '@linaria/react';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';
import ValidatorProvider from './ValidatorProvider';
import { isValidElement, cloneElement } from '@wordpress/element';

const StyledFlex = styled( Flex )`
    padding: 1em;
`;

function TableListContainer( { children } ) {
	return <Card className={TableListStyle.Card}>
		{ children }
	</Card>;
}

function TableListRowContent( {
	tag,
	label,
	help,
	isRequired,
	children
} ) {
	const LabelComponent = isRequired ? RequiredLabel : Label;

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => (
			`field_${ tag }` === error?.property
		),
	} );

	const htmlId = useInstanceId( TableListRowContent, tag );

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

			<div className={TableListStyle.TdItem}>
				{ typeof children === 'function'
					? children( { setShowError, htmlId } )
					: isValidElement( children )
						? cloneElement( children, { setShowError } )
						: children
				}
			</div>
		</RowControl>
	</StyledFlex>;
}

function TableListRow( {
	tag,
	label,
	help = '',
	isRequired,
	children
} ) {

	return <ValidatorProvider
		isSupported={ error => {
			return `field_${ tag }` === error?.property
		} }
	>
		{ ( { hasError, setShowError } ) => <TableListRowContent
			tag={ tag }
			label={ label }
			help={ help }
			isRequired={ isRequired }
		>
			{ children }
		</TableListRowContent> }
	</ValidatorProvider>;
}

function TableListHead( { columns } ) {
	return (
		<Flex className={TableListStyle.Th}>
			{ columns.map( ( column, index ) => (
				<FlexItem
					key={ `col_${index}` }
					className={TableListStyle.ThItem}
				>
					{ column }
				</FlexItem>
			) ) }
		</Flex>
	);
}

export {
	TableListContainer,
	TableListRow,
	TableListHead
};