const {
	      ActionModalContext,
	      ValidationMetaMessage,
      } = JetFBComponents;
const {
	      useMetaState,
	      useGroupedValidationMessages,
      } = JetFBHooks;
const {
	      useEffect,
	      useState,
	      useContext,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

function ValidationModal() {
	const [ args, setArgs ] = useMetaState(
		'_jf_validation', '{}', [],
	);

	const messages = useGroupedValidationMessages();

	const [ current, setCurrent ]         = useState( () => (
		args.messages ?? {}
	) );
	const { actionClick, onRequestClose } = useContext( ActionModalContext );

	useEffect( () => {
		if ( actionClick ) {
			setArgs( prev => (
				{ ...prev, messages: current }
			) );
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
	}, [ actionClick ] );

	return <>
		<div className="jet-fb-validation-messages jet-control-clear-full">
			{ messages.map( ( message, index ) => <ValidationMetaMessage
				key={ 'message_item' + message.id }
				message={ message }
				messages={ current }
				update={ setCurrent }
				value={ current[ message.id ] }
				className={ index !== 0 ? 'jet-control-full' : '' }
				style={ index !== 0 ? {} : { paddingBottom: '5px' } }
			/> ) }
		</div>
	</>;
}

export default ValidationModal;