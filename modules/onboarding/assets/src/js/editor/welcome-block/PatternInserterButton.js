import defaultPattern from '@patterns/default.json';
import useAnotherBlocks from '../hooks/useAnotherBlocks';

const {
	      useBlockEditContext,
      } = wp.blockEditor;
const {
	      useState,
	      useRef,
      } = wp.element;
const {
	      Button,
	      Popover,
      } = wp.components;

const {
	      createBlocksFromInnerBlocksTemplate,
      } = wp.blocks;
const {
	      __,
      } = wp.i18n;
const {
	      useDispatch,
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

function PatternInserterButton( {
	pattern,
	withPatternIcon = false,
	...props
} ) {
	const [ showPopover, setShowPopover ] = useState( false );

	const buttonRef    = useRef();
	const { clientId } = useBlockEditContext();
	const blocks       = useAnotherBlocks();

	const [ , setActions ] = useActions();

	const { editPost } = useDispatch( 'core/editor' );

	const {
		      removeBlocks,
		      replaceBlocks,
	      } = useDispatch( 'core/block-editor' );

	function insertPattern() {
		doAction( 'jet.fb.insert.pattern', pattern );

		// inserting blocks
		replaceBlocks(
			[ clientId ],
			createBlocksFromInnerBlocksTemplate(
				pattern?.blocks ?? [] ),
			0,
		);

		removeBlocks(
			blocks.map( ( { clientId: id } ) => id ),
		);

		// inserting actions
		const { list } = convertFlow( pattern?.actions ?? [] );

		setActions( list );

		const {
			      actions,
			      blocks: patternBlocks,
			      name,
			      icon,
			      title,
			      description,
			      ...rawFormData
		      } = pattern;

		editPost( rawFormData );
	}

	return <>
		<Button
			ref={ buttonRef }
			icon={ withPatternIcon && <span
				dangerouslySetInnerHTML={ { __html: pattern.icon } }
			/> }
			onClick={ () => {
				blocks.length
				? setShowPopover( prev => !prev )
				: insertPattern();
			} }
			label={ pattern.description || pattern.title }
			{ ...props }
		/>
		{ showPopover && (
			<Popover
				anchorRef={ buttonRef.current }
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				onFocusOutside={ event => {
					/**
					 * We should skip handling if focused node it's not equals
					 * the button which triggers popover
					 */
					if ( event.relatedTarget !== buttonRef.current ) {
						setShowPopover( false );
					}
				} }
				onClose={ () => setShowPopover( false ) }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __(
						'Are you sure to replace all blocks and actions?',
						'jet-form-builder',
					) }</span>
					&nbsp;
					<Button
						isLink
						onClick={ insertPattern }
					>
						{ __( 'Yes', 'jet-form-builder' ) }
					</Button>
					{ ' / ' }
					<Button
						isLink
						isDestructive
						onClick={ () => setShowPopover( false ) }
					>
						{ __( 'No', 'jet-form-builder' ) }
					</Button>
				</div>
			</Popover>
		) }
	</>;
}

export default PatternInserterButton;