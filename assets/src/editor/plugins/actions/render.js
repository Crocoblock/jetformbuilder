import { defaultAction, defaultActions, getRandomID } from './options';
import EditConditions from './edit.conditions';
import { useActionsEdit } from './hooks';
import EditSettingsModal from './edit.settings.modal';

const {
	getFormFieldsBlocks,
} = JetFBActions;

const {
	ActionModal,
	RepeaterWithState,
	FieldWithPreset,
	DynamicPreset,
} = JetFBComponents;

const {
	TextareaControl,
	ToggleControl,
	SelectControl,
	Button,
	Card,
	CardBody,
	CardHeader,
	DropdownMenu,
	Flex,
	FormTokenField,
	BaseControl,
	__experimentalToggleGroupControl: ToggleGroupControl,
	__experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;

const {
	useState,
	useEffect,
} = wp.element;

const { __ } = wp.i18n;

function PluginActions() {
	const [ actions, setActions ] = useActionsEdit();

	useEffect( () => {
		if ( 0 === actions.length ) {
			setActions( defaultActions );
		}
	}, [] );

	return <>
		{ actions && actions.map( ( action, index ) => {

		} ) }
		<div className='jfb-button-group'>
			<Button
				isPrimary
				onClick={ () => {
					setActions( [
						...actions,
						{
							...JSON.parse( JSON.stringify( defaultAction ) ),
							id: getRandomID(),
						},
					] );
				} }
			>
				{ __( '+ New Action', 'jet-form-builder' ) }
			</Button>
			{ (
				  ! JetFormEditorData.isActivePro
			  ) && <Button
				  href={ JetFormEditorData.utmLinks.allProActions }
				  variant='link'
			  >
				  { __( 'All PRO Actions', 'jet-form-builder' ) }
			  </Button> }
		</div>
		{ isEdit && <EditSettingsModal /> }
		{ isEditProcessAction && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ __( 'Edit Action Conditions', 'jet-form-builder' ) }
			onRequestClose={ () => setEditProcessAction( false ) }
			onCancelClick={ () => setEditProcessAction( false ) }
		>
			{ ( { actionClick, onRequestClose } ) => <EditConditions
				actionClick={ actionClick }
				onRequestClose={ onRequestClose }
			/> }
		</ActionModal> }
	</>;
};

export default PluginActions;