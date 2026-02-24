const { useBlockProps, RichText } = wp.blockEditor;
const { __ } = wp.i18n;
const { Tooltip } = wp.components;
const { useMetaState } = JetFBHooks;

const gatewaysData = window?.JetFormEditorData?.gateways;
const MODE_MANUAL = 'manual';

const getGatewayLabel = ( type ) => (
	gatewaysData?.list?.find( el => el.value === type )?.label || type
);

export default function MultiGatewayEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	const [ meta ] = useMetaState( '_jf_gateways' );

	const mode = meta?.mode || 'single';

	let selected = [];

	if ( mode === MODE_MANUAL ) {
		selected = ( gatewaysData?.list || [] )
			.map( ( { value } ) => value )
			.filter( ( key ) => !!meta?.[ key ]?.show_on_front );
	} else {
		const gw = meta?.gateway;
		if ( gw && gw !== 'none' ) {
			selected = [ gw ];
		}
	}

	const gatewaysSettings = attributes.gatewaysSettings || {};

	const updateGatewaySetting = ( key, field, value ) => {
		setAttributes( {
			gatewaysSettings: {
				...gatewaysSettings,
				[ key ]: {
					...( gatewaysSettings[ key ] || {} ),
					[ field ]: value,
				},
			},
		} );
	};

	const gatewayValidityMap = {};

	selected.forEach( ( key ) => {
		gatewayValidityMap[ key ] =
			typeof JetFBActions?.isGatewayValid === 'function'
				? JetFBActions.isGatewayValid( key, meta )
				: true;
	} );

	return (
		<div { ...blockProps }>
			<div className="jfb-multi-gateway">
				<RichText
					tagName="h3"
					className="jfb-multi-gateway__title"
					value={ attributes.title || '' }
					placeholder="Optional: add a heading for payment options…"
					onChange={ ( title ) => setAttributes( { title } ) }
				/>

				<RichText
					tagName="p"
					className="jfb-multi-gateway__desc"
					value={ attributes.description || '' }
					placeholder="Optional: add a short description for this step…"
					onChange={ ( description ) => setAttributes( { description } ) }
				/>

				{ selected.length ? (
					<div className="jfb-multi-gateway__list">
						{ selected.map( ( key, index ) => {
							const saved = gatewaysSettings?.[ key ] || {};

							const itemLabel = ( typeof saved.label === 'string' )
								? saved.label
								: getGatewayLabel( key );

							const itemDesc = ( typeof saved.description === 'string' )
								? saved.description
								: '';

							const isValid = gatewayValidityMap[ key ];

							return (
								<label
									key={ key }
									className={ `
										jfb-multi-gateway__item
										${ ! isValid ? 'jfb-multi-gateway__item--invalid' : '' }
									` }
									onClickCapture={ ( e ) => {
										if ( e.target?.closest?.( '[contenteditable="true"]' ) ) {
											e.preventDefault();
											e.stopPropagation();
										}
									} }
								>
									<input
										type="radio"
										className="jet-form-builder__field"
										checked={ index === 0 }
										readOnly
									/>

									<div
										className="jfb-multi-gateway__content"
										onMouseDown={ ( e ) => {
											if ( ! e.target?.closest?.( '[contenteditable="true"]' ) ) {
												e.preventDefault();
											}
										} }
									>
										<div className="jfb-multi-gateway__label-row">
											<RichText
												tagName="div"
												className="jfb-multi-gateway__label"
												value={ itemLabel }
												placeholder={ getGatewayLabel( key ) }
												onChange={ ( value ) =>
													updateGatewaySetting( key, 'label', value )
												}
											/>

											{ ! isValid && (
												<Tooltip
													text={ __(
														'This gateway is not configured. Please use the Edit button in the Gateways settings to set up this gateway.',
														'jet-form-builder'
													) }
												>
													<span
														className="jfb-multi-gateway__warning"
														onMouseDown={ ( e ) => e.preventDefault() }
													>
														<span className="dashicons dashicons-warning" />
													</span>
												</Tooltip>
											) }
										</div>

										<div className="jfb-multi-gateway__description">
											<div>
												<RichText
													tagName="span"
													value={ itemDesc }
													placeholder="You can add description here"
													onChange={ ( value ) =>
														updateGatewaySetting( key, 'description', value )
													}
												/>
											</div>
										</div>
									</div>
								</label>
							);
						} ) }
					</div>
				) : (
					<div className="jfb-multi-gateway__empty">
						No gateways selected
					</div>
				) }
			</div>
		</div>
	);
}
