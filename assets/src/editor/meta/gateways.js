import Tools from "../tools";
import ActionModal from "../components/action-modal";
import GatewaysEditor from "../gateways/gateways-editor";


const { __ } = wp.i18n;

const {
	ToggleControl,
	TextareaControl,
	TextControl,
	CheckboxControl,
	SelectControl,
	BaseControl,
	RadioControl,
	Button,
	Modal,
	Text,
} = wp.components;

const {
	registerPlugin
} = wp.plugins;

const {
	PluginDocumentSettingPanel
} = wp.editPost;

const {
	useSelect,
	useDispatch
} = wp.data;

const {
	useState,
	useEffect
} = wp.element;

function Gateways() {

	if ( ! window.JetFormEditorData.gateways.allowed ) {
		return;
	}

	const DocumentSettingPanelGateways = () => {

		const meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const gatewaysProps = {
			activeActions: JSON.parse( meta._jf_actions ),
			gatewaysArgs: JSON.parse( meta._jf_gateways || '{}' ),
		};

		const [isEdit, setEdit] = useState( false );

		const closeModal = () => {
			setEdit( false );
		};

		const saveArgs = newArgs => {
			editPost( {
				meta: ( {
					...meta,
					_jf_gateways: JSON.stringify( newArgs )
				} )
			} );
		};

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-gateways' }
				title={ 'Gateways Settings' }
				key={ 'jf-gateways-panel' }
			>
				<div
					key='jet-form/manage-gateways'
					style={ {
						textAlign: 'center'
					} }
				>
					<Button
						isSecondary
						onClick={ () => setEdit( true ) }
						icon={ 'admin-tools' }
						style={ {
							marginBottom: '15px'
						} }
					>
						{ __( 'Manage Items' ) }
					</Button>
					{ isEdit && (
						<ActionModal
							classNames={ ['width-60'] }
							onRequestClose={ closeModal }
							title={ 'Edit Gateway Settings' }
						>
							{ ( { actionClick, onRequestClose } ) => <>
								<GatewaysEditor
									{ ...gatewaysProps }
									isSaveAction={ actionClick }
									onUnMount={ onRequestClose }
									onSaveItems={ saveArgs }
								/>
							</> }
						</ActionModal> ) }
				</div>
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-gateways-panel', {
		render: DocumentSettingPanelGateways,
		icon: null,
	} );
}

export default Gateways;
