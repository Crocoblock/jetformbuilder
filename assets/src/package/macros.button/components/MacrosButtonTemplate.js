import ShowPopoverContext from '../context/ShowPopoverContext';

const {
	      useState,
	      useRef,
      } = wp.element;
const {
	      Button,
	      Popover,
      } = wp.components;

function MacrosButtonTemplate( {
	children,
	title = '',
	...props
} ) {
	const [ showPopover, setShowPopover ] = useState( false );
	const buttonRef                       = useRef();

	return <ShowPopoverContext.Provider value={ showPopover }>
		<Button
			ref={ buttonRef }
			icon={ showPopover ? 'no-alt' : 'admin-tools' }
			variant="tertiary"
			isSmall
			isDestructive={ showPopover }
			className={ 'jet-fb-is-thick' }
			onClick={ () => setShowPopover( prev => !prev ) }
			{ ...props }
		/>
		{ showPopover && (
			<Popover
				anchorRef={ buttonRef.current }
				position={ 'top' }
				noArrow={ false }
				isAlternate
			>
				{ children }
			</Popover>
		) }
	</ShowPopoverContext.Provider>;
}

export default MacrosButtonTemplate;