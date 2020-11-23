import Tools from "../tools/tools";

function Messages() {
	const {
		ToggleControl,
		TextControl
	} = wp.components;

	const { __ } = wp.i18n;

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

	const DocumentSettingPanel = () => {

		const meta = useSelect( ( select ) => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		} );

		const {
			editPost
		} = useDispatch( 'core/editor' );


		const [messages, setMessages] = useState( JSON.parse( meta._jf_messages ) );

		useEffect( () => {
			editPost( {
				meta: ( {
					...meta,
					_jf_messages: JSON.stringify( messages )
				} )
			} );

		} );

		const onChangeMessage = ( type, value ) => {
			setMessages(
				Object.assign(
					{},
					messages,
					{ [ type ]: value }
				)
			);
		}

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-messages' }
				title={ 'General Messages Settings' }
			>
				{ Object.entries( messages ).map( ( [type, text], id ) => {
					return <TextControl
						key={ type + id }
						label={ JetFormEditorData.messagesLabels[ type ] }
						value={ text }
						onChange={ newValue => onChangeMessage( type, newValue ) }
					/>;
				} ) }

			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-messages-panel', {
		render: DocumentSettingPanel,
		icon: null,
	} );
}

export default Messages;