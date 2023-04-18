const {
	      useInnerBlocksProps,
      } = wp.blockEditor;

const {
	      Fragment,
      } = wp.element;

export default function SaveChoiceCheck() {
	const innerBlocksProps = useInnerBlocksProps.save();

	return <Fragment { ...innerBlocksProps } />;
}