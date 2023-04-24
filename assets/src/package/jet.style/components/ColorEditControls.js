import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import resolveStyle from '../helpers/resolveStyle';

let {
	    InspectorControls,
	    __experimentalColorGradientSettingsDropdown,
	    ColorGradientSettingsDropdown,
	    __experimentalUseMultipleOriginColorsAndGradients,
	    useMultipleOriginColorsAndGradients,
    } = wp.blockEditor;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      __,
      } = wp.i18n;

ColorGradientSettingsDropdown = (
	ColorGradientSettingsDropdown || __experimentalColorGradientSettingsDropdown
);

useMultipleOriginColorsAndGradients = (
	useMultipleOriginColorsAndGradients ||
	__experimentalUseMultipleOriginColorsAndGradients
);

function ColorEditControls( { cssVars } ) {
	const [ attributes, setAttributes ] = useBlockAttributes();
	const { clientId }                  = useBlockEditContext();
	const colorGradientSettings         = useMultipleOriginColorsAndGradients();

	const settings = Object.entries( cssVars ).map( ( [ cssVar, options ] ) => {

		const [ color, updateColor ] = resolveStyle( attributes, options.path );

		const onColorChange = value => {
			const newStyle = updateColor( value );

			setAttributes( {
				style: newStyle,
			} );

			return newStyle;
		};

		return {
			colorValue: color,
			onColorChange,
			label: options?.label ?? __( 'Color', 'jet-form-builder' ),
			resetAllFilter: () => onColorChange(),
		};
	} );

	return <InspectorControls group={ 'color' }>
		<ColorGradientSettingsDropdown
			__experimentalIsRenderedInSidebar
			settings={ settings }
			panelId={ clientId }
			{ ...colorGradientSettings }
			gradients={ [] }
			disableCustomGradients={ true }
		/>
	</InspectorControls>;
}

export default ColorEditControls;