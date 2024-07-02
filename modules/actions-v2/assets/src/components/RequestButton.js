import { Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

function RequestButton( {
	label,
	ajaxArgs = {},
	onSuccessRequest = () => {
	},
	onFailRequest = () => {
	},
	onLoading = () => {
	},
	className = '',
	children = () => {
	},
	disabled = false,
	customRequest = false,
	isHidden = false,
	hasFetched = -1,
	...buttonProps
} ) {

	className = (
		'string' === typeof className
		? className
		: className.join( ' ' )
	);

	const defaultRequest = () => {
		onLoading();

		jQuery.ajax( {
			url: ajaxurl,
			type: 'POST',
			data: ajaxArgs,
		} ).
			done( response => response.success
			                  ? onSuccessRequest( response )
			                  : onFailRequest() ).
			fail( () => onFailRequest() );
	};

	const request = () => {
		if ( false === customRequest ) {
			defaultRequest();
		}
		else if ( 'function' === typeof customRequest ) {
			customRequest();
		}
		else {
			onFailRequest();
		}
	};

	useEffect( () => {
		if ( isHidden && -1 === hasFetched ) {
			request();
		}
	}, [] );

	if ( isHidden ) {
		return null;
	}

	return <Button
		disabled={ disabled }
		key={ 'validate_api_key' }
		onClick={ request }
		className={ className + ' jet-fb-button line-with-input' }
		variant={ 'secondary' }
		{ ...buttonProps }
	>
		{ children && children }
		{ label }
	</Button>;
}

// backward compatibility
window.JetFBComponents               = window?.JetFBComponents ?? {};
window.JetFBComponents.RequestButton = RequestButton;

export default RequestButton;
