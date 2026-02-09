const { useBlockProps, RichText } = wp.blockEditor;

const { useMetaState } = JetFBHooks;

const gatewaysData = window?.JetFormEditorData?.gateways;
const MODE_MANUAL = 'manual';

const getGatewayLabel = ( type ) => (
	gatewaysData?.list?.find( el => el.value === type )?.label || type
);

export default function MultiGatewayEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'jfb-multi-gateway',
	} );

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

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h3"
				value={ attributes.title || '' }
				placeholder="Payment options"
				onChange={ ( title ) => setAttributes( { title } ) }
			/>
			<RichText
				tagName="p"
				value={ attributes.description || '' }
				placeholder="Optional text for this form step."
				onChange={ ( description ) => setAttributes( { description } ) }
			/>

			<div className="jfb-multi-gateway__list">
				{ selected.length ? selected.map( ( key, index ) => (
					<label
						key={ key }
						className="jfb-multi-gateway__item"
					>
						<input
							type="radio"
							checked={ index === 0 }
							readOnly
						/>
						<span>{ getGatewayLabel( key ) }</span>
					</label>
				) ) : (
					<div className="jfb-multi-gateway__empty">
						No gateways selected
					</div>
				) }
			</div>
		</div>
	);
}
