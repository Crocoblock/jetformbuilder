import RequestButton from './request-button';
import { withDispatchActionLoading, withSelectActionLoading } from '../helpers/hooks/hooks-helper';

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const { apiFetch } = wp;


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
	onFail = () => {}
} ) {

	const getLabel = () => {
		if ( - 1 === loadingState.id && initialLabel ) {
			return initialLabel;
		}

		return label;
	};

	return <RequestButton
		disabled={ loadingState.loading }
		label={ getLabel() }
		className={ loadingState.buttonClassName }
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
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default compose(
	withDispatch( withDispatchActionLoading )
)( FetchApiButton );