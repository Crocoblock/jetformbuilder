import ExtraMacroContext from '../context/ExtraMacroContext';

function ClientSideExtraMacros( { children } ) {
	const macros = [
		{
			value: 'STATIC::currentDate'
		},
	];

	return <ExtraMacroContext.Provider value={ macros }>
		{ children }
	</ExtraMacroContext.Provider>;
}

export default ClientSideExtraMacros;