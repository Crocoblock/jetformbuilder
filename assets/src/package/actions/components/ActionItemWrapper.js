import useLoopedAction from '../hooks/useLoopedAction';

const {
	      useSelect,
      } = wp.data;

const {
	      Card,
      } = wp.components;

function ActionItemWrapper( props = {} ) {
	const { action } = useLoopedAction();

	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);

	const wrapper   = [ 'jet-form-action' ];
	const isExecute = (
		action.is_execute ?? true
	);

	if ( !isExecute ) {
		wrapper.push( 'is-disabled' );
	}

	if ( currentAction?.id === action.id ) {
		wrapper.push( 'is-current' );
	}

	return <Card
		elevation={ 2 }
		size={ 'extraSmall' }
		className={ wrapper }
		{ ...props }
	/>;
}

export default ActionItemWrapper;