import ActionModal from '../../action-modal/components/ActionModal';
import ActionModalFooterSlotFill
	from '../../action-modal/components/ActionModalFooterSlotFill';
import apiFetch from '@wordpress/api-fetch';
import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

const {
	      rest_add_state: restAddState,
	      rest_delete_state: restDeleteState,
      } = window.jetFormBlockConditions;

const { Fill: ModalFooterFill } = ActionModalFooterSlotFill;

// eslint-disable-next-line max-lines-per-function
const EditCustomRenderStates = ( {
	setShowModal,
	changeCurrentItem,
	currentItem,
} ) => {

	const [ isLoading, setButtonLoading ]   = useState( false );
	const [ isLoadingItem, setItemLoading ] = useState( {} );
	const [ value, setValue ]               = useState( '' );
	let current                             = [
		...currentItem.render_state ?? [],
	];

	const {
		      addRenderState,
		      deleteRenderStates,
	      } = useDispatch( 'jet-forms/block-conditions' );

	const customStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).
			getCustomRenderStates(),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ isLoading, isLoadingItem ],
	);

	const addState = () => {
		setButtonLoading( true );
		restAddState.data = { value };

		apiFetch( restAddState ).then( response => {
			onSuccessAdd( response.state );
			setButtonLoading( false );
			setShowModal( false );

		} ).catch( error => {
			// eslint-disable-next-line no-console
			console.error( error );
			setButtonLoading( false );
		} );
	};

	const removeState = name => {
		restDeleteState.data = { list: [ name ] };
		setItemLoading( prev => (
			{ ...prev, [ name ]: true }
		) );

		apiFetch( restDeleteState ).then( () => {
			onDelete( name );
			// eslint-disable-next-line no-console
		} ).catch( console.error ).finally( () => {
			setItemLoading( prev => (
				{ ...prev, [ name ]: false }
			) );
		} );
	};

	const onSuccessAdd = state => {
		addRenderState( state );
		current.push( state.value );

		changeCurrentItem( {
			render_state: current,
		} );
	};

	const onDelete = name => {
		deleteRenderStates( name );
		current = current.filter( item => item !== name );

		changeCurrentItem( {
			render_state: current,
		} );
	};

	return <ActionModal
		title={ __( 'Register custom render state', 'jet-form-builder' ) }
		onRequestClose={ () => setShowModal( false ) }
		classNames={ [ 'width-45' ] }
	>
		{/*<NoticeInfo style={ { marginBottom: '1em' } }/>*/ }
		<div className={ 'jet-fb with-button' }>
			<TextControl
				value={ value }
				onChange={ newValue => setValue( newValue ) }
				placeholder={ __(
					'Set your custom state name',
					'jet-form-builder',
				) }
			/>
			<Button
				variant={ 'secondary' }
				onClick={ addState }
				disabled={ isLoading }
				isBusy={ isLoading }
				style={ {
					padding: '7px 12px',
					height: 'unset',
				} }
			>
				{ __( 'Add', 'jet-form-builder' ) }
			</Button>
		</div>
		{ Boolean( customStates?.length ) && <>
			<b className={ 'jet-fb flex mb-05-em' }>
				{ __( 'Manage your custom states:', 'jet-form-builder' ) }
			</b>
			<div className={ 'jet-fb-buttons-flex' }>
				{ customStates.map( state => <Button
					key={ state.value }
					icon={ 'no-alt' }
					iconPosition={ 'right' }
					onClick={ () => removeState( state.value ) }
					isBusy={ isLoadingItem[ state.value ] ?? false }
				>
					{ state.label }
				</Button> ) }
			</div>
		</> }
		<ModalFooterFill>
			<span/>
		</ModalFooterFill>
	</ActionModal>;
};

export default EditCustomRenderStates;