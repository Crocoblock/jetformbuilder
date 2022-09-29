import PopoverItemMacro from './PopoverItemMacro';

const {
	      Children,
	      cloneElement,
      } = wp.element;
const {
	      PanelBody,
      } = wp.components;

function GroupItemsPopover( { title, items, children, initialOpen } ) {
	const elements = items.map( item => <PopoverItemMacro current={ item }/> );

	return <PanelBody title={ title } initialOpen={ initialOpen }>
		<ul style={ {
			padding: '0 0.5em',
		} }>
			{ Children.map( elements, current => cloneElement(
				current,
				{},
				children,
			) ) }
		</ul>
	</PanelBody>;
}

export default GroupItemsPopover;