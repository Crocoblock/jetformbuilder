import ScopedAttributesContext from '../context/ScopedAttributesContext';

const {
	      useContext,
      } = wp.element;

/**
 * @returns {{
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