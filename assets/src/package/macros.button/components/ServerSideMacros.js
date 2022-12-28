import ExtraMacroContext from '../context/ExtraMacroContext';
import useRequestFields from '../../actions/hooks/useRequestFields';

const {
	      useSelect,
      } = wp.data;
const {
	      __,
      } = wp.i18n;


function ServerSideMacros( { children } ) {
	const requestFields = useRequestFields();

	return <ExtraMacroContext.Provider value={ { afterFields: requestFields } }>
		{ children }
	</ExtraMacroContext.Provider>;
}

export default ServerSideMacros;