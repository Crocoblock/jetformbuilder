/* eslint-disable import/no-extraneous-dependencies */
import useLoopedAction from '../hooks/useLoopedAction';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';
import { styled } from '@linaria/react';
import { shuffle } from '@wordpress/icons';

const StyledButton = styled( Button )`
    &:not([data-conditions-count="0"])::after {
        content: attr(data-conditions-count);
        position: absolute;
        font-size: 1.2em;
        background-color: var(--wp-admin-theme-color);
        color: #fff;
        padding: 2px 4px;
        border-radius: 6px;
        top: 0;
        transform: translateY(-50%);
        font-family: monospace;
        line-height: normal;
    }
`;

function EditActionConditionsButton() {
	const { action, index } = useLoopedAction();

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions' );

	return <StyledButton
		size="small"
		icon={ shuffle }
		data-conditions-count={ action?.conditions?.length ?? 0 }
		label={ __(
			'Edit Conditions & Events',
			'jet-form-builder',
		) }
		onClick={ () => {
			setCurrentAction( { ...action, index } );
			setMeta( { index, modalType: 'conditions' } );
		} }
	/>;
}

// backward compatibility
window.JetFBComponents                            = window?.JetFBComponents ??
	{};
window.JetFBComponents.EditActionConditionsButton = EditActionConditionsButton;

export default EditActionConditionsButton;