import SafeDeleteContext from '../repeater/context/safe.delete';
import { sprintf, __ } from '@wordpress/i18n';

const {
	      useContext,
      } = wp.element;

const onSaveDeleting = index => {
	// eslint-disable-next-line no-alert
	return confirm(
		sprintf(
			// translators: %d - item index
			__(
				`Are you sure you want to remove item %d?`,
				'jet-form-builder',
			),
			index + 1,
		),
	);
};

/**
 * @param  setItemsData
 * @return {{
 * cloneItem: Function,
 * addNewItem: Function,
 * changeCurrentItem: Function,
 * toggleVisible: Function,
 * moveDown: Function,
 * moveUp: Function,
 * removeOption: Function
 * }|null}
 */
// eslint-disable-next-line max-lines-per-function
function useRepeaterState( setItemsData ) {
	if ( 'undefined' === typeof setItemsData ) {
		return null;
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const isSafeDeleting = useContext( SafeDeleteContext );

	const changeCurrentItem = function ( valueToSet, index ) {
		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );

			prevClone[ index ] = {
				...prev[ index ],
				...valueToSet,
			};
			return prevClone;
		} );
	};

	const removeOption = function ( index ) {
		if ( isSafeDeleting && !onSaveDeleting( index ) ) {
			return;
		}

		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );
			prevClone.splice( index, 1 );

			return prevClone;
		} );
	};

	const addNewItem = function ( value ) {
		setItemsData( prev => [
			...prev, {
				__visible: true,
				...value,
			},
		] );
	};

	const cloneItem = function ( index ) {
		setItemsData( prev => {
			const prevClone         = JSON.parse( JSON.stringify( prev ) );
			const [ before, after ] = [
				prevClone.slice( 0, index + 1 ),
				prevClone.slice( index + 1 ),
			];

			return [ ...before, prevClone[ index ], ...after ];
		} );
	};

	const moveRepeaterItem = function ( { oldIndex, newIndex } ) {
		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );

			[
				prevClone[ newIndex ],
				prevClone[ oldIndex ],
			] = [ prevClone[ oldIndex ], prevClone[ newIndex ] ];

			return prevClone;
		} );
	};

	const moveUp   = function ( index ) {
		moveRepeaterItem( { oldIndex: index, newIndex: index - 1 } );
	};
	const moveDown = function ( index ) {
		moveRepeaterItem( { oldIndex: index, newIndex: index + 1 } );
	};

	const toggleVisible = function ( index ) {
		setItemsData( prev => {
			const prevClone              = JSON.parse( JSON.stringify( prev ) );
			prevClone[ index ].__visible = !(
				prevClone[ index ].__visible
			);

			return prevClone;
		} );
	};

	return {
		changeCurrentItem,
		toggleVisible,
		moveDown,
		moveUp,
		cloneItem,
		addNewItem,
		removeOption,
	};
}

export default useRepeaterState;