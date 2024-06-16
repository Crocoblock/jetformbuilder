import useLoopedAction from '../hooks/useLoopedAction';
import { Card } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { styled } from '@linaria/react';

const MarginLessCard = styled( Card )`
    margin-bottom: unset;
`;

function ActionItemWrapper( { className = '', ...props } = {} ) {
	const { action } = useLoopedAction();

	const { currentAction, isFixed } = useSelect( select => (
			{
				currentAction: select( 'jet-forms/actions' ).getCurrentAction(),
				isFixed: select( 'jet-forms/actions' ).isFixed( action.type ),
			}
		),
		[],
	);

	const wrapper   = [
		className,
		'jet-form-action',
		isFixed ? 'not-draggable' : '',
	];
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