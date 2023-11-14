import useAnotherBlocks from './useAnotherBlocks';
import constants from '../store/constants';

const {
	      useBlockEditContext,
      } = wp.blockEditor;
const {
	      createBlocksFromInnerBlocksTemplate,
      } = wp.blocks;
const {
	      useDispatch,
	      useSelect,
      } = wp.data;

const {
	      doAction,
      } = wp.hooks;

const {
	      convertFlow,
      } = JetFBActions;
const {
	      useActions,
      } = JetFBHooks;

/**
 * @param name
 * @returns {{pattern: Object, insert: Function, append: Function}}
 */
function usePattern( name ) {
	const { clientId } = useBlockEditContext();
	const blocks       = useAnotherBlocks();
	const { editPost } = useDispatch( 'core/editor' );

	const [ actions, setActions ] = useActions();

	const {
		      removeBlocks,
		      replaceBlocks,
	      } = useDispatch( 'core/block-editor' );

	const pattern = useSelect(
		select => select( constants.store ).getType( name ),
		[],
	);

	function insert() {
		applyPattern();

		removeBlocks(
			blocks.map( ( { clientId: id } ) => id ),
		);

		// inserting actions
		const { list } = convertFlow( pattern?.actions ?? [] );

		setActions( list );
	}

	function append() {
		applyPattern();

		// inserting actions
		const { list } = convertFlow( pattern?.actions ?? [] );

		setActions( [ ...actions, ...list ] );
	}

	/**
	 * @returns {boolean}
	 */
	function applyPattern() {
		// inserting blocks
		replaceBlocks(
			[ clientId ],
			createBlocksFromInnerBlocksTemplate(
				pattern?.blocks ?? [],
			),
			0,
		);

		const {
			      actions: patternActions,
			      blocks: patternBlocks,
			      name,
			      icon,
			      title,
			      description,
			      ...rawFormData
		      } = pattern;

		editPost( rawFormData );
	}

	return { pattern, insert, append };
}

export default usePattern;