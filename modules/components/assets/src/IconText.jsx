import { styled } from '@linaria/react';
import { Flex } from '@wordpress/components';
import { Icon } from '@wordpress/icons';

const StyledFlex = styled( Flex )`
    color: #cc1818;

    && {
        width: auto;
    }
`;

const errorIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
	<path
		d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
		stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
		strokeLinejoin="round"/>
</svg>;

function IconText( { children, icon, ...props } ) {
	return <StyledFlex justify="flex-start" { ...props }>
		<Icon size={ 24 } icon={ icon ?? errorIcon }/>
		{ children }
	</StyledFlex>;
}

export default IconText;