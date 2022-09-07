import ActionModal from '../../action-modal/components/ActionModal';
import DynamicPreset from './DynamicPreset';

const {
	      __,
      } = wp.i18n;
const {
	      Button,
      } = wp.components;
const {
	      useState,
      } = wp.element;

function PresetButton( { value, onChange, title } ) {

	const [ showModal, setShowModal ] = useState( false );

	return <>
		<Button
			icon={ 'database' }
			variant="tertiary"
			isSmall
			className={ 'jet-fb-is-thick' }
			onClick={ () => setShowModal( true ) }
		/>
		{ showModal && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ title ?? __( 'Edit Preset', 'jet-form-builder' ) }
			onRequestClose={ () => setShowModal( false ) }
		>
			<DynamicPreset
				key={ 'dynamic_key_preset' }
				value={ value }
				onSavePreset={ onChange }
			/>
		</ActionModal> }
	</>;
}

export default PresetButton;