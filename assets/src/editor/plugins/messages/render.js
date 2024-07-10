const {
	      TextControl,
      } = wp.components;

const { useMetaState } = JetFBHooks;

function PluginMessages() {

	const [ messages, setMessages ] = useMetaState( '_jf_messages' );

	return <>
		{ Object.entries( JetFormEditorData.messagesDefault ).map(
			( [ type, { label, value } ], id ) => <TextControl
				key={ type + id }
				label={ label }
				value={ messages[ type ] ?? value }
				onChange={ newValue => setMessages( prev => (
					{ ...prev, [ type ]: newValue }
				) ) }
			/>,
		) }
	</>;
}

export default PluginMessages;