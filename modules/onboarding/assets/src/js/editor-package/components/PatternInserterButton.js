import usePattern from '../hooks/usePattern';
import useAnotherBlocks from '../hooks/useAnotherBlocks';

const {
	      useState,
	      useRef,
      } = wp.element;
const {
	      Button,
	      Popover,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

function PatternInserterButton( {
	patternName,
	withPatternIcon = false,
	...props
} ) {
	const [ showPopover, setShowPopover ] = useState( false );

	const buttonRef = useRef();
	const blocks    = useAnotherBlocks();

	const { pattern, insert, append } = usePattern( patternName );

	return <>
		<Button
			ref={ buttonRef }
			icon={ withPatternIcon && <span
				dangerouslySetInnerHTML={ { __html: pattern.icon } }
			/> }
			onClick={ () => {
				blocks.length
				? setShowPopover( prev => !prev )
				: insert();
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