import GatewaysEditor from '../components/gateways-editor';

const {
	RadioControl,
	Button,
} = wp.components;

const {
	withDispatch,
	withSelect,
} = wp.data;

const {
	useState,
	useEffect,
} = wp.element;
const {
	__,
} = wp.i18n;
const {
	compose,
} = wp.compose;

const {
	ActionModal,
} = JetFBComponents;
const {
	withDispatchGateways,
	withSelectGateways,
	useMetaState,
} = JetFBHooks;

const gatewaysData = window.JetFormEditorData.gateways;

// check that saved gateway still exists in available gateways list.
const isGatewayAvailable = ( type ) => {
	if ( ! type || 'none' === type ) {
		return true;
	}

	return gatewaysData.list.some( ( el ) => el.value === type );
};

const getGatewayLabel = ( type ) => {
	return (
		gatewaysData.list.find( ( el ) => el.value === type )?.label || 'None'
	);
};

function PluginGateways( props ) {

	const {
		setGateway,
		setGatewayScenario,
		clearGateway,
		clearScenario,
		gatewayGeneral,
		gatewayScenario,
	} = props;

	const [ meta, setMeta ]   = useMetaState( '_jf_gateways' );
	const [ isEdit, setEdit ] = useState( false );

	// reset removed/unavailable gateway to none in editor state.
	useEffect( () => {
		if ( ! isGatewayAvailable( meta?.gateway ) ) {
			setMeta( {
				...meta,
				gateway: 'none',
			} );
		}
	}, [ meta?.gateway ] );

	useEffect( () => {
		if ( isEdit ) {
			setGateway( meta );
			setGatewayScenario(
				meta[ meta.gateway ]?.scenario );
		}
		else {
			clearGateway();
			clearScenario();
		}
	}, [ isEdit ] );

	const closeModal = ( newMeta = false ) => {
		if ( false !== newMeta ) {
			setMeta( newMeta );
		}
		setEdit( false );
	};

	return <>
		<RadioControl
			key={ 'gateways_radio_control' }
			selected={ meta.gateway ?? 'none' }
			options={ [
				{ label: 'None', value: 'none' },
				...gatewaysData.list,
			] }
			onChange={ gateway => {
				setMeta( { ...meta, gateway } );
			} }
		/>
		{ (
			'none' !== meta.gateway &&
			meta.gateway &&
			isGatewayAvailable( meta.gateway )
		) && <Button
			onClick={ () => setEdit( true ) }
			icon={ 'admin-tools' }
			style={ {
				margin: '1em 0',
			} }
			isSecondary
		>
			{ __( 'Edit', 'jet-form-builder' ) }
		</Button> }

		{ isEdit && isGatewayAvailable( meta.gateway ) && (
			<ActionModal
				classNames={ [ 'width-60' ] }
				onRequestClose={ () => closeModal() }
				onCancelClick={ () => closeModal() }
				onUpdateClick={ () => closeModal( {
					...gatewayGeneral,
					[ gatewayGeneral.gateway ]: {
						...(
							gatewayGeneral[ gatewayGeneral.gateway ] || {}
						),
						scenario: gatewayScenario,
					},
				} ) }
				title={ `Edit ${ getGatewayLabel( meta.gateway ) } Settings` }
			>
				<GatewaysEditor/>
			</ActionModal>
		) }
	</>;
}

export default compose(
	withDispatch( withDispatchGateways ),
	withSelect( withSelectGateways ),
)( PluginGateways );