import ConditionsModalContent from './conditions.modal.content';

const {
	      ActionModal,
      } = JetFBComponents;

export default function ConditionsModal( props ) {
	const {
		      setShowModal,
	      } = props;

	return <ActionModal
		classNames={ [ 'width-60' ] }
		onRequestClose={ () => setShowModal( false ) }
		title="Conditional Logic"
	>
		<ConditionsModalContent/>
	</ActionModal>;
}