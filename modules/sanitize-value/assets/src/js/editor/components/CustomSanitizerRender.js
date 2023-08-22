const {
	      TextControl,
	      Flex,
      } = wp.components;

function CustomSanitizerRender( { control } ) {
	return <>
		<Flex
			className="components-dropdown-menu__menu-item has-separator"
			justify="flex-start"
			gap="4px"
			style={ {
				whiteSpace: 'nowrap',
				padding: '6px 12px 6px 8px',
			} }
		>
			{ control.icon }
			{ control.label }
		</Flex>
		<TextControl
			value={ control?.currentValue?.callback ?? '' }
			onChange={ value => Boolean( value )
			                    ? control.onEdit( { callback: value } )
			                    : control.onClear()
			}
		/>
	</>;
}

export default CustomSanitizerRender;