/* eslint-disable import/no-extraneous-dependencies */
import { cx } from '@linaria/core';
import ControlWithErrorStyle from '../ControlWithErrorStyle';
import RowControlEndStyle from './RowControlEndStyle';
import IconText from '../IconText';
import { __ } from '@wordpress/i18n';
import { Flex } from '@wordpress/components';

function RowControlEnd( {
	children,
	hasError = false,
	showDefaultNotice = true,
	errorText="",
	className,
	...props
} ) {

	const defaultErrorText = __(
		'Please fill this required field',
		'jet-form-builder',
	)

	let newErrorText = '';

	if ( errorText.length ) {
		newErrorText = __(
			errorText,
			'jet-form-builder',
		)
	}

	return <Flex
		className={ cx(
			RowControlEndStyle,
			hasError && ControlWithErrorStyle,
			className,
		) }
		direction="column"
		{ ...props }
	>
		{ hasError && showDefaultNotice && <IconText>
			{ newErrorText.length ? newErrorText : defaultErrorText }
		</IconText> }
		{ children }
	</Flex>;
}

export default RowControlEnd;