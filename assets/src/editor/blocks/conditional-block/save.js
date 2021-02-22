const { InnerBlocks } = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function ConditionalSave( props ) {
	return <InnerBlocks.Content/>;
}