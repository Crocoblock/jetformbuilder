import { useEffect, useContext, useState } from '@wordpress/element';
import { Flex } from '@wordpress/components';

const {
	      ActionModalContext,
	      ValidationMetaMessage,
      } = JetFBComponents;
const {
	      useMetaState,
	      useGroupedValidationMessages,
      } = JetFBHooks;

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ actionClick ] );

	return <Flex gap={ 4 } direction="column">
		{ messages.map( ( message, index ) => <ValidationMetaMessage
			key={ 'message_item' + message.id }
			message={ message }
			messages={ current }
			update={ setCurrent }
			value={ current[ message.id ] }
			className={ index !== 0 ? 'jet-control-full' : '' }
			style={ index !== 0 ? {} : { paddingBottom: '5px' } }
		/> ) }
	</Flex>;
}

export default ValidationModal;