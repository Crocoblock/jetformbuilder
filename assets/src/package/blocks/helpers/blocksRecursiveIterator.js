const { select } = wp.data;

function blocksRecursiveIterator( blockParserFunc ) {
	const blocksRecursiveIterator = ( blocks, parent = null ) => {

		blocks = blocks || select( 'core/block-editor' ).getBlocks();

		blocks.forEach( block => {
			blockParserFunc( block, parent );

			if ( block.innerBlocks.length ) {
				const currentParent = 'jet-forms/repeater-field' === block.name
				                      ? block
				                      : parent;

				blocksRecursiveIterator(
					block.innerBlocks,
					currentParent,
				);

				return;
			}

			if ( 'core/block' !== block.name ) {
				return;
			}

			/**
			 * Hardcode the receipt of internal blocks "Reusable block".
			 * This is the only way so far.
			 *
			 * Added after major refactoring
			 * @since 3.0.4
			 *
			 * Introduced
			 * @since 2.1.1
			 *
			 * @type {{clientId: String, innerBlocks: Array}[]}
			 */
			let innerReusable = select( 'core/block-editor' )?.
				__unstableGetClientIdsTree?.(
					block.clientId,
				);

			if ( ! innerReusable?.length ) {
				return;
			}

			const innerReusableIds = innerReusable.map(
				( { clientId } ) => clientId,
			);

			/**
			 * We update this variable because `__unstableGetClientIdsTree`
			 * returns insufficient information about the block.
			 * Namely, the `name` property is missing
			 */
			innerReusable = select( 'core/block-editor' ).getBlocksByClientId(
				innerReusableIds,
			);

			blocksRecursiveIterator( innerReusable );
		} );
	};

	blocksRecursiveIterator();
}

export default blocksRecursiveIterator;