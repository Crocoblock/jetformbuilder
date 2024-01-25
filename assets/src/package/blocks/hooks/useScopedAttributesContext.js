import ScopedAttributesContext from '../context/ScopedAttributesContext';

const {
	      useContext,
      } = wp.element;

/**
 * @return {{
 * attributes: Object,
 * setAttributes: Function,
 * realAttributes: Object,
 * setRealAttributes: Function,
 * }}
 */
function useScopedAttributesContext() {
	return useContext( ScopedAttributesContext );
}

export default useScopedAttributesContext;