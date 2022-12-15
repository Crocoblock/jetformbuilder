import getInnerBlocks from './getInnerBlocks';

const {
	      useBlockProps,
      } = wp.blockEditor;

function getCurrentInnerBlocks() {
	const { 'data-block': dataBlock } = useBlockProps();

	return getInnerBlocks( dataBlock );
}

export default getCurrentInnerBlocks;