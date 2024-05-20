const {
	      useInnerBlocksProps,
      } = wp.blockEditor;

const {
	      Fragment,
      } = wp.element;

export default function SaveAdvancedChoice() {
	const innerBlocksProps = useInnerBlocksProps.save();

	return <Fragment { ...innerBlocksProps } />;
}