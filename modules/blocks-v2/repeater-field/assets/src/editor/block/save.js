const { InnerBlocks } = wp.blockEditor ? wp.blockEditor : wp.editor;

export default function RepeaterSave() {
	return <InnerBlocks.Content/>;
};
