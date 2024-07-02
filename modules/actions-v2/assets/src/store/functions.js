import DEFAULT_LOADING_STATE from './loading.state';

export const getLoadingItem = ( additional = {} ) => {
	const item = { ...DEFAULT_LOADING_STATE };
	if ( additional.state ) {
		item.buttonClassName = [ 'jet-form-validate-button', additional.state ];
	}
	return { ...item, ...additional };
};