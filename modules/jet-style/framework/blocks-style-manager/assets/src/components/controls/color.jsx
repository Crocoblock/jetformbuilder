import {
	ColorPicker,
	ColorIndicator,
	BaseControl,
	Flex,
	FlexItem,
} from '@wordpress/components';
import PopoverContainer from '../common/popover-container';

const ControlColor = ( { control, value, handleChange } ) => {

	// Get color palette from the global WP data store
	const colorsList = wp.data.select( 'core/block-editor' ).getSettings().colors;

	const popoverTrigger = (
		<BaseControl
			label={ control.label }
			id={ control.id }
			className="crocoblock-style-manager__inline-control"
			__nextHasNoMarginBottom
		>
			<div
				className="crocoblock-style-manager__color-indicator"
			>
				<ColorIndicator colorValue={ value }/>
				<span
					className="crocoblock-style-manager__color-indicator-label"
				>{ value }</span>
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