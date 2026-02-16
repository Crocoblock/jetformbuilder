import GatewaysEditor from '../components/gateways-editor';

const {
	Button,
	ToggleControl,
	Notice,
	__experimentalItemGroup: ItemGroup,
	__experimentalItem: Item,
} = wp.components;

const { withDispatch, withSelect, useSelect, dispatch } = wp.data;
const { useState, useEffect } = wp.element;
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { createBlock } = wp.blocks;

const { ActionModal } = JetFBComponents;

const {
	withDispatchGateways,
	withSelectGateways,
	useMetaState,
} = JetFBHooks;

const gatewaysData = window.JetFormEditorData.gateways;

const MODE_SINGLE = 'single';
const MODE_MANUAL = 'manual';

const MULTI_GATEWAY_BLOCK = 'jet-forms/multi-gateway';

const getGatewayLabel = ( type ) => {
	return gatewaysData.list.find( el => el.value === type )?.label || type;
};

const hasBlockRecursive = ( blocks, name ) => {
	for ( const block of blocks ) {
		if ( block.name === name ) {
			return true;
		}
		if ( block.innerBlocks?.length && hasBlockRecursive( block.innerBlocks, name ) ) {
			return true;
		}
	}
	return false;
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

	const hasMultiGatewayBlock = useSelect(
		( select ) => {
			const editor = select( 'core/block-editor' );
			if ( !editor?.getBlocks ) {
				return false;
			}
			return hasBlockRecursive( editor.getBlocks(), MULTI_GATEWAY_BLOCK );
		},
		[]
	);

	const insertMultiGatewayBlock = () => {
		dispatch( 'core/block-editor' ).insertBlocks(
			createBlock( MULTI_GATEWAY_BLOCK )
		);
	};

	useEffect( () => {
		if ( isManualMode ) {
			setSelectedGateway( MODE_MANUAL );
			return;
		}
		setSelectedGateway( meta?.gateway ?? 'none' );
	}, [ meta?.gateway, meta?.mode ] );

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

	const styles = {
		row: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			width: '100%',
		},
		item: {
			display: 'flex',
			minHeight: '50px',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		toggle: {
			paddingTop: '10px',
			flexDirection: 'column',
		},
		notice: {
			marginTop: '10px',
		},
		notice__btn: {
			marginLeft: '0',
		}
	};

	return (
		<>
			<ItemGroup className="jfb-gateways" isBordered isSeparated>
				{ options.map( ( opt ) => {
					const isSelected = selectedGateway === opt.value;

					const canEdit =
						opt.value !== 'none'
						&& opt.value !== MODE_MANUAL
						&& ( isManualMode || isSelected );

					const canToggle =
						isManualMode
						&& opt.value !== 'none'
						&& opt.value !== MODE_MANUAL;

					return (
						<Item
							key={ opt.value }
							className="jfb-gateways__item"
							style={ styles.item }
						>
							<div className="jfb-gateways__row" style={ styles.row }>
								<label className="jfb-gateways__option">
									<input
										type="radio"
										name="jfb_gateway"
										value={ opt.value }
										checked={ isSelected }
										onChange={ () => {
											setSelectedGateway( opt.value );

											if ( opt.value === MODE_MANUAL ) {
												setMeta( { ...meta, mode: MODE_MANUAL } );
												return;
											}

											setMeta( {
												...meta,
												mode: MODE_SINGLE,
												gateway: opt.value,
											} );
										} }
									/>
									<span className="jfb-gateways__label">{ opt.label }</span>
								</label>

								<div className="jfb-gateways__actions">
									{ canEdit ? (
										<Button
											onClick={ () => {
												setEditGateway( opt.value );
												setEdit( true );
											} }
											icon="admin-tools"
											isSecondary
											size="small"
										>
											{ __( 'Edit', 'jet-form-builder' ) }
										</Button>
									) : (
										// spacer to prevent jumps
										<span className="jfb-gateways__edit-spacer" aria-hidden="true" />
									) }
								</div>
							</div>

							{ canToggle && (
								<div className="jfb-gateways__toggle" style={ styles.toggle }>
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
									/>
								</div>
							) }

							{ opt.value === MODE_MANUAL && isManualMode && !hasMultiGatewayBlock && (
								<div className="jfb-gateways__notice" style={ styles.notice }>
									<Notice
										status="warning"
										isDismissible={ false }
									>

										<div>
											{ __(
												'To display gateways on the frontend in Manual mode, add the Multi Gateway block to the form.',
												'jet-form-builder'
											) }
										</div>

										<Button
											isSecondary
											onClick={ insertMultiGatewayBlock }
											size="small"
											style={ styles.notice__btn }
										>
											{ __( 'Add block', 'jet-form-builder' ) }
										</Button>

									</Notice>
								</div>
							) }
						</Item>
					);
				} ) }
			</ItemGroup>

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
