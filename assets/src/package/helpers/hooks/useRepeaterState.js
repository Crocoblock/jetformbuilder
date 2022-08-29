import SafeDeleteContext from '../../context/safe.delete';

const {
	      useContext,
      } = wp.element;

const { __ } = wp.i18n;

const onSaveDeleting = index => {
	return confirm( __( `Are you sure you want to remove item ${ index + 1 }?`,
		'jet-form-builder' ) );
};

/**
 *
 * @param setItemsData
 * @returns {{
 * cloneItem: function,
 * addNewItem: function,
 * changeCurrentItem: function,
 * toggleVisible: function,
 * moveDown: function,
 * moveUp: function,
 * removeOption: function
 * }}
 */
function useRepeaterState( setItemsData ) {
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