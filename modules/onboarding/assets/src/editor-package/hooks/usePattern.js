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
	      convertFlow,
      } = JetFBActions;

const {
	      useActions,
      } = JetFBHooks;

const {
	      __,
      } = wp.i18n;

/**
 * @param name {String}
 * @param onApply {Function|undefined}
 * @returns {{blocks: Object[], pattern: Object, insert: Function, append:
 *     Function}}
 */
function usePattern( { name, onApply = () => {} } ) {
	const { clientId }         = useBlockEditContext();
	const blocks               = useAnotherBlocks();
	const { editPost }         = useDispatch( 'core/editor' );
	const { createInfoNotice } = useDispatch( wp.notices.store );

	const [ actions, setActions ] = useActions();

	const {
		      removeBlocks,
		      replaceBlocks,
		      insertBlocks,
	      } = useDispatch( 'core/block-editor' );

	const pattern    = useSelect(
		select => select( constants.store ).getType( name ),
		[],
	);
	const saveRecord = useSelect(
		select => select( 'jet-forms/patterns' ).getSetting( 'saveRecord' ),
	);

	const displayNotice = () => createInfoNotice(
		pattern?.applyText ??
		__(
			'New blocks and actions have been added',
			'jet-form-builder',
		),
		{
			type: 'snackbar',
		},
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
		const flow = convertFlow( editedPattern?.actions ?? [] );

		if ( saveRecord ) {
			flow.add( 'save_record' );
		}

		setActions( flow.list );
		displayNotice();
		onApply();
	}

	function append( editedPattern = {} ) {
		applyPattern( editedPattern );

		editedPattern = {
			...pattern,
			...editedPattern,
		};

		// inserting actions
		const flow = convertFlow( editedPattern?.actions ?? [] );

		if ( saveRecord ) {
			flow.add( 'save_record' );
		}

		setActions( [ ...actions, ...flow.list ] );
		displayNotice();
		onApply();
	}

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
			),
		);

		const {
			      actions: patternActions,
			      blocks: patternBlocks,
			      name,
			      icon,
			      title,
			      description,
			      view,
			      applyText,
			      ...rawFormData
		      } = editedPattern;

		if ( !Object.keys( rawFormData ).length ) {
			return;
		}

		editPost( rawFormData );
	}

	return { pattern, insert, append, blocks };
}

export default usePattern;