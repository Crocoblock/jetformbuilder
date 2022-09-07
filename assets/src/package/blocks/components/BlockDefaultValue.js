import useBlockAttributes from '../hooks/useBlockAttributes';
import MacrosFields from '../../macros.button/components/MacrosFields';
import PresetButton from '../../preset/components/PresetButton';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
	      Flex,
      } = wp.components;
const {
	      useInstanceId,
      } = wp.compose;

function BlockDefaultValue( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	const instanceId = useInstanceId( TextControl, 'jfb-field--name' );

	return <>
		<Flex
			align={ 'center' }
			justify={ 'flex-start' }
			style={ {
				marginBottom: '8px',
			} }
		>
			<label htmlFor={ instanceId }>
				{ label ?? __( 'Default Value', 'jet-form-builder' ) }
			</label>
			<PresetButton
				value={ attributes.default }
				onChange={ val => setAttributes( { default: val } ) }
			/>
			<MacrosFields
				onClick={ name => setAttributes( {
					default: attributes.default + `%${ name }%`,
				} ) }
			/>
		</Flex>
		<TextControl
			id={ instanceId }
			value={ attributes.default }
			help={ help ?? '' }
			hideLabelFromVision
			onChange={ val => setAttributes( { default: val } ) }
		/>
	</>;
}

export default BlockDefaultValue;