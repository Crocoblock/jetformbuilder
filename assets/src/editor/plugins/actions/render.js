import { defaultActions } from './options';
import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';
import ListActionItem from './action.item';

const {
	      useEffect,
	      useState,
	      Children,
	      cloneElement,
      } = wp.element;
const {
	      Button,
	      ExternalLink,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      BaseAction,
      } = JetFBComponents;
const {
	      useActionsEdit,
      } = JetFBHooks;
const {
	      useSelect,
      } = wp.data;

let isSetDefault = false;

function PluginActions() {
	const { actions, setActions } = useActionsEdit();

	const isNewPost = useSelect(
		select => select( 'core/editor' ).isEditedPostNew(),
		[],
	);

	useEffect( () => {
		if ( 0 === actions.length && isNewPost && !isSetDefault ) {
			setActions( defaultActions );
			isSetDefault = true;
		}
	}, [] );

	const elements = actions.map(
		( action, index ) => <ListActionItem
			action={ action }
			index={ index }
		/>,
	);

	return <>
		{ Children.map(
			elements,
			cloneElement,
		) }
		<div className="jet-fb flex jc-space-between">
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
			) && <div className={ 'jet-fb flex-center' }>
				<ExternalLink href={ JetFormEditorData.utmLinks.allProActions }>
					{ __( 'All PRO Actions', 'jet-form-builder' ) }
				</ExternalLink>
			</div> }
		</div>
		<EditSettingsModal/>
		<EditConditionsModal/>
	</>;
}

export default PluginActions;