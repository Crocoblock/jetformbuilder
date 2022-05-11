import GatewaysEditor from '../../gateways/gateways-editor';

const { __ } = wp.i18n;

const {
		  RadioControl,
		  Button,
		  withFilters,
	  } = wp.components;

const {
		  withDispatch,
		  withSelect,
	  } = wp.data;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const { applyFilters } = wp.hooks;

const { compose } = wp.compose;

const { ActionModal } = JetFBComponents;

const {
		  withDispatchMeta,
		  withSelectMeta,
		  withDispatchGateways,
		  withSelectGateways,
	  } = JetFBHooks;

const gatewaysData = window.JetFormEditorData.gateways;

const getGatewayLabel = ( type ) => {
	return (
		gatewaysData.list.find( el => el.value === type ).label
	);
};

function PluginGateways( props ) {

	const {
			  _jf_gateways: GatewaysMeta,
			  _jf_actions: ActionsMeta,
			  ChangeGateway,
			  setGateway,
			  setGatewayScenario,
			  clearGateway,
			  clearScenario,
			  gatewayGeneral,
			  gatewayScenario,
		  } = props;

	const issetActionType = type => {
		return Boolean( ActionsMeta.find( action => type === action.type ) );
	};

	const getDisabledStateButton = () => {
		return applyFilters( 'jet.fb.gateways.getDisabledStateButton', ! issetActionType( 'insert_post' ), props, issetActionType );
	};

	const getDisabledInfo = () => {
		return applyFilters(
			'jet.fb.gateways.getDisabledInfo',
			<p>{ __( 'Please add \`Insert/Update Post\` action', 'jet-form-builder' ) }</p>,
			props,
		);
	};

	const isIssetGateway = () => {
		return - 1 !== gatewaysData.list.findIndex( gateway => GatewaysMeta.gateway === gateway.value );
	};

	const [ isEdit, setEdit ] = useState( false );
	const [ isDisabled, setDisabled ] = useState( getDisabledStateButton );
	const [ disabledInfo, setDisabledInfo ] = useState( getDisabledInfo );
	const [ issetGateway, setIssetGateway ] = useState( isIssetGateway );

	useEffect( () => {
		if ( isEdit ) {
			setGateway( GatewaysMeta );
			setGatewayScenario( GatewaysMeta[ GatewaysMeta.gateway ]?.scenario );

			document.dispatchEvent( JetFBMigrateEvent );

		} else {
			clearGateway();
			clearScenario();
		}
	}, [ isEdit ] );


	const closeModal = ( newMeta = false ) => {
		if ( false !== newMeta ) {
			ChangeGateway( newMeta );
		}
		setEdit( false );
	};

	useEffect( () => {
		setDisabled( getDisabledStateButton() );
		setDisabledInfo( getDisabledInfo() );
		setIssetGateway( isIssetGateway() );
	}, [ GatewaysMeta.gateway, ActionsMeta ] );

	return <>
		<RadioControl
			key={ 'gateways_radio_control' }
			selected={ GatewaysMeta.gateway }
			options={ [
				{ label: 'None', value: 'none' },
				...gatewaysData.list,
			] }
			onChange={ val => {
				ChangeGateway( {
					...GatewaysMeta,
					gateway: val,
				} );
			} }
		/>
		{ (
			GatewaysMeta.gateway && 'none' !== GatewaysMeta.gateway && issetGateway
		) && <>
			<Button
				onClick={ () => setEdit( true ) }
				icon={ 'admin-tools' }
				style={ {
					margin: '1em 0',
				} }
				isSecondary
				disabled={ isDisabled }
			>
				{ __( 'Edit' ) }
			</Button>
			{ isDisabled && disabledInfo }
		</> }
		{ isEdit && (
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
				title={ `Edit ${ getGatewayLabel( GatewaysMeta.gateway ) } Settings` }
			>
				<GatewaysEditor/>
			</ActionModal>
		) }
	</>;
}

export default compose(
	withDispatch( ( ...props ) => (
		{
			...withDispatchMeta( '_jf_gateways', 'ChangeGateway' )( ...props ),
			...withDispatchGateways( ...props ),
		}
	) ),
	withSelect( ( ...props ) => (
		{
			...withSelectGateways( ...props ),
			...withSelectMeta( '_jf_gateways' )( ...props ),
			...withSelectMeta( '_jf_actions' )( ...props ),

		}
	) ),
)( PluginGateways );
