import useLoopedAction from '../hooks/useLoopedAction';
import { Card } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { styled } from '@linaria/react';

const MarginLessCard = styled( Card )`
    margin-bottom: unset;
`;

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

	return <MarginLessCard
		elevation={ 2 }
		size={ 'extraSmall' }
		className={ wrapper.join( ' ' ) }
		{ ...props }
	/>;
}

export default ActionItemWrapper;