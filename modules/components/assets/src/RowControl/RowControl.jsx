import { styled } from '@linaria/react';
import { Flex } from '@wordpress/components';
import ClearBaseControlStyle from '../ClearBaseControlStyle';
import Label from '../Label/Label';
import { useInstanceId } from '@wordpress/compose';
import { forwardRef } from '@wordpress/element';
import RowControlEndStyle from './RowControlEndStyle';
import RowControlStartStyle from './RowControlStartStyle';

function UnForwardedRowControl( {
	children,
	className,
	createId = true,
	controlSize = 3,
	...props
}, ref ) {
	const htmlId = useInstanceId(
		UnForwardedRowControl,
		'jfb-control',
		createId ? '' : '1',
	);

	return <Flex
		ref={ ref }
		className={ [ className, ClearBaseControlStyle ].join( ' ' ) }
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
    & > ${ Label }, & > .${ RowControlStartStyle } {
        flex: 1;
    }

    & > .components-base-control,
    & > .${ RowControlEndStyle },
    & > .components-form-token-field {
        flex: ${ ( { controlSize = 3 } ) => controlSize };
    }
`;

export default RowControl;
