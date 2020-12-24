function RepeaterWithState( {
								children,
								ItemHeading,
								repeaterClasses = [],
								repeaterItemClasses = [],
								newItem,
								addNewButtonLabel = 'Add New',
								items = [],
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

	const parsedItems = () => {
		if ( items && items.length > 0 ) {
			const cloneItems = [...items];

			cloneItems.forEach( item => {
				item.__visible = false;
			} );

			return cloneItems;
		} else {
			return [{
				...newItem,
				__visible: true,
			}];
		}
	}

	const [itemsData, setItemsData] = useState( () => parsedItems() );

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
		setItemsData( prev => [...prev, {
			...value,
			__visible: true,
		} ] );
	}

	const cloneItem = ( index ) => {
		setItemsData( prev => {
			const [before, after] = [prev.slice( 0, index + 1 ), prev.slice( index + 1 )];
			return [...before, lodash.assign( {}, prev[ index ] ), ...after];
		} );
	}

	const moveUp = ( index ) => {
		setItemsData( prev => {
			[prev[ index - 1 ], prev[ index ]] = [prev[ index ], prev[ index - 1 ]];
			return [...prev];
		} );
	}
	const moveDown = ( index ) => {
		setItemsData( prev => {
			[prev[ index + 1 ], prev[ index ]] = [prev[ index ], prev[ index + 1 ]];
			return [...prev];
		} );
	}

	const isDisabledEnd = ( index ) => {
		return ! ( index < itemsData.length - 1 );
	}

	const toggleVisible = ( index ) => {
		setItemsData( prev => {
			prev[ index ].__visible = ! prev[ index ].__visible;
			return [...prev];
		} );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			const cloneItems = [...itemsData];

			if ( onSaveItems ) {
				cloneItems.forEach( item => {

					for ( const itemKey in item ) {
						if ( itemKey.startsWith( '__' ) ) {
							delete item[ itemKey ];
						}
					}
				} );

				onSaveItems( cloneItems );
			}
			onUnMount();
		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	}, [isSaveAction] );


	return <div
		className={ classNames }
		key={ 'jet-form-builder-repeater' }
	>
		{ itemsData.map( ( currentItem, index ) => {
			return <Card
				isElevated={ true }
				className={ itemClassNames }
				key={ `jet-form-builder-repeater__item_${ index }` }
			>
				<CardHeader className={ 'repeater__item__header' }>
					<div>
						<ButtonGroup className={ 'repeater-action-buttons' }>
							<Button
								isSmall
								icon={ currentItem.__visible ? 'visibility' : 'hidden' }
								onClick={ () => toggleVisible( index ) }
								className={ 'repeater-action-button' }
							/>
							<Button
								isSmall
								isSecondary
								disabled={ ! Boolean( index ) }
								icon={ 'arrow-up-alt2' }
								onClick={ () => moveUp( index ) }
								className={ 'repeater-action-button' }
							/>
							<Button
								isSmall
								isSecondary
								disabled={ isDisabledEnd( index ) }
								icon={ 'arrow-down-alt2' }
								onClick={ () => moveDown( index ) }
								className={ 'repeater-action-button' }
							/>
						</ButtonGroup>
						<span className={'repeater-item-title'}>
							{ ItemHeading && <ItemHeading
								currentItem={ currentItem }
								index={ index }
								changeCurrentItem={ data => changeCurrentItem( data, index ) }
							/> }
							{ ! ItemHeading && `#${ index + 1 }` }
						</span>
					</div>
					<ButtonGroup>
						<Button
							isSmall
							isSecondary
							onClick={ () => cloneItem( index ) }
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
				{ currentItem.__visible && <CardBody
					className={ 'repeater-item__content' }
				>
					{ children && <React.Fragment
						key={ `repeater-component__item_${ index }` }
					>
						{ 'function' === typeof children && children( {
							currentItem,
							changeCurrentItem: data => changeCurrentItem( data, index )
						} ) }
						{ 'function' !== typeof children && children }
					</React.Fragment> }
					{ ! children && 'Set up your Repeater Template, please.' }
				</CardBody> }
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