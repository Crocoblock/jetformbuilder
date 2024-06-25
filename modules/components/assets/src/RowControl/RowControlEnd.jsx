import RowControlEndStyle from './RowControlEndStyle';
import { cx } from '@linaria/core';

function RowControlEnd( { className, ...props } ) {
	return <div
		className={ cx( className, RowControlEndStyle ) }
		{ ...props }
	/>;
}

export default RowControlEnd;