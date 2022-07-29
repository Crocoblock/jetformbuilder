const { ActionModal }         = JetFBComponents;
const { useEffect, useState } = wp.element;


function ValidationModal( { updateState, setArgs } ) {
	const [ messages, setMessages ] = useState();

	useEffect( () => {
		return () => setArgs( prev => (
			{ ...prev, messages }
		) );
	}, [] );

	return <ActionModal
		title={ 'Edit Manual Options' }
		onRequestClose={ () => updateState( false ) }
		classNames={ [ 'width-60' ] }
	>

	</ActionModal>;
}

export default ValidationModal;