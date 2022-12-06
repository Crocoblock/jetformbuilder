import { defaultActions } from './options';
import { useActionsEdit } from './hooks';
import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';
import ListActionItem from './action.item';

const {
	      useEffect,
      } = wp.element;
const {
	      Button,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      BaseAction,
      } = JetFBComponents;

function PluginActions() {
	const { actions, setActions } = useActionsEdit();

	useEffect( () => {
		if ( 0 === actions.length ) {
			setActions( defaultActions );
		}
	}, [] );

	return <>
		{ actions && actions.map( ( action, index ) => <ListActionItem
			key={ action.id }
			action={ action }
			index={ index }
		/> ) }
		<div className="jet-fb-control flex jc-space-between">
			<Button
				isPrimary
				onClick={ () => {
					setActions( [ ...actions, { ...new BaseAction() } ] );
				} }
			>
				{ __( '+ New Action', 'jet-form-builder' ) }
			</Button>
			{ (
				!JetFormEditorData.isActivePro
			) && <Button
				href={ JetFormEditorData.utmLinks.allProActions }
				variant="link"
			>
				{ __( 'All PRO Actions', 'jet-form-builder' ) }
			</Button> }
		</div>
		<EditSettingsModal/>
		<EditConditionsModal/>
	</>;
}

export default PluginActions;