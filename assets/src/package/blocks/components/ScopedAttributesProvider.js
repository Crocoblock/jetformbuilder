import useBlockAttributes from '../hooks/useBlockAttributes';
import ScopedAttributesContext from '../context/ScopedAttributesContext';

const {
	      useState,
      } = wp.element;

function ScopedAttributesProvider( { children } ) {
	const [ attributes, setAttributes ] = useBlockAttributes();
	const [ current, setCurrent ]       = useState( () => attributes );

	return <ScopedAttributesContext.Provider value={ {
		realAttributes: attributes,
		setRealAttributes: setAttributes,
		attributes: current,
		setAttributes: setCurrent,
	} }>
		{ children }
	</ScopedAttributesContext.Provider>;
}

export default ScopedAttributesProvider;