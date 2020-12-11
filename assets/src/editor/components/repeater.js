function Repeater( props ) {
	const {
		Modal,
		Button,
		ButtonGroup,
		Path,
		SVG,
		TextControl,
		IconButton
	} = wp.components;

	const {
		useState,
		useEffect
	} = wp.element;

	const {
		ItemTemplate,
		repeaterClasses = [],
		repeaterItemClasses = [],
		newItem,
		addNewButtonLabel = 'Add New',
		items,
		onSaveItems,
		isUpdateModal,
		closeModal
	} = props;

	const classNames = ['jet-form-builder__repeater-component', ...repeaterClasses].join( ' ' );
	const itemClassNames = ['jet-form-builder__repeater-component-item', ...repeaterItemClasses].join( ' ' );

	const [itemsData, setItemsData] = useState( () => [...items] );

	const changeCurrentItem = ( { value, name, id } ) => {
		setItemsData( prev => {
			const clonePrev = [...prev];
			clonePrev[ id ][ name ] = value;

			return clonePrev;
		} );
	};

	const removeOption = ( index ) => {
		setItemsData( prev => {
			const clonePrev = [...prev];
			clonePrev.splice( index, 1 );

			return clonePrev;
		} );
	}

	const addNewItem = ( value ) => {
		setItemsData( prev => [...prev, { ...value }] );
	}

	useEffect( () => {
		switch ( isUpdateModal ) {
			case 'update':
				onSaveItems( itemsData );
				closeModal();
				break;
			case 'cancel':
				closeModal();
				break;
		}
	} );


	return <div
		className={ classNames }
		key={ 'jet-form-builder-repeater' }
	>
		{ itemsData.map( ( item, index ) => {
			return <div
				className={ itemClassNames }
				key={ `jet-form-builder-repeater__item_${ index }` }
			>
				<div
					className={ 'repeater-item__content' }
				>
					<ItemTemplate
						currentItem={ item }
						index={ index }
						changeCurrentItem={ changeCurrentItem }
						key={ `repeater-component__item_${ index }` }
					/>
				</div>
				<div className='repeater-item__remove'>
					<Button
						icon="dismiss"
						label="Remove"
						onClick={ () => removeOption( index ) }
					/>
				</div>
			</div>;
		} ) }
		<Button
			isSecondary
			onClick={ () => addNewItem( newItem ) }
		>
			{ addNewButtonLabel }
		</Button>
	</div>;
}

export default Repeater;