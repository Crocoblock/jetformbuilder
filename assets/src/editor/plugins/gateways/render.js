import GatewaysEditor from "../../gateways/gateways-editor";

const { __ } = wp.i18n;

const {
	RadioControl,
	Button,
} = wp.components;

const {
	useSelect,
	useDispatch
} = wp.data;

const {
	useState,
	useEffect
} = wp.element;

const { ActionModal } = JetFBComponents;

function PluginGateways() {
	const gatewaysData = window.JetFormEditorData.gateways;

	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost
	} = useDispatch( 'core/editor' );

	const gatewaysProps = {
		activeActions: JSON.parse( meta._jf_actions ),
		gatewaysArgs: JSON.parse( meta._jf_gateways || '{}' ),
	};

	const [ gateway, setGateway ] = useState( gatewaysProps.gatewaysArgs.gateway );

	const [ isEdit, setEdit ] = useState( false );

	const closeModal = () => {
		setEdit( false );
	};

	const getGatewayLabel = ( type ) => {
		return ( gatewaysData.list.find( el => el.value === type ).label );
	};

	const saveArgs = newArgs => {
		editPost( {
			meta: ( {
				...meta,
				_jf_gateways: JSON.stringify( newArgs )
			} )
		} );
	};

	const saveGateway = type => {
		gatewaysProps.gatewaysArgs.gateway = type;

		editPost( {
			meta: ( {
				...meta,
				_jf_gateways: JSON.stringify( gatewaysProps.gatewaysArgs )
			} )
		} );
	}

	const issetActionType = type => {
		return Boolean( gatewaysProps.activeActions.find( action => type === action.type ) );
	};

	const isDisabled = ! issetActionType( 'insert_post' );

	useEffect( () => {
		saveGateway( gateway );
	}, [ gateway ] );

	return <>
		<RadioControl
			key={ 'gateways_radio_control' }
			selected={ gateway }
			options={ [
				{ label: 'None', value: 'none' },
				...gatewaysData.list
			] }
			onChange={ setGateway }
		/>
		{ ( gateway && 'none' !== gateway ) && <>
			<Button
				onClick={ () => setEdit( true ) }
				icon={ 'admin-tools' }
				style={ {
					margin: '1em 0'
				} }
				isSecondary
				disabled={ isDisabled }
			>
				{ __( 'Edit' ) }
			</Button>
			{ isDisabled && <p>{ __( 'Please add \`Insert/Update Post\` action', 'jet-form-builder' ) }</p> }
		</> }
		{ isEdit && (
			<ActionModal
				classNames={ [ 'width-60' ] }
				onRequestClose={ closeModal }
				title={ `Edit ${ getGatewayLabel( gateway ) } Settings` }
			>
				{ ( { actionClick, onRequestClose } ) => <>
					<GatewaysEditor
						{ ...gatewaysProps }
						isSaveAction={ actionClick }
						onUnMount={ onRequestClose }
						onSaveItems={ saveArgs }
					/>
				</> }
			</ActionModal> ) }
	</>;
}


export default PluginGateways;
