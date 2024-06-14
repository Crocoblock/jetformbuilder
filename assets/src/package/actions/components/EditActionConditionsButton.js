import useLoopedAction from '../hooks/useLoopedAction';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';

function EditActionConditionsButton() {
	const { action, index } = useLoopedAction();

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions' );

	const conditionsIcon = action?.conditions?.length ? <span
		className="dashicon dashicons dashicons-randomize"
		data-count={ action?.conditions.length }
	/> : <span className="dashicon dashicons dashicons-randomize"/>;

	return <Button
		size="small"
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