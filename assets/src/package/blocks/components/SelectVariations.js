import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      useSelect,
      } = wp.data;

const {
	      CustomSelectControl,
	      Icon,
      } = wp.components;
const {
	      useBlockEditContext,
      } = wp.blockEditor;

function SelectVariations( { value } ) {
	const { name }            = useBlockEditContext();
	const [ , setAttributes ] = useBlockAttributes();

	const { variations, rawVariations } = useSelect(
		( select ) => {
			const {
				      getBlockVariations,
			      } = select( 'core/blocks' );

			const items         = getBlockVariations( name, 'block' );
			const options       = [];
			const variationsMap = {};

			for ( const item of items ) {
				options.push( {
					key: item.name,
					name: <span className={ 'jet-fb flex gap-1em ai-center' }>
						<Icon icon={ item.icon }/>
						{ item.title }
					</span>,
				} );
				variationsMap[ item.name ] = item;
			}

			return {
				variations: options,
				rawVariations: variationsMap,
			};
		},
		[ name ],
	);

	if ( !variations.length ) {
		return null;
	}

	return <CustomSelectControl
		__nextUnconstrainedWidth
		hideLabelFromVision
		options={ variations }
		size={ '__unstable-large' }
		onChange={ ( { selectedItem } ) => setAttributes( {
			...rawVariations[ selectedItem.key ].attributes,
		} ) }
		value={ variations.find(
			( { key } ) => key === value )
		}
	/>;
}

export default SelectVariations;