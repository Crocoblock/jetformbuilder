import { messagesConfig } from "./help-messages-config";

const {
	applyFilters
} = wp.hooks;

export function withCustomProps( block ) {
	const { edit: EditComponent } = block.settings;

	const _plugins = {};

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

const getHelpInstance = block => {
	const messages = {};

	messagesConfig.forEach( msg => {
		if ( msg.to.includes( block.name ) && msg.message ) {
			messages[ msg.attribute ] = msg;
		}
	} );

	/* eslint-disable */
	return ( attribute, attributes = {} ) => {
		if ( ! ( attribute in messages ) ) {
			return '';
		}
		const item = messages[ attribute ];

		if ( 'conditions' in item ) {
			for ( const attrName in item.conditions ) {
				if ( ! ( attrName in attributes ) || item.conditions[ attrName ] !== attributes[ attrName ] ) {
					return;
				}
			}
		}
		return item.message;
	}
	/* eslint-enable */
};

const editProps = applyFilters( 'jet.fb.register.editProps', [
	{
		name: 'uniqKey',
		callable: block => ( suffix => `${ block.name }/${ suffix }` )
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