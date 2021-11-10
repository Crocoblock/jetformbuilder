const { __ } = wp.i18n;

const {
	Button,
} = wp.components;

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
} ) {

	const defaultValidate = () => {
		return jQuery.ajax( { url: ajaxurl, type: 'POST', data: ajaxArgs } );
	};

	const request = () => {
		onLoading();

		defaultValidate().done( response => response.success ? onSuccessRequest( response ) : onFailRequest() ).fail( () => onFailRequest() );
	};

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
