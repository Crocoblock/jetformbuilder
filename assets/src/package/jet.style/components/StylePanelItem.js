import BlockJetStyleContext from '../context/BlockJetStyleContext';
import resolveStyle from '../helpers/resolveStyle';
import useCssVarPath from '../hooks/useCssVarPath';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';

let {
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
    } = wp.components;

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

const {
	      useContext,
      } = wp.element;

/**
 * @since 3.1.0
 *
 * @param children
 * @param props
 * @returns {JSX.Element}
 */
function StylePanelItem( { cssVar, defaultValue, ...props } ) {
	const { panelId } = useContext( BlockJetStyleContext );
	const path        = useCssVarPath( cssVar );

	const [ attributes, setAttributes ] = useBlockAttributes();

	const resetFilter = attributes => {
		const [ , getUpdatedStyle ] = resolveStyle( attributes, path );

		return {
			...attributes,
			style: getUpdatedStyle( defaultValue ),
		};
	};

	const onDeselect = function () {
		setAttributes(
			resetFilter( attributes ),
		);
	};

	const hasValue = function () {
		const [ currentValue ] = resolveStyle( attributes, path );

		return currentValue !== defaultValue;
	};

	return <ToolsPanelItem
		panelId={ panelId }
		resetAllFilter={ resetFilter }
		onDeselect={ onDeselect }
		hasValue={ hasValue }
		{ ...props }
	/>;
}

export default StylePanelItem;