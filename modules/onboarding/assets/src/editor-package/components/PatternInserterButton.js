import usePattern from '../hooks/usePattern';
import useAnotherBlocks from '../hooks/useAnotherBlocks';
import {
	useTriggerPopover,
	PopoverStandard,
} from 'jet-form-builder-components';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function PatternInserterButton( {
	patternName,
	withPatternIcon = false,
	onClick = false,
	onApply = () => {},
	...props
} ) {
	const {
		      ref,
		      showPopover,
		      setShowPopover,
		      popoverProps,
	      } = useTriggerPopover();

	const blocks = useAnotherBlocks();

	const {
		      pattern,
		      insert,
		      append,
	      } = usePattern( {
		name: patternName,
		onApply,
	} );

	return <>
		<Button
			ref={ ref }
			icon={ withPatternIcon && pattern.icon }
			iconSize="48"
			onClick={ () => {
				if ( 'function' === typeof onClick ) {
					onClick();
					return;
				}
				if ( blocks.length ) {
					setShowPopover( prev => !prev );
				}
				else {
					insert();
				}
			} }
			label={ pattern.description || pattern.title }
			{ ...props }
		/>
		{ showPopover && (
			<PopoverStandard
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverProps }
			>
				<span>{ __( 'I want to', 'jet-form-builder' ) }</span>
				&nbsp;
				<Button
					isLink
					isDestructive
					onClick={ () => insert() }
				>
					{ __( 'replace', 'jet-form-builder' ) }
				</Button>
				{ ' / ' }
				<Button
					isLink
					onClick={ () => append() }
				>
					{ __( 'append', 'jet-form-builder' ) }
				</Button>
				&nbsp;
				<span>{ __(
					'form settings and blocks',
					'jet-form-builder',
				) }</span>
			</PopoverStandard>
		) }
	</>;
}

export default PatternInserterButton;