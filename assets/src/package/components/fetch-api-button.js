import RequestButton from './request-button';
import { withDispatchActionLoading, withSelectActionLoading } from '../helpers/hooks/hooks-helper';

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const { apiFetch } = wp;


function FetchAjaxButton( {
	initialLabel = 'Valid',
	label = 'InValid',
	apiArgs = {},
	loadingState,
	setLoading,
	id,
	setResultSuccess,
	setResultFail,
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

			apiFetch( apiArgs ).then( response => {
				setResultSuccess( id, response );
			} ).catch( () => setResultFail( id ) );
		} }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default compose(
	withSelect( withSelectActionLoading ),
	withDispatch( withDispatchActionLoading ),
)( FetchAjaxButton );