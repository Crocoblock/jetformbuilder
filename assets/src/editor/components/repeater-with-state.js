const { __ } = wp.i18n;

const {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	Panel,
	PanelBody,
	Draggable,
	Icon,
	DropZoneProvider,
	DropZone,
	Dashicon,
	ToggleControl,
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;


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
								onRemoveItem,
								help = {
									helpSource: {},
									helpVisible: () => false,
									helpKey: ''
								}
							} ) {

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

	const [isSafeDeleting, setSafeDeleting] = useState( true );

	const changeCurrentItem = ( valueToSet, index ) => {
		setItemsData( prev => {
			prev[ index ] = {
				...prev[ index ],
				...valueToSet,
			};
			return [...prev];
		} );
	};

	const onSaveDeleting = index => {
		return confirm( __( `Are you sure you want to remove item ${ index + 1 }?`, 'jet-form-builder' ) );
	}

	const removeOption = ( index ) => {
		if (
			isSafeDeleting && ! onSaveDeleting( index ) ||
			onRemoveItem && ! onRemoveItem( index, itemsData )
		) {
			return;
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
		}] );
	}

	const cloneItem = ( index ) => {
		setItemsData( prev => {
			const [before, after] = [prev.slice( 0, index + 1 ), prev.slice( index + 1 )];
			return [...before, lodash.assign( {}, prev[ index ] ), ...after];
		} );
	}

	const moveRepeaterItem = ( { oldIndex, newIndex } ) => {
		setItemsData( prev => {
			[prev[ newIndex ], prev[ oldIndex ]] = [prev[ oldIndex ], prev[ newIndex ]];
			return [...prev];
		} );
	}

	const moveUp = ( index ) => {
		moveRepeaterItem( { oldIndex: index, newIndex: index - 1 } );
	}
	const moveDown = ( index ) => {
		moveRepeaterItem( { oldIndex: index, newIndex: index + 1 } );
	}

	const isDisabledEnd = ( index ) => {
		return ! ( index < itemsData.length - 1 );
	}

	const toggleVisible = ( index ) => {
		setItemsData( prev => {
			prev[ index ].__visible = ! ( prev[ index ].__visible );
			return [...prev];
		} );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			const cloneItems = [...itemsData];

			if ( onSaveItems ) {
				cloneItems.forEach( ( item, index ) => {

					for ( const itemKey in item ) {
						if ( itemKey.startsWith( '__' ) ) {
							delete cloneItems[ index ][ itemKey ];
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

	const getRepeaterItemId = index => `jet-form-builder-repeater__item_${ index }`;


	const RepeaterItem = ( { currentItem, index } ) => <Card
		isElevated={ true }
		className={ itemClassNames }
		key={ getRepeaterItemId( index ) }
		id={ getRepeaterItemId( index ) }
	>
		<CardHeader className={ 'repeater__item__header' }>
			<div className='repeater-item__left-heading'>
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
				<span className={ 'repeater-item-title' }>
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

	const {
		helpSource,
		helpVisible,
		helpKey,
	} = help;

	const isVisibleHelp = helpVisible( itemsData ) && helpSource && helpSource[ helpKey ];

	return <div
		className={ classNames }
		key={ 'jet-form-builder-repeater' }
	>
		{ isVisibleHelp && <p>{ helpSource[ helpKey ].label }</p> }

		{ 0 < itemsData.length && <ToggleControl
			label={ __( 'Safe deleting' ) }
			checked={ isSafeDeleting }
			onChange={ setSafeDeleting }
		/> }
		{ itemsData.map( ( currentItem, index ) => {
			return RepeaterItem( { currentItem, index } );
		} ) }
		{ 1 < itemsData.length && <ToggleControl
			className='jet-control-clear'
			label={ __( 'Safe deleting' ) }
			checked={ isSafeDeleting }
			onChange={ setSafeDeleting }
		/> }
		<Button
			isSecondary
			onClick={ () => addNewItem( newItem ) }
		>
			{ addNewButtonLabel }
		</Button>
	</div>;
}

export default RepeaterWithState;