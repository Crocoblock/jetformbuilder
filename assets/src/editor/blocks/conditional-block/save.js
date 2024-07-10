const { InnerBlocks } = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function ConditionalSave() {
	return <InnerBlocks.Content/>;
}