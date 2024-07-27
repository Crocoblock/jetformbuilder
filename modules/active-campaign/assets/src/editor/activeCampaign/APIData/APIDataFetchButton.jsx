import { cloud } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../../store';

function APIDataFetchButton( { apiKey, apiUrl } ) {
	const { fetchApiData } = useDispatch( STORE_NAME );

	const isFetchLoading = useSelect(
		select => select( STORE_NAME ).isFetchLoading(),
		[],
	);

	return <Button
		onClick={ () => fetchApiData( { apiKey, apiUrl } ) }
		disabled={ isFetchLoading }
		isBusy={ isFetchLoading }
		icon={ cloud }
		variant="secondary"
		__next40pxDefaultSize
	>
		{ __( 'Fetch', 'jet-form-builder' ) }
	</Button>;
}

export default APIDataFetchButton;