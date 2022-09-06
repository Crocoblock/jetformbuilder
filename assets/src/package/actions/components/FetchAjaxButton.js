import RequestButton from './RequestButton';
import withSelectActionLoading from '../hooks/withSelectActionLoading';
import withDispatchActionLoading
	from '../hooks/withDispatchActionLoading';

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

function FetchAjaxButton( {
	initialLabel = 'Valid',
	label = 'InValid',
	ajaxArgs = {},
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
		ajaxArgs={ ajaxArgs }
		label={ getLabel() }
		onLoading={ () => {
			setLoading( id );
		} }
		onSuccessRequest={ response => {
			setResultSuccess( id, response );
		} }
		onFailRequest={ () => setResultFail( id ) }
		className={ loadingState.buttonClassName }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default compose(
	withSelect( withSelectActionLoading ),
	withDispatch( withDispatchActionLoading ),
)( FetchAjaxButton );