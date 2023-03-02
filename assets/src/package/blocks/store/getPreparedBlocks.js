import blocksRecursiveIterator from '../helpers/blocksRecursiveIterator';
import { storeName } from './index';

const {
	      select,
      } = wp.data;

function getPreparedBlocks() {
	const blocks      = [];
	const blockMap       = {};
	const propsToSave = select( storeName ).getPropsToSave();

	blocksRecursiveIterator( ( block, parent ) => {
		if ( !block?.name?.includes( 'jet-forms/' ) ) {
			return;
		}
		const current = {};

		for ( const propName of propsToSave ) {
			if ( !block.hasOwnProperty( propName ) ) {
				continue;
			}
			current[ propName ] = block[ propName ];
		}

		const blockType = select( 'core/blocks' ).getBlockType( block.name );
		current.fields  = blockType?.jfbGetFields?.call( block ) ?? [];

		if ( !parent?.name ) {
			blocks.push( current );
			blockMap[ current.clientId ] = current;

			return;
		}

		/**
		 * @type {Object}
		 */
		const parentField = blockMap[ parent?.clientId ] ?? false;

		if ( ! parentField ) {
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