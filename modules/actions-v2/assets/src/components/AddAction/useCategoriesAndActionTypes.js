import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../../store';
import { __ } from '@wordpress/i18n';

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

export default useCategoriesAndActionTypes;