import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItemContext from './StylePanelItemContext';
import { SIDES } from '../abstract/BoxCSSCompiler';

const {
	      useContext,
      } = wp.element;

let {
	    __experimentalBoxControl,
	    BoxControl,
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
    } = wp.components;

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

BoxControl = (
	BoxControl || __experimentalBoxControl
);

function UnCompleteBox( {
	label = '',
	labelForControl,
	sides = SIDES,
} ) {
	const {
		      cssValue,
		      updateCss,
		      onDeselect,
		      hasValue: invalidHasValue,
		      ...otherContext
	      } = useContext( BlockJetStyleItemContext );

	const hasValue = function () {
		if ( typeof cssValue !== 'object' ) {
			return false;
		}

		const [ firstKey ] = Object.keys( cssValue );

		return SIDES.includes( firstKey );
	};

	return <ToolsPanelItem
		label={ label }
		onDeselect={ onDeselect }
		hasValue={ hasValue }
		{ ...otherContext }
	>
		<BoxControl
			label={ labelForControl ?? label }
			onChange={ updateCss }
			sides={ sides }
			value={ cssValue }
		/>
	</ToolsPanelItem>;
}

function StyleBox( {
	cssVar,
	label = '',
	labelForControl,
	sides = SIDES,
	...props
} ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
		defaultValue={ {} }
	>
		<UnCompleteBox
			label={ label }
			labelForControl={ labelForControl }
			sides={ sides }
			{ ...props }
		/>
	</StylePanelItemContext>;
}

export default StyleBox;