import { set } from '../../tools';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';

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

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const { clientId } = useBlockEditContext();
	const { get }      = window._;

	const settings = Object.entries( cssVars ).map( ( [ cssVar, options ] ) => {

		let currentRoot = attributes?.style ?? {};

		const updateStyle = value => {
			const newStyle = set(
				JSON.parse( JSON.stringify( currentRoot ) ),
				options.path,
				value,
			);

			setAttributes( {
				style: newStyle,
			} );

			return newStyle;
		};

		return {
			colorValue: get( currentRoot, options.path ),
			onColorChange: updateStyle,
			label: options?.label ?? __( 'Color', 'jet-form-builder' ),
			resetAllFilter: () => updateStyle(),
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