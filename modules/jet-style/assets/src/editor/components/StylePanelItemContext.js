import BlockJetStyleContext from '../context/BlockJetStyleContext';
import useCssVarPath from '../hooks/useCssVarPath';
import resolveStyle from '../helpers/resolveStyle';
import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';

const {
	      useContext,
	      useMemo,
	      useCallback,
      } = wp.element;

const {
	      useBlockAttributes,
      } = JetFBHooks;

/**
 * @since 3.1.0
 *
 * @param children
 * @param cssVar
 * @param defaultValue
 * @param props
 * @returns {JSX.Element}
 */
function StylePanelItemContext( { cssVar, defaultValue, children } ) {
	const { panelId } = useContext( BlockJetStyleContext );
	const path        = useCssVarPath( cssVar );

	const [ attributes, setAttributes ] = useBlockAttributes();

	const [ cssValue, getUpdatedCss ] = useMemo(
		() => resolveStyle( attributes, path ),
		[ attributes ],
	);

	const updateCss = useCallback( ( value ) => {
		const newValue = getUpdatedCss( value );

		setAttributes(
			{
				...attributes,
				style: newValue,
			},
		);
	}, [ attributes ] );

	const resetAllFilter = ( attributes, forceResetValue ) => {
		const [ , getUpdatedStyle ] = resolveStyle( attributes, path );

		return {
			...attributes,
			style: getUpdatedStyle( forceResetValue ?? defaultValue ),
		};
	};

	const onDeselect = function ( forceValue ) {
		setAttributes(
			resetAllFilter( attributes, forceValue ),
		);
	};

	const hasValue = function () {
		const [ currentValue ] = resolveStyle( attributes, path );

		return currentValue !== defaultValue;
	};

	return <BlockJetStyleItemContext.Provider value={ {
		panelId,
		onDeselect,
		hasValue,
		cssValue,
		updateCss,
		resetAllFilter,
		path,
	} }>
		{ children }
	</BlockJetStyleItemContext.Provider>;
}

export default StylePanelItemContext;