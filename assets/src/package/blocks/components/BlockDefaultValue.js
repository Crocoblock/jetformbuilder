import useBlockAttributes from '../hooks/useBlockAttributes';
import DynamicPreset from '../../components/DynamicPreset';
import ActionModal from '../../action-modal/components/ActionModal';
import MacrosFields from '../../macros.button/components/MacrosFields';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
	      Flex,
	      Button,
      } = wp.components;
const {
	      useState,
      } = wp.element;
const {
	      useInstanceId,
      } = wp.compose;

function BlockDefaultValue( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	const [ showModal, setShowModal ] = useState( false );

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
			<Button
				icon={ 'database' }
				variant="tertiary"
				isSmall
				className={ 'jet-fb-is-thick' }
				onClick={ () => setShowModal( true ) }
			/>
			<MacrosFields
				onClick={ name => setAttributes( {
					default: `%${ name }%`,
				} ) }
				title={ 'Form Fields' }
			/>
		</Flex>
		<TextControl
			id={ instanceId }
			value={ attributes.default }
			help={ help ?? '' }
			hideLabelFromVision
			onChange={ val => setAttributes( { default: val } ) }
		/>
		{ showModal && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ __( 'Edit Preset for Dynamic Value', 'jet-form-builder' ) }
			onRequestClose={ () => setShowModal( false ) }
		>
			<DynamicPreset
				key={ 'dynamic_key_preset' }
				value={ attributes.default }
				onSavePreset={ val => setAttributes( { default: val } ) }
			/>
		</ActionModal> }
	</>;
}

export default BlockDefaultValue;