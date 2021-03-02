const { __ } = wp.i18n;

const {
	TextControl,
	BaseControl,
	Button,
} = wp.components;

const {
	useState
} = wp.element;

export const RequestButton = ( {
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
								   }
							   } ) => {

	const defaultValidate = () => {
		return jQuery.ajax( { url: ajaxurl, type: 'POST', data: ajaxArgs } );
	};

	const request = () => {
		onLoading();

		defaultValidate()
		.done( response => response.success ? onSuccessRequest( response ) : onFailRequest() )
		.fail( () => onFailRequest() );
	};

	return <Button
		key={ 'validate_api_key' }
		isPrimary
		onClick={ request }
		className={ className }
	>
		{ children && children }
		{ label }
	</Button>;
};
