import useActionsEdit from '../hooks/useActionsEdit';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __experimentalGrid as Grid } from '@wordpress/components';
import ActionGridItem from './ActionGridItem';
import BaseAction from '../abstract/BaseAction';

function AddActionButton() {
	const { actions, setActions } = useActionsEdit();
	const { openActionSettings }  = useDispatch( 'jet-forms/actions' );

	const [ showModal, setShowModal ] = useState( false );

	const actionTypes = useSelect( select => (
		select( 'jet-forms/actions' ).getActions()
	), [] );

	const onAddAction = ( event, action ) => {
		if ( event.target?.classList?.contains?.(
			'components-external-link' )
		) {
			return;
		}
		const newAction = {
			...new BaseAction( { type: action.type } ),
		};

		setActions( [
			...actions,
			newAction,
		] );
		setShowModal( false );
		openActionSettings( {
			item: newAction,
			index: actions.length,
		} );
	};

	return <>
		<Button
			isPrimary
			onClick={ () => setShowModal( true ) }
		>
			{ __( '+ New Action', 'jet-form-builder' ) }
		</Button>
		{ showModal && <Modal
			title={ __( 'Add new action', 'jet-form-builder' ) }
			onRequestClose={ () => setShowModal( false ) }
		>
			<Grid columns={ 3 }>
				{ actionTypes.map( action => (
					<ActionGridItem
						key={ action.type }
						action={ action }
						onClick={ event => onAddAction( event, action ) }
					/>
				) ) }
			</Grid>
		</Modal> }
	</>;
}

export default AddActionButton;