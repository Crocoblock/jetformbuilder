import ConditionsModalContent from './conditions.modal.content';

const {
	      ActionModal,
      } = JetFBComponents;

const { __ } = wp.i18n;

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