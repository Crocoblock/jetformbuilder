import insertPostPattern from '@patterns/insert.post.json';
import registerUserPattern from '@patterns/register.user.json';

let {
	    __experimentalBlockVariationPicker,
	    BlockVariationPicker,
	    useBlockEditContext,
    } = wp.blockEditor;

BlockVariationPicker = (
	BlockVariationPicker || __experimentalBlockVariationPicker
);

const {
	      __,
      } = wp.i18n;

const {
	      createBlocksFromInnerBlocksTemplate,
      } = wp.blocks;

function WelcomeBlockEdit( props ) {
	const { clientId } = useBlockEditContext();

	const variations = [
		insertPostPattern,
		registerUserPattern,
	].map( current => {
		current.icon = (
			<span dangerouslySetInnerHTML={ { __html: current.icon } }/>
		);

		return current;
	} );

	// rewrite via the <Placeholder> component to make it more flexible
	return <BlockVariationPicker
		allowSkip
		label={ __( 'Select form pattern', 'jet-form-builder' ) }
		instructions={ __(
			'You can select one of predefined layout, or build custom',
			'jet-form-builder',
		) }
		variations={ variations }
		onSelect={ ( nextVariation ) => {
			// Replace current blocks with blocks from pattern.
			//
			// select all blocks, if there were some of them -
			// we should ask, before delete all of them and insert pattern
			// blocks.
		} }
	/>;

}

export default WelcomeBlockEdit;