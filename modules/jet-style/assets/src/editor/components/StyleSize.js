import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItemContext from './StylePanelItemContext';

const {
	      useContext,
      } = wp.element;

let {
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
    } = wp.components;

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

const {
	      HeightControl,
      } = wp.blockEditor;

const {
	      isEmpty,
      } = JetFBActions;

function UnCompleteSize( {
	label = '',
	labelForControl,
} ) {
	const {
		      cssValue,
		      updateCss,
		      onDeselect,
		      hasValue: invalidHasValue,
		      ...otherContext
	      } = useContext( BlockJetStyleItemContext );

	return <ToolsPanelItem
		label={ label }
		onDeselect={ onDeselect }
		hasValue={ () => !isEmpty( cssValue ) }
		{ ...otherContext }
	>
		<HeightControl
			label={ labelForControl ?? label }
			onChange={ updateCss }
			value={ cssValue }
		/>
	</ToolsPanelItem>;
}

function StyleSize( {
	cssVar,
	label = '',
	labelForControl,
	...props
} ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
		defaultValue={ '' }
	>
		<UnCompleteSize
			label={ label }
			labelForControl={ labelForControl }
			{ ...props }
		/>
	</StylePanelItemContext>;
}

export default StyleSize;