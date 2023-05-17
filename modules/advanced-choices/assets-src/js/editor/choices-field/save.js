const {
	      useInnerBlocksProps,
      } = wp.blockEditor;

const {
	      Fragment,
      } = wp.element;

export default function SaveAdvancedChoicesField() {
	const innerBlocksProps = useInnerBlocksProps.save();

	return <Fragment { ...innerBlocksProps } />;
}