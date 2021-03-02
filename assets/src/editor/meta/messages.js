import Tools from "../helpers/tools";

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

	const DocumentSettingPanelMessages = () => {

		const meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const getDefaultMessagesValues = () => {
			const defaults = {};
			Object.entries( JetFormEditorData.messagesDefault ).forEach( ( [ type, data ] ) => {
				defaults[ type ] = data.value;
			} );

			return defaults;
		}

		const [ messages, setMessages ] = useState( () => {
			const metaMessages = JSON.parse( meta._jf_messages || '{}' );
			return Tools.isEmptyObject( metaMessages ) ? getDefaultMessagesValues() : metaMessages;
		} );

		useEffect( () => {
			editPost( {
				meta: ( {
					...meta,
					_jf_messages: JSON.stringify( messages )
				} )
			} );

		} );

		const onChangeMessage = ( type, value ) => {
			setMessages( prev => ( { ...prev, [ type ]: value } ) );
		}

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-messages' }
				title={ 'General Messages Settings' }
			>
				{ Object.entries( messages ).map( ( [ type, text ], id ) => {
					return JetFormEditorData.messagesDefault[ type ] && <TextControl
						key={ type + id }
						label={ JetFormEditorData.messagesDefault[ type ].label }
						value={ text }
						onChange={ newValue => onChangeMessage( type, newValue ) }
					/>;
				} ) }

			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-messages-panel', {
		render: DocumentSettingPanelMessages,
		icon: null,
	} );
}

export default Messages;