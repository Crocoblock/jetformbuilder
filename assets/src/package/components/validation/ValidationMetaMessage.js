import { getItemByName } from './functions';

const {
	      TextControl,
      } = wp.components;

function ValidationMetaMessage( {
	name,
	messages,
	update,
	label = null,
	initial = null,
	help = null,
} ) {
	const current = getItemByName( name );

	return <>
		<TextControl
			key={ 'validation_message_' + name }
			label={ label ?? current?.label }
			help={ help ?? current?.help }
			value={ messages[ name ] ?? initial ?? current?.initial }
			onChange={ value => update( prev => (
				{
					...prev,
					[ name ]: value,
				}
			) ) }
		/>
	</>;
}

export default ValidationMetaMessage;