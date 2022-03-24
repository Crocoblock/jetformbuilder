const { __ } = wp.i18n;

const {
	Button,
} = wp.components;

const { useEffect } = wp.element;

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
	hasFetched = -1
} ) {

	const defaultRequest = () => {
		onLoading();

		jQuery.ajax( {
			url: ajaxurl,
			type: 'POST',
			data: ajaxArgs,
		} ).done( response => response.success ? onSuccessRequest( response ) : onFailRequest() ).fail( () => onFailRequest() );
	};

	const request = () => {
		if ( false === customRequest ) {
			defaultRequest();
		} else if ( 'function' === typeof customRequest ) {
			customRequest();
		} else {
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
		isPrimary
		onClick={ request }
		className={ className }
	>
		{ children && children }
		{ label }
	</Button>;
}

export default RequestButton;
