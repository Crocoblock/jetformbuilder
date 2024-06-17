import useActionsEdit from '../hooks/useActionsEdit';
import { __ } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __experimentalGrid as Grid } from '@wordpress/components';
import ActionGridItem from './ActionGridItem';
import BaseAction from '../abstract/BaseAction';
import { plus } from '@wordpress/icons';
import { ResponsiveModal } from 'jet-form-builder-components';

const useCategoriesAndActionTypes = () => {
	const [ category, setCategory ] = useState( '' );

	const { actionTypes, categories } = useSelect( select => {
		const selector = select( 'jet-forms/actions' );

		const actionTypes = selector.getActions().filter( mappedCategory => (
			!category ||
			(
				!mappedCategory?.category && 'misc' === category
			) ||
			mappedCategory.category === category
		) );

		const categories = [
			{
				value: '',
				label: __( 'All', 'jet-form-builder' ),
			},
			...selector.getCategories().map(
				mappedCategory => (
					{
						value: mappedCategory.type,
						label: mappedCategory.label,
					}
				),
			),
			{
				value: 'misc',
				label: __( 'Misc', 'jet-form-builder' ),
			},
		];

		return {
			actionTypes,
			categories,
		};
	}, [ category ] );

	return { category, categories, actionTypes, setCategory };
};

function AddActionButton() {
	const { actions, setActions } = useActionsEdit();

	const {
		      openActionSettings,
		      showActionsInserterModal,
	      } = useDispatch( 'jet-forms/actions' );

	const {
		      category,
		      categories,
		      actionTypes,
		      setCategory,
	      } = useCategoriesAndActionTypes();

	const showModal = useSelect( select => (
		select( 'jet-forms/actions' ).isShowActionsInserterModal()
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
		showActionsInserterModal( false );
		openActionSettings( {
			item: newAction,
			index: actions.length,
			scenario: 'inserter'
		} );
	};

	return <>
		<Button
			isPrimary
			onClick={ () => showActionsInserterModal( true ) }
			icon={ plus }
		>
			{ __( 'New Action', 'jet-form-builder' ) }
		</Button>
		{ showModal && <ResponsiveModal
			title={ __( 'Add new action', 'jet-form-builder' ) }
			onRequestClose={ () => showActionsInserterModal( false ) }
		>
			<SelectControl
				value={ category }
				onChange={ setCategory }
				options={ categories }
			/>
			<Grid columns={ 3 }>
				{ actionTypes.map( action => (
					<ActionGridItem
						key={ action.type }
						action={ action }
						onClick={ event => onAddAction( event, action ) }
					/>
				) ) }
			</Grid>
		</ResponsiveModal> }
	</>;
}

export default AddActionButton;