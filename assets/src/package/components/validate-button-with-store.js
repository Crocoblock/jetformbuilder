import RequestButton from './request-button';
import { withLoadingSelect, withLoadingDispatch, withCurrentAction } from '../helpers/hooks/hooks-helper';

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;


function ValidateButtonWithStore( {
	initialLabel = 'Valid',
	label = 'InValid',
	ajaxArgs = {},
	loadingState,
	setLoading,
	currentAction,
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
			setLoading( currentAction.id );
		} }
		onSuccessRequest={ response => {
			setResultSuccess( currentAction.id, response );
		} }
		onFailRequest={ () => setResultFail( currentAction.id ) }
		className={ loadingState.buttonClassName }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default compose(
	withSelect( withLoadingSelect ),
	withSelect( withCurrentAction ),
	withDispatch( withLoadingDispatch ),
)( ValidateButtonWithStore );