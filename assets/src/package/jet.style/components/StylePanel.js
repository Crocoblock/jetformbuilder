import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import BlockJetStyleContext from '../context/BlockJetStyleContext';

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      __,
      } = wp.i18n;

let {
	    __experimentalToolsPanel,
	    ToolsPanel,
    } = wp.components;

const {
	      useCallback,
      } = wp.element;

const {
	      useInstanceId,
      } = wp.compose;

ToolsPanel = (
	ToolsPanel || __experimentalToolsPanel
);

/**
 * Wrapper Component for style controls
 *
 * @since 3.1.0
 */
function StylePanel( {
	label,
	children,
	...props
} ) {
	const { clientId } = useBlockEditContext();
	const instanceId   = useInstanceId( StylePanel );

	const [ attributes, setAttributes ] = useBlockAttributes();

	const resetAllCallback = useCallback(
		filters => {
			let tempAttrs = JSON.parse( JSON.stringify( attributes ) );

			filters.forEach( current => {
				tempAttrs = current( tempAttrs );
			} );

			setAttributes( tempAttrs );

		},
		[ clientId, attributes ],
	);

	return <ToolsPanel
		label={ label ?? __( 'Style panel', 'jet-form-builder' ) }
		resetAll={ resetAllCallback }
		panelId={ instanceId + clientId }
		{ ...props }
	>
		<BlockJetStyleContext.Provider value={ {
			panelId: instanceId + clientId,
		} }>
			{ children }
		</BlockJetStyleContext.Provider>
	</ToolsPanel>;

}

export default StylePanel;