import withCurrentAction from '../hooks/withCurrentAction';
import withSelectActionLoading from '../hooks/withSelectActionLoading';
import FetchApiButton from './FetchApiButton';


const { compose } = wp.compose;

const {
	      withSelect,
      } = wp.data;

function ActionFetchButton( {
	currentAction,
	...props
} ) {

	return <FetchApiButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

export default compose(
	withSelect( withCurrentAction ),
	withSelect( withSelectActionLoading ),
)( ActionFetchButton );