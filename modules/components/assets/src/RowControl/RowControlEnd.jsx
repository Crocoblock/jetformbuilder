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
	className,
	...props
} ) {

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
			{ __(
				'Please fill this required field',
				'jet-form-builder',
			) }
		</IconText> }
		{ children }
	</Flex>;
}

export default RowControlEnd;