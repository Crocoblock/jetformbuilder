import ExtraMacroContext from '../context/ExtraMacroContext';
import FiltersMacroContext from '../context/FiltersMacroContext';

const {
	      useSelect,
      } = wp.data;

function ClientSideMacros( { children } ) {
	const macros = useSelect(
		( select ) => select( 'jet-forms/macros' ).getClientMacros(),
		[],
	);

	const filters = useSelect(
		( select ) => select( 'jet-forms/macros' ).getClientFilters(),
		[],
	);

	return <FiltersMacroContext.Provider value={ filters }>
		<ExtraMacroContext.Provider value={ macros }>
			{ children }
		</ExtraMacroContext.Provider>
	</FiltersMacroContext.Provider>;
}

export default ClientSideMacros;