import blocksRecursiveIterator from '../helpers/blocksRecursiveIterator';
const {
	      select,
      } = wp.data;

function getPreparedBlocks() {
	const blocks   = [];
	const blockMap = {};

	blocksRecursiveIterator( ( block, parent ) => {
		if ( !block?.name?.includes( 'jet-forms/' ) ) {
			return;
		}

		const blockType = select( 'core/blocks' ).getBlockType( block.name );
		const current   = blockType.jfbResolveBlock.call( block );

		// deprecated since 3.2.0
		if ( blockType.hasOwnProperty( 'jfbGetFields' ) ) {
			current.fields  = blockType.jfbGetFields.call( block );
		}

		if ( !parent?.name ) {
			blocks.push( current );
			blockMap[ current.clientId ] = current;

			return;
		}

		/**
		 * @type {Object}
		 */
		const parentField = blockMap[ parent?.clientId ] ?? false;

		if ( !parentField ) {
			return;
		}

		Object.defineProperty( current, 'parentBlock', {
			get() {
				return parentField;
			},
		} );

		parentField.innerBlocks = parentField?.innerBlocks || [];
		parentField.innerBlocks.push( current );

		blockMap[ current.clientId ] = current;
	} );

	return { blocks, blockMap };
}

export default getPreparedBlocks;