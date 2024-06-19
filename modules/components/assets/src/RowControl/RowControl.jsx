import { styled } from '@linaria/react';
import { Flex } from '@wordpress/components';
import ClearBaseControl from '../ClearBaseControlStyle';
import Label from '../Label/Label';
import { useInstanceId } from '@wordpress/compose';
import { forwardRef } from '@wordpress/element';
import RowControlEndStyle from './RowControlEndStyle';

function UnForwardedRowControl( {
	children,
	className,
	createId = true,
	...props
}, ref ) {
	const htmlId = useInstanceId(
		UnForwardedRowControl,
		'jfb-control',
		createId ? '' : '1',
	);

	return <Flex
		ref={ ref }
		className={ [ className, ClearBaseControl ].join( ' ' ) }
		gap={ 2 }
		align="flex-start"
		{ ...props }
	>
		{ 'function' === typeof children
		  ? children( { id: htmlId } )
		  : children }
	</Flex>;
}

const UnStyledRowControl = forwardRef( UnForwardedRowControl );

const RowControl = styled( UnStyledRowControl )`
    ${ Label } {
        flex: 1;
    }

    .components-base-control, .${ RowControlEndStyle } {
        flex: 3;
    }
`;

export default RowControl;
