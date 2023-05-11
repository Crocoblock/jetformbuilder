import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItemContext from './StylePanelItemContext';

const {
	      useContext,
      } = wp.element;

let {
	    __experimentalBorderBoxControl,
	    BorderBoxControl,
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
    } = wp.components;

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

BorderBoxControl = (
	BorderBoxControl || __experimentalBorderBoxControl
);

let {
	    __experimentalUseMultipleOriginColorsAndGradients,
	    useMultipleOriginColorsAndGradients,
    } = wp.blockEditor;

useMultipleOriginColorsAndGradients = (
	useMultipleOriginColorsAndGradients ||
	__experimentalUseMultipleOriginColorsAndGradients
);

function UnCompleteStyleBorderItem( {
	enableAlpha = false,
	enableStyle = true,
	label = '',
	labelForControl = '',
} ) {
	const {
		      cssValue,
		      updateCss,
		      onDeselect,
		      hasValue: invalidHasValue,
		      ...otherContext
	      } = useContext( BlockJetStyleItemContext );

	const { colors } = useMultipleOriginColorsAndGradients();

	const onDeselectWithRadius = function () {
		const defaultValue = cssValue?.hasOwnProperty?.( 'radius' )
		                     ? { radius: cssValue.radius }
		                     : {};

		onDeselect( defaultValue );
	};

	const hasValue = function () {
		if ( typeof cssValue !== 'object' ) {
			return false;
		}

		const [ firstKey ] = Object.keys( cssValue );

		return [
			'top',
			'left',
			'right',
			'bottom',
			'color',
			'width',
			'style',
		].includes( firstKey );
	};

	const onChange = value => {
		const modifiedValue = cssValue?.hasOwnProperty?.( 'radius' )
		                      ? {
				...value,
				radius: cssValue.radius,
			}
		                      : value;

		updateCss( modifiedValue );
	};

	return <ToolsPanelItem
		label={ label }
		onDeselect={ onDeselectWithRadius }
		hasValue={ hasValue }
		{ ...otherContext }
	>
		<BorderBoxControl
			label={ labelForControl }
			colors={ colors }
			onChange={ onChange }
			enableAlpha={ enableAlpha }
			enableStyle={ enableStyle }
			popoverOffset={ 40 }
			popoverPlacement="left-start"
			value={ cssValue }
			__experimentalIsRenderedInSidebar
		/>
	</ToolsPanelItem>;
}

function StyleBorderItem( {
	cssVar,
	enableAlpha = false,
	enableStyle = true,
	label = 'Border',
	labelForControl = false,
	defaultValue,
	...props
} ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
		defaultValue={ defaultValue }
	>
		<UnCompleteStyleBorderItem
			enableAlpha={ enableAlpha }
			enableStyle={ enableStyle }
			label={ label }
			labelForControl={ labelForControl ? label : '' }
			{ ...props }
		/>
	</StylePanelItemContext>;
}

export default StyleBorderItem;