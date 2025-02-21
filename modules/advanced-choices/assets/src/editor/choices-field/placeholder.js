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

	const { variations, defaultVariation } = useSelect(
		( select ) => {
			const {
				      getBlockVariations,
				      getDefaultBlockVariation,
			      } = select( 'core/blocks' );

			return {
				defaultVariation: getDefaultBlockVariation( name ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[],
	);

	return <BlockVariationPicker
		allowSkip
		label={ __( 'Select choices layout', 'jet-form-builder' ) }
		instructions={ __(
			'You can select one of predefined layout, or skip this step and build custom from scratch',
			'jet-form-builder',
		) }
		variations={ variations }
		onSelect={ ( nextVariation = defaultVariation ) => {
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