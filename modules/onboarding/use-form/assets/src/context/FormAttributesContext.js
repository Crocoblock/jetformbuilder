import { createContext } from '@wordpress/element';

const FormAttributesContext = createContext( {
	formId: 0,
	args: {},
	shouldUpdateForm: true,
} );

export default FormAttributesContext;