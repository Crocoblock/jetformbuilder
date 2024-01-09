import usePattern from '../hooks/usePattern';
import useAnotherBlocks from '../hooks/useAnotherBlocks';

const {
	      Button,
	      Popover,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const {
	      useTriggerPopover,
      } = JetFBHooks;

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
			icon={ withPatternIcon && <span
				dangerouslySetInnerHTML={ { __html: pattern.icon } }
			/> }
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
			<Popover
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverProps }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __( 'I want to', 'jet-form-builder' ) }</span>
					&nbsp;
					<Button
						isLink
						isDestructive
						onClick={ insert }
					>
						{ __( 'replace', 'jet-form-builder' ) }
					</Button>
					{ ' / ' }
					<Button
						isLink
						onClick={ append }
					>
						{ __( 'append', 'jet-form-builder' ) }
					</Button>
					&nbsp;
					<span>{ __(
						'form settings and blocks',
						'jet-form-builder',
					) }</span>
				</div>
			</Popover>
		) }
	</>;
}

export default PatternInserterButton;