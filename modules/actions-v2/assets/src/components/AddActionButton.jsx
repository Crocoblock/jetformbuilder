/* eslint-disable import/no-extraneous-dependencies */
import useActionsEdit from '../hooks/useActionsEdit';
import BaseAction from '../abstract/BaseAction';
import { STORE_NAME } from '../store';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalGrid as Grid,
	Button,
	SelectControl,
	Modal,
	TextControl,
	Flex,
} from '@wordpress/components';
import ActionGridItem from './ActionGridItem';
import { plus, closeSmall } from '@wordpress/icons';
import { styled } from '@linaria/react';

const StyledPlaceholder = styled.div`
    text-align: center;
`;

const useCategoriesAndActionTypes = () => {
	const [ category, setCategory ] = useState( '' );
	const [ search, setSearch ]     = useState( '' );

	const { actionTypes, categories } = useSelect( select => {
		const selector = select( STORE_NAME );

		const actionTypesList = selector.getSortedActions().filter(
			mappedAction => (
				// category condition
				(
					!category ||
					(
						!mappedAction?.category && 'misc' === category
					) ||
					mappedAction?.category === category
				) &&
				// search condition
				mappedAction?.label?.toLowerCase?.().includes?.(
					search.toLowerCase(),
				)
			),
		);

		const categoriesList = [
			{
				value: '',
				label: __( 'All', 'jet-form-builder' ),
			},
			...selector.getCategories().map(
				mappedCategory => (
					{
						value: mappedCategory?.type,
						label: mappedCategory?.label,
					}
				),
			),
			{
				value: 'misc',
				label: __( 'Misc', 'jet-form-builder' ),
			},
		];

		return {
			actionTypes: actionTypesList,
			categories: categoriesList,
		};
	}, [ search, category ] );

	return {
		search,
		setSearch,
		category,
		categories,
		actionTypes,
		setCategory,
	};
};

// eslint-disable-next-line max-lines-per-function
function AddActionButton() {
	const { actions, setActions } = useActionsEdit();

	const {
		      openActionSettings,
		      showActionsInserterModal,
	      } = useDispatch( STORE_NAME );

	const {
		      search,
		      setSearch,
		      category,
		      categories,
		      actionTypes,
		      setCategory,
	      } = useCategoriesAndActionTypes();

	const showModal = useSelect( select => (
		select( STORE_NAME ).isShowActionsInserterModal()
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
			scenario: 'inserter',
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
		{ showModal && <Modal
			size="large"
			title={ __( 'Add new action', 'jet-form-builder' ) }
			onRequestClose={ () => showActionsInserterModal( false ) }
			headerActions={ <Flex expanded={ false }>
				<TextControl
					placeholder={ __(
						'Search action by name…',
						'jet-form-builder',
					) }
					value={ search }
					onChange={ setSearch }
					__nextHasNoMarginBottom
				/>
				<SelectControl
					value={ category }
					onChange={ setCategory }
					options={ categories }
					__nextHasNoMarginBottom
				/>
			</Flex> }
		>
			{ !Boolean( actionTypes?.length ) && <StyledPlaceholder>
				<h3>{ __(
					'No actions were found by your search parameters.',
					'jet-form-builder',
				) }</h3>
				<Button
					variant="secondary"
					icon={ closeSmall }
					onClick={ () => {
						setSearch( '' );
						setCategory( '' );
					} }
				>
					{ __(
						'Clear search & category fields',
						'jet-form-builder',
					) }
				</Button>
			</StyledPlaceholder> }
			<Grid columns={ 3 }>
				{ actionTypes.map( action => (
					<ActionGridItem
						key={ action.type }
						action={ action }
						onClick={ event => {
							if ( action.disabled ) {
								return;
							}
							onAddAction( event, action )
						} }
					/>
				) ) }
			</Grid>
		</Modal> }
	</>;
}

// backward compatibility
window.JetFBComponents                 = window?.JetFBComponents ?? {};
window.JetFBComponents.AddActionButton = AddActionButton;

export default AddActionButton;