import GatewaysEditor from '../components/gateways-editor';

const { Button, ToggleControl } = wp.components;

const { withDispatch, withSelect } = wp.data;

const { useState, useEffect } = wp.element;

const { __ } = wp.i18n;

const { compose } = wp.compose;

const { ActionModal } = JetFBComponents;

const {
	withDispatchGateways,
	withSelectGateways,
	useMetaState,
} = JetFBHooks;

const gatewaysData = window.JetFormEditorData.gateways;

const MODE_SINGLE = 'single';
const MODE_MANUAL = 'manual';

const getGatewayLabel = ( type ) => {
	return (
		gatewaysData.list.find( el => el.value === type )?.label || type
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

	const [ meta, setMeta ] = useMetaState( '_jf_gateways' );

	const [ isEdit, setEdit ] = useState( false );

	// UI-selected value (can be "manual" without touching meta.gateway)
	const [ selectedGateway, setSelectedGateway ] = useState( meta?.gateway ?? 'none' );

	// which gateway is currently being edited in modal
	const [ editGateway, setEditGateway ] = useState( null );

	const isManualMode = meta?.mode === MODE_MANUAL;

	// keep UI selected in sync with saved meta
	useEffect( () => {
		if ( isManualMode ) {
			setSelectedGateway( MODE_MANUAL );
			return;
		}
		setSelectedGateway( meta?.gateway ?? 'none' );
	}, [ meta?.gateway, meta?.mode ] );

	// bind editor store when modal is open
	useEffect( () => {
		if ( !isEdit ) {
			clearGateway();
			clearScenario();
			return;
		}

		const gw = editGateway || meta?.gateway;

		if ( !gw || gw === 'none' ) {
			return;
		}

		// When manual mode is active, modal opens for "editGateway" only
		if ( isManualMode && !editGateway ) {
			return;
		}

		setGateway( { ...meta, gateway: gw } );
		setGatewayScenario( meta?.[ gw ]?.scenario );
	}, [ isEdit, editGateway ] );

	const closeModal = ( newMeta = false ) => {
		if ( false !== newMeta ) {
			setMeta( newMeta );
		}
		setEdit( false );
		setEditGateway( null );
	};

	const options = [
		{ label: 'None', value: 'none' },
		...gatewaysData.list,
		{ label: 'Manual', value: MODE_MANUAL },
	];

	return (
		<>
			<div className="jfb-gateways">
				{ options.map( ( opt ) => {
					const isSelected = selectedGateway === opt.value;

					// In manual mode: show Edit under EACH gateway
					// Otherwise: show Edit only under the selected gateway
					const canEdit =
						opt.value !== 'none'
						&& opt.value !== MODE_MANUAL
						&& ( isManualMode || isSelected );

					const canToggle =
						isManualMode
						&& opt.value !== 'none'
						&& opt.value !== MODE_MANUAL;

					return (
						<div key={ opt.value } className="jfb-gateways__item">
							<label className="jfb-gateways__option">
								<input
									type="radio"
									name="jfb_gateway"
									value={ opt.value }
									checked={ isSelected }
									onChange={ () => {
										setSelectedGateway( opt.value );

										// Manual mode selected
										if ( opt.value === MODE_MANUAL ) {
											setMeta( {
												...meta,
												mode: MODE_MANUAL,
											} );
											return;
										}

										// Single mode selected
										setMeta( {
											...meta,
											mode: MODE_SINGLE,
											gateway: opt.value,
										} );
									} }
								/>
								<span>{ opt.label }</span>
							</label><br/>

							{ canEdit && (
								<Button
									onClick={ () => {
										setEditGateway( opt.value );
										setEdit( true );
									} }
									icon={ 'admin-tools' }
									style={ { margin: '8px 0' } }
									isSecondary
								>
									{ __( 'Edit', 'jet-form-builder' ) }
								</Button>
							) }

							{ canToggle && (
								<ToggleControl
									label={ __( 'Show on frontend', 'jet-form-builder' ) }
									checked={ !!meta?.[ opt.value ]?.show_on_front }
									onChange={ ( value ) => {
										setMeta( {
											...meta,
											[ opt.value ]: {
												...( meta?.[ opt.value ] || {} ),
												show_on_front: value,
											},
										} );
									} }
									style={ { margin: '8px 0' } }
								/>
							) }
						</div>
					);
				} ) }
			</div>

			{ isEdit && (
				<ActionModal
					classNames={ [ 'width-60' ] }
					onRequestClose={ () => closeModal() }
					onCancelClick={ () => closeModal() }
					onUpdateClick={ () => closeModal( {
						...gatewayGeneral,
						[ gatewayGeneral.gateway ]: {
							...( gatewayGeneral[ gatewayGeneral.gateway ] || {} ),
							scenario: gatewayScenario,
						},
					} ) }
					title={ `Edit ${ getGatewayLabel( editGateway || meta?.gateway ) } Settings` }
				>
					<GatewaysEditor/>
				</ActionModal>
			) }
		</>
	);
}

export default compose(
	withDispatch( withDispatchGateways ),
	withSelect( withSelectGateways ),
)( PluginGateways );
