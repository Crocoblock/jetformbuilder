import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';
import { getItemByName } from './functions';
import { useMetaState } from '../../helpers/hooks/hooks-helper';

const {
	      TextControl,
      } = wp.components;

function ValidationBlockMessage( {
	name,
} ) {
	const uniqKey                       = useUniqKey();
	const [ attributes, setAttributes ] = useBlockAttributes();
	const [ args ]                      = useMetaState(
		'_jf_validation',
		'{}',
		[],
	);

	const isInherit = !attributes.validation?.type;
	const messages  = isInherit
	                  ? args?.messages ?? {}
	                  : attributes.validation?.messages ?? {};

	const current = getItemByName( name );

	return <>
		<TextControl
			disabled={ isInherit }
			key={ uniqKey( 'massage_' + name ) }
			label={ current?.label }
			help={ current?.help }
			value={ messages[ name ] ?? current?.initial }
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

export default ValidationBlockMessage;