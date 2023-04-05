import { name } from './index';

const {
	      __,
      } = wp.i18n;

const {
	      useDispatch,
	      useSelect,
      } = wp.data;

const {
	      createBlocksFromInnerBlocksTemplate,
      } = wp.blocks;

let {
	    __experimentalBlockVariationPicker,
	    BlockVariationPicker,
	    useBlockEditContext,
    } = wp.blockEditor;

BlockVariationPicker = (
	BlockVariationPicker || __experimentalBlockVariationPicker
);

const {
	      useBlockAttributes,
      } = JetFBHooks;

function Placeholder() {
	const { clientId }           = useBlockEditContext();
	const [ , setAttributes ]    = useBlockAttributes();
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const { variations } = useSelect(
		( select ) => {
			const {
				      getBlockVariations,
			      } = select( 'core/blocks' );

			return {
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[],
	);

	debugger;

	return <BlockVariationPicker
		allowSkip
		label={ __( 'Select choices layout', 'jet-form-builder' ) }
		instructions={ __(
			'You can select one of predefined layout, or build custom',
			'jet-form-builder',
		) }
		variations={ variations }
		onSelect={ ( nextVariation ) => {
			if ( nextVariation.attributes ) {
				setAttributes( nextVariation.attributes );
			}
			if ( nextVariation.innerBlocks ) {
				replaceInnerBlocks(
					clientId,
					createBlocksFromInnerBlocksTemplate(
						nextVariation.innerBlocks,
					),
					true,
				);
			}
		} }
	/>;
}

export default Placeholder;