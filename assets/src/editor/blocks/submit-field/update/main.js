import variation from './variation';

const {
	      registerBlockVariation,
	      getBlockVariations,
      } = wp.blocks;

const variations = getBlockVariations?.( 'jet-forms/submit-field' ) ?? [];
const hasUpdateVariation = variations.some(
	( currentVariation ) => 'update' === currentVariation?.name
		|| 'update' === currentVariation?.attributes?.action_type
);

if ( ! hasUpdateVariation ) {
	registerBlockVariation( 'jet-forms/submit-field', variation );
}
