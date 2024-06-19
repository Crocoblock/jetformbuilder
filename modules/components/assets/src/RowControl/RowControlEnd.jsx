import RowControlEndStyle from './RowControlEndStyle';

function RowControlEnd( { className, ...props } ) {
	return <div
		className={ [ className, RowControlEndStyle ].join( ' ' ) }
		{ ...props }
	/>;
}

export default RowControlEnd;