import { __ } from '@wordpress/i18n';
import { Button, Flex } from '@wordpress/components';
import {
	PopoverStandard,
	useTriggerPopover,
} from 'jet-form-builder-components';

const {
	      parseHTMLtoBlocks,
      } = JetFormBuilderParser;

const { usePattern } = JetFBHooks;

function AiEditorFooterFill( { clearHTML, formHTML, children = null } ) {

	const {
		      showPopover,
		      setShowPopover,
		      ref,
		      popoverProps,
	      } = useTriggerPopover();

	const {
		      insert,
		      append,
		      blocks, // another blocks
	      } = usePattern( { name: 'ai' } );

	return <Flex justify="flex-start">
		<Button
			ref={ ref }
			variant="primary"
			onClick={ () => (
				blocks.length
				? setShowPopover( prev => !prev )
				: insert( {
					blocks: parseHTMLtoBlocks( formHTML ),
				} )
			) }
		>
			{ __( 'Use this form', 'jet-form-builder' ) }
		</Button>
		<Button
			variant="secondary"
			onClick={ clearHTML }
		>
			{ __( 'Change generation prompt', 'jet-form-builder' ) }
		</Button>
		{ showPopover && <PopoverStandard
			position={ 'top-start' }
			noArrow={ false }
			{ ...popoverProps }
		>
			<span>{ __( 'I want to', 'jet-form-builder' ) }</span>
			&nbsp;
			<Button
				isLink
				isDestructive
				onClick={ () => insert( {
					blocks: parseHTMLtoBlocks( formHTML ),
				} ) }
			>
				{ __( 'replace', 'jet-form-builder' ) }
			</Button>
			{ ' / ' }
			<Button
				isLink
				onClick={ () => append( {
					blocks: parseHTMLtoBlocks( formHTML ),
				} ) }
			>
				{ __( 'append', 'jet-form-builder' ) }
			</Button>
			&nbsp;
			<span>{ __(
				'form settings and blocks',
				'jet-form-builder',
			) }</span>
		</PopoverStandard> }
		{ children }
	</Flex>;
}

export default AiEditorFooterFill;