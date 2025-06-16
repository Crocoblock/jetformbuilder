import {
	BaseControl,
	SelectControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import {
	__experimentalFontFamilyControl as FontFamilyControl,
	__experimentalTextDecorationControl as TextDecorationControl,
	__experimentalTextTransformControl as TextTransformControl,
} from '@wordpress/block-editor';
import { useSettings } from '@wordpress/block-editor';
import PopoverContainer from '../common/popover-container';

const ControlTypography = ( { control, value, handleChange } ) => {

	const editIcon = (
		<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z" fill-rule="nonzero"/></svg>
	);

	const [ blockLevelFontFamilies ] = useSettings( 'typography.fontFamilies' );
	const fontFamilies = [ {
		label: 'Default',
		value: ''
	} ];

	const fontWeights = [
		{
			label: 'Default',
			value: ''
		},
		{
			label: 'Thin 100',
			value: '100'
		},
		{
			label: 'Extra Light 200',
			value: '200'
		},
		{
			label: 'Light 300',
			value: '300'
		},
		{
			label: 'Regular 400',
			value: '400'
		},
		{
			label: 'Medium 500',
			value: '500'
		},
		{
			label: 'Semi Bold 600',
			value: '600'
		},
		{
			label: 'Bold 700',
			value: '700'
		},
		{
			label: 'Extra Bold 800',
			value: '800'
		},
		{
			label: 'Black 900',
			value: '900'
		}
	];

	const fontStyle = [
		{
			label: 'Default',
			value: '',
		},
		{
			label: 'Normal',
			value: 'normal',
		},
		{
			label: 'Italic',
			value: 'italic',
		},
		{
			label: 'Oblique',
			value: 'oblique',
		}
	];

	for ( const fontsType in blockLevelFontFamilies ) {
		for ( const font of blockLevelFontFamilies[ fontsType ] ) {
			//fontFamilies.push( font );
			fontFamilies.push( {
				label: font.name,
				value: font.fontFamily
			} );
		}
	}

	const currentValue = value || {};
	const updateTypography = ( key, value ) => {

		const newValue = {
			...currentValue,
			[ key ]: value,
		};

		handleChange( newValue );
	};

	const unitsList = [
		{
			a11yLabel: 'Pixels (px)',
			label: 'px',
			step: 1,
			value: 'px'
		},
		{
			a11yLabel: 'Ems (em)',
			label: 'em',
			step: 0.1,
			value: 'em'
		},
		{
			a11yLabel: 'Percent (%)',
			label: '%',
			step: 1,
			value: '%'
		},
		{
			a11yLabel: 'Rems (rem)',
			label: 'rem',
			step: 0.1,
			value: 'rem'
		},
	];

	const popoverTrigger = (
		<BaseControl
			label={ control.label }
			id={ control.id }
			className="crocoblock-style-manager__inline-control"
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		>
			<div class="crocoblock-style-manager__popover-trigger">
				{ editIcon }
			</div>
		</BaseControl>
	);

	return (
		<PopoverContainer
			trigger={ popoverTrigger }
			label={ control.label }
		>
			<div className="crocoblock-style-manager__typography-controls">
				<SelectControl
					label={ 'Font Family' }
					value={ currentValue.family }
					onChange={( newValue ) => {
						updateTypography( 'family', newValue );
					}}
					options={ fontFamilies }
					className="crocoblock-style-manager__popover-control"
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
				<div className="crocoblock-style-manager__popover-controls-row">
					<UnitControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={ 'Font Size' }
						value={ currentValue.size }
						onChange={( newValue ) => {
							updateTypography( 'size', newValue );
						}}
						units={ unitsList }
						allowEmpty={ true }
						className="crocoblock-style-manager__popover-control w-50"
					/>
					<UnitControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={ 'Line Height' }
						value={ currentValue.lineHeight }
						onChange={( newValue ) => {
							updateTypography( 'lineHeight', newValue );
						}}
						units={ unitsList }
						allowEmpty={ true }
						className="crocoblock-style-manager__popover-control w-50"
					/>
				</div>
				<div className="crocoblock-style-manager__popover-controls-row">
					<div className="w-50">
						<SelectControl
							label={ 'Font Weight' }
							value={ currentValue.weight }
							onChange={( newValue ) => {
								updateTypography( 'weight', newValue );
							}}
							options={ fontWeights }
							className="crocoblock-style-manager__popover-control"
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>
					<div className="w-50">
						<SelectControl
							label={ 'Font Style' }
							value={ currentValue.style }
							onChange={( newValue ) => {
								updateTypography( 'style', newValue );
							}}
							options={ fontStyle }
							className="crocoblock-style-manager__popover-control"
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>
				</div>
				<div className="crocoblock-style-manager__popover-controls-row">
					<div className="w-50">
						<TextTransformControl
							label={ 'Text Transform' }
							value={ currentValue.transform }
							onChange={( newValue ) => {
								updateTypography( 'transform', newValue );
							}}
							className="crocoblock-style-manager__popover-control"
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>
					<div className="w-50">
						<TextDecorationControl
							label={ 'Text Decoration' }
							value={ currentValue.decoration }
							onChange={( newValue ) => {
								updateTypography( 'decoration', newValue );
							}}
							className="crocoblock-style-manager__popover-control"
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</div>
				</div>
				<UnitControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ 'Letter Spacing' }
					value={ currentValue.letterSpacing }
					onChange={( newValue ) => {
						updateTypography( 'letterSpacing', newValue );
					}}
					units={ unitsList }
					allowEmpty={ true }
					className="crocoblock-style-manager__popover-control"
				/>
			</div>
		</PopoverContainer>
	);
}

/*
+ {{SIZE}}{{S_UNIT}}
+ {{LINEHEIGHT}}{{LH_UNIT}}
+ {{WEIGHT}}
{{TRANSFORM}}
{{STYLE}}
{{DECORATION}}
+ {{LETTERSPACING}}{{LS_UNIT}}
*/

export default ControlTypography;