import { withCurrentAction } from '../helpers/hooks/hooks-helper';
import FetchAjaxButton from './fetch-ajax-button';

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;


function ValidateButtonWithStore( {
	currentAction,
	...props
} ) {

	return <FetchAjaxButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

export default compose(
	withSelect( withCurrentAction ),
)( ValidateButtonWithStore );