const {
	      __,
	      sprintf,
      } = wp.i18n;

const {
	      Button,
	      ButtonGroup,
	      Card,
	      CardBody,
	      CardHeader,
	      ToggleControl,
	      Flex,
	      FlexItem,
      } = wp.components;

const {
	      useState,
	      useEffect,
      } = wp.element;

// eslint-disable-next-line max-lines-per-function
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
		helpKey: '',
	},
	additionalControls = null,
} ) {

	const classNames     = [
		'jet-form-builder__repeater-component',
		...repeaterClasses,
	].join( ' ' );
	const itemClassNames = [
		'jet-form-builder__repeater-component-item',
		...repeaterItemClasses,
	].join( ' ' );

	const parsedItems = () => {
		if ( items && items.length > 0 ) {
			return items.map( item => {
				item.__visible = false;

				return item;
			} );
		}
		return [
			{
				...newItem,
				__visible: true,
			},
		];

	};

	const [ itemsData, setItemsData ] = useState( [] );

	useEffect( () => {
		setItemsData( parsedItems() );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const [ isSafeDeleting, setSafeDeleting ] = useState( true );

	const changeCurrentItem = ( valueToSet, index ) => {
		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );

			prevClone[ index ] = {
				...prev[ index ],
				...valueToSet,
			};
			return prevClone;
		} );
	};

	const onSaveDeleting = index => {
		// eslint-disable-next-line no-alert
		return confirm(
			sprintf(
				// translators: %d - index of the repeater item
				__(
					`Are you sure you want to remove item %d?`,
					'jet-form-builder',
				),
				index + 1,
			),
		);
	};

	const removeOption = ( index ) => {
		if (
			isSafeDeleting && !onSaveDeleting( index ) ||
			onRemoveItem && !onRemoveItem( index, itemsData )
		) {
			return;
		}

		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );
			prevClone.splice( index, 1 );

			return prevClone;
		} );
	};

	const addNewItem = ( value ) => {
		if ( onAddNewItem ) {
			onAddNewItem( value, itemsData );
		}
		setItemsData( prev => [
			...prev, {
				...value,
				__visible: true,
			},
		] );
	};

	const cloneItem = ( index ) => {
		setItemsData( prev => {
			const prevClone         = JSON.parse( JSON.stringify( prev ) );
			const [ before, after ] = [
				prevClone.slice( 0, index + 1 ),
				prevClone.slice( index + 1 ),
			];

			return [ ...before, prevClone[ index ], ...after ];
		} );
	};

	const moveRepeaterItem = ( { oldIndex, newIndex } ) => {
		setItemsData( prev => {
			const prevClone = JSON.parse( JSON.stringify( prev ) );

			[
				prevClone[ newIndex ],
				prevClone[ oldIndex ],
			] = [ prevClone[ oldIndex ], prevClone[ newIndex ] ];

			return prevClone;
		} );
	};

	const moveUp   = ( index ) => {
		moveRepeaterItem( { oldIndex: index, newIndex: index - 1 } );
	};
	const moveDown = ( index ) => {
		moveRepeaterItem( { oldIndex: index, newIndex: index + 1 } );
	};

	const isDisabledEnd = ( index ) => {
		return !(
			index < itemsData.length - 1
		);
	};

	const toggleVisible = index => {
		setItemsData( prev => {
			const prevClone              = JSON.parse( JSON.stringify( prev ) );
			prevClone[ index ].__visible = !(
				prevClone[ index ].__visible
			);

			return prevClone;
		} );
	};

	useEffect( () => {
		if ( true === isSaveAction ) {
			for ( const itemsDataKey in itemsData ) {
				/* eslint-disable max-depth */
				for ( const itemKey in itemsData[ itemsDataKey ] ) {
					if ( itemKey.startsWith( '__' ) ) {
						delete itemsData[ itemsDataKey ][ itemKey ];
					}
				}
				/* eslint-enable max-depth */
			}
			onSaveItems( itemsData );
			onUnMount();
		}
		else if ( false === isSaveAction ) {
			onUnMount();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ isSaveAction ] );

	const getRepeaterItemId = index => `jet-form-builder-repeater__item_${ index }`;

	const {
		      helpSource,
		      helpVisible,
		      helpKey,
	      } = help;

	const isVisibleHelp = helpVisible( itemsData ) && helpSource &&
		helpSource[ helpKey ];

	return <div
		className={ classNames }
		key={ 'jet-form-builder-repeater' }
	>
		{ isVisibleHelp && <p>{ helpSource[ helpKey ].label }</p> }

		{ 0 < itemsData.length && <>
			<Flex>
				<FlexItem>
					<ToggleControl
						label={ __( 'Safe deleting', 'jet-form-builder' ) }
						checked={ isSafeDeleting }
						onChange={ setSafeDeleting }
					/>
				</FlexItem>
				<FlexItem style={ {
					flex: 'unset',
					marginBottom: '1em',
				} }>
				</FlexItem>
			</Flex>
		</> }
		{ additionalControls }
		{ /* eslint-disable-next-line max-lines-per-function */ }
		{ itemsData.map( ( currentItem, index ) => <Card
			elevation={ 2 }
			className={ itemClassNames }
			key={ getRepeaterItemId( index ) }
		>
			<CardHeader className={ 'repeater__item__header' }>
				<div className="repeater-item__left-heading">
					<ButtonGroup className={ 'repeater-action-buttons' }>
						<Button
							isSmall
							icon={ currentItem.__visible ? 'no-alt' : 'edit' }
							onClick={ () => toggleVisible( index ) }
							className={ 'repeater-action-button' }
						/>
						<Button
							isSmall
							isSecondary
							disabled={ !Boolean( index ) }
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
								changeCurrentItem={ data => changeCurrentItem(
									data, index ) }
							/> }
						{ !ItemHeading && `#${ index + 1 }` }
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
				{ children && <>
					{ 'function' === typeof children && children( {
						currentItem,
						changeCurrentItem: data => changeCurrentItem( data,
							index ),
						currentIndex: index,
					} ) }
					{ 'function' !== typeof children && children }
				</> }
				{ !children && 'Set up your Repeater Template, please.' }
			</CardBody> }
		</Card> ) }
		{ 1 < itemsData.length && <>
			{ additionalControls }
			<ToggleControl
				className="jet-control-clear"
				label={ __( 'Safe deleting', 'jet-form-builder' ) }
				checked={ isSafeDeleting }
				onChange={ setSafeDeleting }
			/>
		</> }
		<Button
			isSecondary
			onClick={ () => addNewItem( newItem ) }
		>
			{ addNewButtonLabel }
		</Button>
	</div>;
}

export default RepeaterWithState;