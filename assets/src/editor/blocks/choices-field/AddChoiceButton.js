const {
	      ToolbarButton,
      } = wp.components;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      __,
      } = wp.i18n;

const {
	      useCallback,
      } = wp.element;

const {
	      createBlock,
      } = wp.blocks;

const {
	      useDispatch,
	      select,
      } = wp.data;

function AddChoiceButton() {
	const { clientId }    = useBlockEditContext();
	const { insertBlock } = useDispatch( 'core/block-editor' );

	const addChoice = useCallback(
		() => {
			const countBlocks = select( 'core/block-editor' ).getBlockCount(
				clientId,
			);

			const choice = createBlock(
				'jet-forms/choice',
				{
					value: `value-of-${countBlocks}-choice`,
					calc_value: countBlocks,
				}
			);

			insertBlock( choice, countBlocks, clientId );
		},
		[ clientId ],
	);
	return (
		<ToolbarButton
			onClick={ addChoice }
			icon={ <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<Path
					d="M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"/>
			</SVG> }
			label={ __( 'Add new Choice', 'jet-form-builder' ) }
		/>
	);
}

export default AddChoiceButton;