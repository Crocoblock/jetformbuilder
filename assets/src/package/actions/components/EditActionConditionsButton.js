import useLoopedAction from '../hooks/useLoopedAction';

const {
	      __,
      } = wp.i18n;

const {
	      useDispatch,
      } = wp.data;

const {
	      Button,
      } = wp.components;

function EditActionConditionsButton() {
	const { action, index } = useLoopedAction();

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions', [] );

	const conditionsIcon = action?.conditions?.length ? <span
		className="dashicon dashicons dashicons-randomize"
		data-count={ action?.conditions.length }
	/> : <span className="dashicon dashicons dashicons-randomize"/>;

	return <Button
		className={ 'jet-fb-button' }
		icon={ conditionsIcon }
		label={ __(
			'Edit Conditions & Events',
			'jet-form-builder',
		) }
		onClick={ () => {
			setCurrentAction( { ...action, index } );
			setMeta( { index, modalType: 'conditions' } );
		} }
	/>;
}

export default EditActionConditionsButton;