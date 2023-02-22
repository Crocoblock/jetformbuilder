import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

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
	      useSelect,
      } = wp.data;
const {
	      useInstanceId,
      } = wp.compose;

function BlockName( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
		      clientId,
	      ] = useBlockAttributes();

	const isUniqueName = useSelect(
		select => select( 'jet-forms/fields' ).isUniqueName( clientId ),
	);

	const instanceId = useInstanceId( BlockName, 'AdvancedInspectorControl' );

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
			{ !isUniqueName && <Tooltip
				text={ __(
					'The form field name must be unique. Please change it',
					'jet-form-builder',
				) }
				delay={ 200 }
				position={ 'top center' }
			>
				<Icon
					icon={ 'warning' }
					style={ {
						color: 'orange',
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