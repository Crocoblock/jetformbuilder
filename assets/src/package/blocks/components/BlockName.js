import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';
import useIsUniqueFieldName from '../hooks/useIsUniqueFieldName';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
	      Icon,
	      Flex,
	      Tooltip,
      } = wp.components;
const {
	      useInstanceId,
      } = wp.compose;

function BlockName( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	const { message } = useIsUniqueFieldName();
	const instanceId  = useInstanceId( BlockName, 'AdvancedInspectorControl' );

	if ( !useIsHasAttribute( 'name' ) ) {
		return null;
	}

	return <>
		<Flex
			align={ 'center' }
			justify={ 'flex-start' }
			style={ {
				marginBottom: '8px',
			} }
		>
			<label
				htmlFor={ instanceId }
				className={ 'jet-fb label' }
			>{ label ?? __( 'Form field name', 'jet-form-builder' ) }</label>
			{ (
				!!message
			) && <Tooltip
				text={ message }
				delay={ 200 }
				position={ 'top center' }
			>
				<Icon
					icon={ 'warning' }
					style={ {
						color: 'orange',
						cursor: 'help',
					} }
				/>
			</Tooltip> }
		</Flex>
		<TextControl
			id={ instanceId }
			value={ attributes.name }
			help={ help ?? __(
				`Should contain only Latin letters, numbers, \`-\` 
or \`_\` chars, no spaces only lower case`,
				'jet-form-builder',
			) }
			onChange={ name => setAttributes( { name } ) }
		/>
	</>;
}

export default BlockName;