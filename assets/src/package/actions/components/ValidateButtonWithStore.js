import FetchAjaxButton from './FetchAjaxButton';

const {
	      useSelect,
      } = wp.data;

function ValidateButtonWithStore( props ) {

	const currentAction = useSelect( ( select ) => {
		return select( 'jet-forms/actions' ).getCurrentAction();
	}, [] );

	return <FetchAjaxButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

export default ValidateButtonWithStore;