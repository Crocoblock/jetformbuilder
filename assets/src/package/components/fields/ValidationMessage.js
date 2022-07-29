import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';

const {
	      TextControl,
      } = wp.components;

const getItemByName = findName => window.jetFormValidation.messages.find(
	( { id } ) => findName === id,
);

function ValidationMessage( {
	name,
	label = null,
	initial = null,
	help = null,
} ) {
	const uniqKey                       = useUniqKey();
	const [ attributes, setAttributes ] = useBlockAttributes();

	const messages = attributes.validation?.messages ?? {};
	const current  = getItemByName( name );

	return <>
		<TextControl
			key={ uniqKey( 'massage_' + name ) }
			label={ label ?? current?.label }
			help={ help ?? current?.help }
			value={ messages[ name ] ?? initial ?? current?.initial }
			onChange={ value => setAttributes( prev => (
				{
					...prev,
					validation: {
						...attributes.validation,
						messages: {
							...messages,
							[ name ]: value,
						},
					},
				}
			) ) }
		/>
	</>;
}

export default ValidationMessage;