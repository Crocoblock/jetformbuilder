import PopoverItem from '../context/PopoverItem';
import BasePopoverItem from '../abstract/BasePopoverItem';

const {
	      useState,
      } = wp.element;
const {
	      Button,
      } = wp.components;

/**
 * @param current.current
 * @param current          {BasePopoverItem}
 * @param children
 * @param current.children
 * @class
 */
function PopoverItemMacro( { current, children } ) {
	const [ showHelp, setShowHelp ] = useState( false );

	if ( !(
		current instanceof BasePopoverItem
	) ) {
		return <li>
			<PopoverItem.Provider value={ current }>
				{ children }
			</PopoverItem.Provider>
		</li>;
	}

	const MacroHelp = current.fullHelp.bind( current );

	return <li>
		<PopoverItem.Provider value={ current }>
			<div style={ {
				display: 'flex',
				alignItems: 'center',
				gap: '0.6em',
			} }>
				<Button
					isSmall
					variant="tertiary"
					icon={ showHelp
					       ? 'arrow-down'
					       : 'arrow-right' }
					className={ 'jet-fb-is-thick' }
					onClick={ () => setShowHelp( prev => !prev ) }
				/>
				{ children }
			</div>
			{ showHelp && <MacroHelp/> }
		</PopoverItem.Provider>
	</li>;
}

export default PopoverItemMacro;