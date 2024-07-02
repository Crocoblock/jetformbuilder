import ExtraMacroContext from '../context/ExtraMacroContext';
import { useRequestFields } from 'jet-form-builder-actions';

function ServerSideMacros( { children } ) {
	const requestFields = useRequestFields();

	return <ExtraMacroContext.Provider value={ { afterFields: requestFields } }>
		{ children }
	</ExtraMacroContext.Provider>;
}

export default ServerSideMacros;