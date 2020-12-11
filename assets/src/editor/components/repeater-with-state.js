function RepeaterWithState( {
								ItemTemplate,
								ItemHeading,
								repeaterClasses = [],
								repeaterItemClasses = [],
								newItem,
								addNewButtonLabel = 'Add New',
								items,
								isSaveAction,
								onSaveItems,
								onUnMount,
								onAddNewItem,
								onRemoveItem
							} ) {
	const { __ } = wp.i18n;

	const {
		Button,
		ButtonGroup,
		Card,
		CardBody,
		CardHeader,
	} = wp.components;

	const {
		useState,
		useEffect
	} = wp.element;

	const classNames = ['jet-form-builder__repeater-component', ...repeaterClasses].join( ' ' );
	const itemClassNames = ['jet-form-builder__repeater-component-item', ...repeaterItemClasses].join( ' ' );

	const [itemsData, setItemsData] = useState( () => [...items] );

	const changeCurrentItem = ( { value, name }, index ) => {
		setItemsData( prev => {
			const clonePrev = [...prev];
			clonePrev[ index ][ name ] = value;

			return clonePrev;
		} );
	};

	const removeOption = ( index ) => {
		if ( onRemoveItem ) {
			onRemoveItem( index, itemsData );
		}

		setItemsData( prev => {
			const clonePrev = [...prev];
			clonePrev.splice( index, 1 );

			return clonePrev;
		} );
	}

	const addNewItem = ( value ) => {
		if ( onAddNewItem ) {
			onAddNewItem( value, itemsData );
		}
		setItemsData( prev => [...prev, { ...value }] );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			onSaveItems( itemsData );
			onUnMount();
		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	} );


	return <div
		className={ classNames }
		key={ 'jet-form-builder-repeater' }
	>
		{ itemsData.map( ( item, index ) => {
			return <Card
				isElevated={ true }
				className={ itemClassNames }
				key={ `jet-form-builder-repeater__item_${ index }` }
			>
				<CardHeader>
					{ ItemHeading && <ItemHeading
						currentItem={ item }
						index={ index }
					/> }
					{ ! ItemTemplate && `#${ index + 1 }` }
					<ButtonGroup>
						<Button
							isSmall
							isSecondary
							onClick={ () => {} }
						>
							{ __( 'Clone', 'jet-form-builder' ) }
						</Button>
						<Button
							isSmall
							isSecondary
							isDestructive
							onClick={ () => removeOption( index ) }
						>
							{ __( 'Delete', 'jet-form-builder' ) }
						</Button>
					</ButtonGroup>
				</CardHeader>
				<CardBody
					className={ 'repeater-item__content' }
				>
					{ ItemTemplate && <ItemTemplate
						currentItem={ item }
						changeCurrentItem={ data => changeCurrentItem( data, index ) }
						key={ `repeater-component__item_${ index }` }
					/> }
					{ ! ItemTemplate && 'Set up your Repeater Template, please.' }
				</CardBody>
			</Card>;
		} ) }
		<Button
			isSecondary
			onClick={ () => addNewItem( newItem ) }
		>
			{ addNewButtonLabel }
		</Button>
	</div>;
}

export default RepeaterWithState;