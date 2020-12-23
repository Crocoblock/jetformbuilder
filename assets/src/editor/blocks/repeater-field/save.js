const block = 'jet-forms/repeater-field';
window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { InnerBlocks } = wp.blockEditor ? wp.blockEditor : wp.editor;

window.jetFormBuilderBlockCallbacks[ block ].save = function ( props ) {
	return <InnerBlocks.Content/>;
};
