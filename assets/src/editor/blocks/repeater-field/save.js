const block = 'jet-forms/repeater-field';
window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { InnerBlocks } = wp.blockEditor;

window.jetFormBuilderBlockCallbacks[ block ].save = function( props ) {
    return <InnerBlocks.Content />;
};
