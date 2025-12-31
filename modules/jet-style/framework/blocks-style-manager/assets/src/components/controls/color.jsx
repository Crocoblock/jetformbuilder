import {
	ColorPicker,
	ColorIndicator,
	BaseControl,
	Flex,
	FlexItem,
	Button,
} from '@wordpress/components';
import PopoverContainer from '../common/popover-container';

const ControlColor = ( { control, value, handleChange } ) => {

	// Get color palette from the global WP data store
	const colorsList = wp.data.select( 'core/block-editor' ).getSettings().colors;

	const clearIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
	);

	const popoverTrigger = (
		<BaseControl
			label={ control.label }
			id={ control.id }
			className="crocoblock-style-manager__inline-control"
			__nextHasNoMarginBottom
		>
			<div
				className="crocoblock-style-manager__color-indicator crocoblock-style-manager__popover-trigger"
			>
				{ value && <Button
					className="crocoblock-style-manager__popover-clear"
					onClick={ ( event ) => {
						event.stopPropagation();
						handleChange( '' )
					} }
					aria-label={ 'Reset ' }
					icon={ clearIcon }
				></Button>}
				<ColorIndicator colorValue={ value }/>
				{ value && <span
					className="crocoblock-style-manager__color-indicator-label"
				>{ value }</span> }
			</div>
		</BaseControl>
	);

	return (
		<PopoverContainer
			trigger={ popoverTrigger }
			label={ control.label }
		>
			<ColorPicker
				onChange={ ( newValue ) => {
					handleChange( newValue );
				} }
				color={ value }
				enableAlpha={ true }
			/>
			<Flex
				className="crocoblock-style-manager__color-palette"
				justify="flex-start"
				align="center"
				direction="row"
				wrap={ true }
				gap={ 2 }
			>
				{ colorsList.map( ( color ) => {
					return (
						<FlexItem
							key={ color.slug }
							className="crocoblock-style-manager__color-palette-item"
						>
							<ColorIndicator
								colorValue={ color.color }
								onClick={ () => {
									handleChange( color.color );
								} }
								className={ {
									'crocoblock-style-manager__color-palette-item-indicator': true,
									'crocoblock-style-manager__color-palette-item-indicator--active': color.color === value,
								} }
							/>
						</FlexItem>
					);
				} ) }
			</Flex>
		</PopoverContainer>
	);
}

export default ControlColor;