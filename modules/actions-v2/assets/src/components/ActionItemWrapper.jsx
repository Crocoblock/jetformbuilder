/* eslint-disable import/no-extraneous-dependencies */
import useLoopedAction from '../hooks/useLoopedAction';
import { Card, Tooltip } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import useActionErrors from '../hooks/useActionErrors';
import { __ } from '@wordpress/i18n';

const MarginLessCard = styled( Card )`
    margin-bottom: unset;
`;

const errorStyle = css`
    && {
        box-shadow: #cc1818 0 0 0 2px;
    }
`;

const currentStyle = css`
    animation: show-current 2s infinite;

    @keyframes show-current {
        50% {
            box-shadow: rgba(3, 102, 214, 0.3) 0 0 0 3px;
        }
    }
`;

const disabledStyle = css`
    background-image: repeating-linear-gradient(-45deg, #ffffff75 0 20px, #d5d5d57d 20px 40px);
`;

function ActionItemWrapper( { className = '', ...props } = {} ) {
	const { action } = useLoopedAction();

	const { currentAction, isFixed } = useSelect( select => (
			{
				currentAction: select( 'jet-forms/actions' ).getCurrentAction(),
				isFixed: select( 'jet-forms/actions' ).isFixed( action.type ),
			}
		),
		[ action.type ],
	);

	const errors = useActionErrors( action );

	const isExecute = (
		action.is_execute ?? true
	);

	const errorText = (
		Boolean( errors.length )
		? __(
			'This action isn\'t set up properly. Please check the settings of the action',
			'jet-form-builder',
		)
		: ''
	);

	return <Tooltip text={ errorText } delay={ 200 } placement="top">
		<MarginLessCard
			elevation={ 2 }
			size={ 'extraSmall' }
			className={ cx(
				'jet-form-action',
				className,
				!isFixed && 'draggable',
				!isExecute && disabledStyle,
				currentAction?.id === action.id && currentStyle,
				errors.length && errorStyle,
			) }
			{ ...props }
		/>
	</Tooltip>;
}

// backward compatibility
window.JetFBComponents                   = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionItemWrapper = ActionItemWrapper;

export default ActionItemWrapper;