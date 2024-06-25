import { cx } from '@linaria/core';
import RowControlStartStyle from './RowControlStartStyle';

function RowControlStart( { className, ...props } ) {
	return <div
		className={ cx( className, RowControlStartStyle ) }
		{ ...props }
	/>;
}

export default RowControlStart;