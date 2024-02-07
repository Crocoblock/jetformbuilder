import getInnerBlocks from './getInnerBlocks';

const {
	      useBlockProps,
      } = wp.blockEditor;

function getCurrentInnerBlocks() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { 'data-block': dataBlock } = useBlockProps();

	return getInnerBlocks( dataBlock );
}

export default getCurrentInnerBlocks;