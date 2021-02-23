import Tools from '../helpers/tools';
import GeneralPreset from "../components/presets/general-preset";
import { getAvailableFields } from "../helpers/blocks-helper";

function PresetMeta() {

	const {
		ToggleControl,
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

	const DocumentSettingPanelPreset = () => {

		const meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const [args, setArgs] = useState( JSON.parse( meta._jf_preset || '{}' ) );

		useEffect( () => {

			editPost( {
				meta: ( {
					...meta,
					_jf_preset: JSON.stringify( args )
				} )
			} );

		} );

		const formFields = getAvailableFields();

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-preset' }
				title={ 'Preset Settings' }
			>
				<ToggleControl
					key={ 'enable_preset' }
					label={ 'Enable' }
					checked={ args.enabled }
					help={ 'Check this to enable global form preset' }
					onChange={ newVal => {
						setArgs( ( prevArgs ) => ( {
							...prevArgs,
							enabled: newVal
						} ) );
					} }
				/>
				{ args.enabled && <GeneralPreset
					value={ args }
					onChange={ newVal => {
						setArgs( ( prevArgs ) => ( {
							...prevArgs,
							...newVal,
							enabled: prevArgs.enabled
						} ) );
					} }
					availableFields={ formFields }
				/> }
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-preset-panel', {
		render: DocumentSettingPanelPreset,
		icon: null,
	} );
}

export default PresetMeta;
