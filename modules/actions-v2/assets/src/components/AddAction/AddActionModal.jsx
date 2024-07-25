/* eslint-disable import/no-extraneous-dependencies */
import { __ } from '@wordpress/i18n';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalGrid as Grid,
	Button,
	Flex, Modal,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { closeSmall } from '@wordpress/icons';
import ActionGridItem from '../ActionGridItem';
import BaseAction from '../../abstract/BaseAction';
import useActionsEdit from '../../hooks/useActionsEdit';
import { useDispatch } from '@wordpress/data';
import { STORE_NAME } from '../../store';
import { styled } from '@linaria/react';
import useCategoriesAndActionTypes from './useCategoriesAndActionTypes';
import { useEffect } from '@wordpress/element';

const StyledPlaceholder = styled.div`
    text-align: center;
`;

// eslint-disable-next-line max-lines-per-function
function AddActionModal() {

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
	      }           = useCategoriesAndActionTypes();
	const onAddAction = ( event, action ) => {
		const nodeClasses = Array.from( event.target?.classList );

		if ( nodeClasses?.[ 0 ]?.includes?.( 'components-external-link' ) ) {
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

	useEffect( () => {
		return () => {
			setSearch( '' );
			setCategory( '' );
		};
	}, [] );

	return <Modal
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
		<Grid columns={ 4 }>
			{ actionTypes.map( action => (
				<ActionGridItem
					key={ action.type }
					action={ action }
					onClick={ event => {
						if ( action.disabled ) {
							return;
						}
						onAddAction( event, action );
					} }
				/>
			) ) }
		</Grid>
	</Modal>;
}

export default AddActionModal;