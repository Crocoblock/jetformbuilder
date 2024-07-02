import RequestButton from './RequestButton';
import withDispatchActionLoading
	from '../hooks/withDispatchActionLoading';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

function FetchApiButton( {
	initialLabel = 'Valid',
	label = 'InValid',
	apiArgs = {},
	loadingState,
	setLoading,
	id,
	setResultSuccess,
	setResultFail,
	onLoading = () => {},
	onSuccess = () => {},
	onFail = () => {},
	isHidden = false,
} ) {

	const getLabel = () => {
		if ( (
			-1 === loadingState.id || loadingState.loading
		) && initialLabel ) {
			return initialLabel;
		}

		return label;
	};

	return <RequestButton
		disabled={ loadingState.loading }
		hasFetched={ loadingState.id }
		label={ getLabel() }
		className={ loadingState.buttonClassName }
		isHidden={ isHidden }
		customRequest={ () => {
			setLoading( id );
			onLoading();

			apiFetch( apiArgs ).then( response => {
				setResultSuccess( id, response );
				onSuccess( response );
			} ).catch( error => {
				setResultFail( id );
				onFail( error );
			} );
		} }
		isDestructive={ loadingState.buttonClassName.includes( 'is-invalid' ) }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.FetchApiButton = FetchApiButton;

export default compose(
	withDispatch( withDispatchActionLoading ),
)( FetchApiButton );