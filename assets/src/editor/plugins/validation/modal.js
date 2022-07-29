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
	      Card,
	      CardBody,
	      CardHeader,
      } = wp.components;
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
		<div className="jet-fb-validation-messages">
			{ messages.map( message => <Card
				key={ 'message_item' + message.id }
				size={ 'extraSmall' }
				className="jet-fb-validation-messages-item"
				elevation={ 2 }
			>
				{ !!message.blocks.length && <CardHeader
					className="jet-fb-validation-messages-item-heading"
				>
					{ __(
						'Used by the following blocks:',
						'jet-form-builder',
					) }
					{ message.blocks.map( block => <span
						key={ 'message_block_item' + block.title }
						className="jet-fb-validation-messages-item-heading-pair"
					>
						<span
							className="jet-fb-validation-messages-item-heading-pair__icon"
						>{ block.icon }</span>
						<span
							className="jet-fb-validation-messages-item-heading-pair__title"
						>{ block.title }</span>
					</span> ) }
				</CardHeader> }
				<CardBody>
					<ValidationMetaMessage
						name={ message.id }
						messages={ current }
						update={ setCurrent }
					/>
				</CardBody>
			</Card> ) }
		</div>
	</>;
}

export default ValidationModal;