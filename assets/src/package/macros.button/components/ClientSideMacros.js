import ExtraMacroContext from '../context/ExtraMacroContext';

const {
	      useSelect,
      } = wp.data;

function ClientSideMacros( { children } ) {
	const macros = useSelect(
		( select ) => select( 'jet-forms/macros' ).getClientMacros(),
		[],
	);

	return <ExtraMacroContext.Provider value={ macros }>
		{ children }
	</ExtraMacroContext.Provider>;
}

export default ClientSideMacros;