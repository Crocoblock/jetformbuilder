import baseMetaData from "./base-block.json";
import { jfbHooks } from "../helpers/hooks-helper";
import { getHelpInstance } from "./help-messages";

const editProps = jfbHooks.applyFilters( 'jet.fb.register.editProps', [
	{
		name: 'uniqKey',
		callable: block => ( suffix =>`${ block.name }/${ suffix }` )
	},
	{
		name: 'blockName',
		callable: block => block.name
	},
	{
		name: 'attrHelp',
		callable: getHelpInstance
	}
] );

export function getEditWrapperProps( props ) {
	const { attributes } = baseMetaData;

	return { ...attributes, ...props };
}

export function withCustomProps( block ) {
	const { edit: EditComponent } = block.settings;

	let _plugins = {};

	if ( 'useEditProps' in block.settings ) {
		const { useEditProps } = block.settings;

		useEditProps.forEach( name => {
			const editProp = editProps.find( prop => name === prop.name );

			if ( editProp ) {
				_plugins[ name ] = editProp.callable( block );
			}
		} );

		delete block.settings.useEditProps;
	}

	return props => <EditComponent { ...props } editProps={ { ..._plugins } }/>;
}