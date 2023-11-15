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
		      insertBlocks,
	      } = useDispatch( 'core/block-editor' );

	const pattern = useSelect(
		select => select( constants.store ).getType( name ),
		[],
	);

	function insert( editedPattern = {} ) {
		applyPattern( editedPattern );

		editedPattern = {
			...pattern,
			...editedPattern,
		};

		removeBlocks(
			blocks.map( ( { clientId: id } ) => id ),
		);

		// inserting actions
		const { list } = convertFlow( editedPattern?.actions ?? [] );

		setActions( list );
	}

	function append( editedPattern = {} ) {
		applyPattern( editedPattern );

		editedPattern = {
			...pattern,
			...editedPattern,
		};

		// inserting actions
		const { list } = convertFlow( editedPattern?.actions ?? [] );

		setActions( [ ...actions, ...list ] );
	}

	/**
	 * @returns {boolean}
	 */
	function applyPattern( editedPattern = {} ) {
		editedPattern = {
			...pattern,
			...editedPattern,
		};

		// inserting blocks
		// clientId may be empty if we use this hook outside block-edit function
		clientId ? replaceBlocks(
			[ clientId ],
			createBlocksFromInnerBlocksTemplate(
				editedPattern?.blocks ?? [],
			),
			0,
		) : insertBlocks(
			createBlocksFromInnerBlocksTemplate(
				editedPattern?.blocks ?? [],
			)
		);

		const {
			      actions: patternActions,
			      blocks: patternBlocks,
			      name,
			      icon,
			      title,
			      description,
			      ...rawFormData
		      } = editedPattern;

		editPost( rawFormData );
	}

	return { pattern, insert, append, blocks };
}

export default usePattern;