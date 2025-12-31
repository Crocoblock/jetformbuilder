import { cloud } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { StyledButtonControl } from 'jet-form-builder-components';
import { STORE_NAME } from '../../store';

function APIDataFetchButton( { apiKey, apiUrl } ) {
	const { fetchApiData } = useDispatch( STORE_NAME );

	const isFetchLoading = useSelect(
		select => select( STORE_NAME ).isFetchLoading(),
		[],
	);

	return <StyledButtonControl
		onClick={ () => fetchApiData( { apiKey, apiUrl } ) }
		disabled={ isFetchLoading }
		isBusy={ isFetchLoading }
		icon={ cloud }
		variant="secondary"
	>
		{ __( 'Fetch', 'jet-form-builder' ) }
	</StyledButtonControl>;
}

export default APIDataFetchButton;