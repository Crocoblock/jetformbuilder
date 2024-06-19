import { Flex } from '@wordpress/components';
import StickyFooter from './StickyFooter';

function StickyModalActions( { className = '', ...props } ) {
	return <Flex
		justify="flex-start"
		className={ (
			StickyFooter + ' ' + className
		).trim() }
		{ ...props }
	/>;
}

export default StickyModalActions;