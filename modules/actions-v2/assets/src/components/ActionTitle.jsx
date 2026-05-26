import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { styled } from '@linaria/react';
import { Button } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { STORE_NAME } from '../store';
import getActionDisplayName from '../utils/getActionDisplayName';

const ActionTitleWrap = styled.div`
	flex: 1;
	min-width: 0;
`;

const ActionButton = styled.button`
	display: block;
	width: 100%;
	padding: 0;
	border: none;
	background: transparent;
	text-align: left;
	cursor: text;
`;

const ActionLabel = styled.span`
	display: block;
	font-size: 13px;
	line-height: 1.4;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ActionNameInput = styled.input`
	width: 100%;
	min-height: 30px;
	padding: 0 8px;
	border: 1px solid #949494;
	border-radius: 2px;
	font-size: 13px;
	line-height: 1.4;
`;

function ActionNameEditor( {
	fallbackLabel,
	nextName,
	setNextName,
	commitName,
	setIsEditing,
	previousNameRef,
	isEscapePressedRef,
	inputRef,
} ) {
	return <ActionNameInput
		ref={ inputRef }
		value={ nextName }
		onChange={ event => setNextName( event.target.value ) }
		onBlur={ () => {
			if ( isEscapePressedRef.current ) {
				isEscapePressedRef.current = false;
				return;
			}

			commitName();
		} }
		onKeyDown={ event => {
			if ( 'Enter' === event.key ) {
				event.preventDefault();
				commitName();
			}

			if ( 'Escape' === event.key ) {
				event.preventDefault();
				isEscapePressedRef.current = true;
				setNextName( previousNameRef.current );
				setIsEditing( false );
			}
		} }
		aria-label={ __( 'Action display name', 'jet-form-builder' ) }
		placeholder={ fallbackLabel }
		type="text"
		maxLength={ 255 }
		spellCheck={ false }
	/>;
}

function ActionNameButton( { displayName, startEditing } ) {
	return <ActionButton
		type="button"
		onClick={ startEditing }
		aria-label={ sprintf(
			/* translators: %s - current action display name */
			__( 'Rename action: %s', 'jet-form-builder' ),
			displayName,
		) }
	>
		<ActionLabel title={ displayName }>
			{ displayName }
		</ActionLabel>
	</ActionButton>;
}

function UnsupportedActionButton( { deleteAction, index } ) {
	return <Button
		isDestructive
		variant="secondary"
		onClick={ () => deleteAction( index ) }
	>
		{ __( 'Action is not registered. Delete', 'jet-form-builder' ) }
	</Button>;
}

function useActionRename( action, actionFromList, updateActionObj ) {
	const [ isEditing, setIsEditing ] = useState( false );
	const [ nextName, setNextName ] = useState( '' );
	const inputRef = useRef( null );
	const previousNameRef = useRef( '' );
	const isEscapePressedRef = useRef( false );
	const fallbackLabel = actionFromList?.label ?? '';
	const displayName = getActionDisplayName( action, fallbackLabel );

	useEffect( () => {
		if ( isEditing ) {
			inputRef.current?.focus();
			inputRef.current?.select();
			return;
		}

		setNextName( displayName );
	}, [ displayName, isEditing ] );

	return {
		displayName,
		fallbackLabel,
		inputRef,
		isEditing,
		isEscapePressedRef,
		nextName,
		previousNameRef,
		setIsEditing,
		setNextName,
		startEditing: () => {
			previousNameRef.current = displayName;
			setNextName( displayName );
			setIsEditing( true );
		},
		commitName: () => {
			const trimmedName = nextName.trim();
			const normalizedName = (
				!trimmedName || trimmedName === fallbackLabel
			)
				? ''
				: trimmedName;

			if ( action.editor_name !== normalizedName ) {
				updateActionObj( action.id, { editor_name: normalizedName } );
			}

			setIsEditing( false );
		},
	};
}

function ActionTitle( { onEditingChange = () => {} } ) {
	const { deleteAction, updateActionObj } = useActionsEdit();
	const { action, index } = useLoopedAction();

	const actionFromList = useSelect(
		select => select( STORE_NAME ).getAction( action.type ),
		[ action.type ],
	);

	const renameProps = useActionRename(
		action,
		actionFromList,
		updateActionObj,
	);

	useEffect( () => {
		onEditingChange( renameProps.isEditing );
	}, [ renameProps.isEditing ] );

	if ( !actionFromList ) {
		return <UnsupportedActionButton
			deleteAction={ deleteAction }
			index={ index }
		/>;
	}

	return <ActionTitleWrap>
		{ renameProps.isEditing && <ActionNameEditor
			fallbackLabel={ renameProps.fallbackLabel }
			nextName={ renameProps.nextName }
			setNextName={ renameProps.setNextName }
			commitName={ renameProps.commitName }
			setIsEditing={ renameProps.setIsEditing }
			previousNameRef={ renameProps.previousNameRef }
			isEscapePressedRef={ renameProps.isEscapePressedRef }
			inputRef={ renameProps.inputRef }
		/> }

		{ !renameProps.isEditing && <ActionNameButton
			displayName={ renameProps.displayName }
			startEditing={ renameProps.startEditing }
		/> }
	</ActionTitleWrap>;
}

// backward compatibility
window.JetFBComponents             = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionTitle = ActionTitle;

export default ActionTitle;
