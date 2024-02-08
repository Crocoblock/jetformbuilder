import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      Children,
	      cloneElement,
	      useContext,
      } = wp.element;

const {
	      useSelect,
      } = wp.data;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

let {
	    __experimentalToggleGroupControl,
	    __experimentalToggleGroupControlOptionIcon,
	    __experimentalToolbarContext,
	    ToggleGroupControl,
	    ToggleGroupControlOptionIcon,
	    ToolbarItem,
	    ToolbarGroup,
	    ToolbarContext,
    } = wp.components;

ToggleGroupControl           = (
	ToggleGroupControl || __experimentalToggleGroupControl
);
ToggleGroupControlOptionIcon = (
	ToggleGroupControlOptionIcon || __experimentalToggleGroupControlOptionIcon
);
ToolbarContext               = (
	ToolbarContext || __experimentalToolbarContext
);

// eslint-disable-next-line max-lines-per-function
function ToggleGroupVariationsBase( { value } ) {
	const { name }     = useBlockEditContext();
	const toolbarState = useContext( ToolbarContext );

	const [ , setAttributes ] = useBlockAttributes();

	const { variations, components } = useSelect(
		( select ) => {
			const {
				      getBlockVariations,
			      } = select( 'core/blocks' );

			const items = getBlockVariations( name, 'block' );

			return {
				variations: items,
				components: items.map(
					current => (
						           toolbarState?.currentId ??
						           toolbarState?.baseId
					           )
					           ? <ToolbarItem
						           key={ current.name }
						           as={ ToggleGroupControlOptionIcon }
						           value={ current.name }
						           label={ current.title }
						           icon={ current.icon }
					           /> : <ToggleGroupControlOptionIcon
						           key={ current.name }
						           value={ current.name }
						           label={ current.title }
						           icon={ current.icon }
					           /> ),
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	if ( !variations.length ) {
		return null;
	}

	return <ToggleGroupControl
		hideLabelFromVision
		onChange={ varName => setAttributes( {
			...variations.find(
				( { name: nameLocal } ) => nameLocal === varName,
			).attributes,
		} ) }
		value={ value }
		isBlock
	>
		{ Children.map(
			components,
			cloneElement,
		) }
	</ToggleGroupControl>;
}

function ToggleGroupVariations( props ) {
	const toolbarState = useContext( ToolbarContext );

	if ( !toolbarState?.currentId ) {
		return <ToggleGroupVariationsBase { ...props }/>;
	}

	return <ToolbarGroup className={ 'jet-fb toggle-toolbar-group' }>
		<ToggleGroupVariationsBase { ...props }/>
	</ToolbarGroup>;
}

export default ToggleGroupVariations;