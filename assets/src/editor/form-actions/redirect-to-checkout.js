const {
		  Tools: { withPlaceholder },
		  addAction,
		  getFormFieldsBlocks,
	  } = JetFBActions;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
		  RepeaterWithState,
		  ActionModal,
	  } = JetFBComponents;

const {
		  RadioControl,
		  TextControl,
		  BaseControl,
		  SelectControl,
		  Button,
	  } = wp.components;

const addNewOption = {
	type: 'field',
	label: '',
	field: '',
};

addAction(
	'redirect_to_woo_checkout',
	function RedirectToWooCheckout( {
										settings,
										source,
										label,
										help,
										onChangeSetting,
										setSource,
									} ) {
		const [ formFields, setFormFields ] = useState( [] );
		const [ wcFields, setWcFields ] = useState( [] );
		const [ wcDetailsModal, setWcDetailsModal ] = useState( true );
		const [ isLoading, setLoading ] = useState( false );

		useEffect( () => {
			const wcColumnsMap = {};
			source.wc_fields.forEach( col => {
				wcColumnsMap[ col ] = { label: col };
			} );

			setWcFields( Object.entries( wcColumnsMap ) );
			setFormFields( getFormFieldsBlocks( [], '--' ) );

			if ( ! settings.product_id_from ) {
				onChangeSetting( 'manual', 'product_id_from' );
			}
		}, [] );

		function saveWCDetails( items ) {
			setLoading( true );

			jQuery.ajax( {
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					post_id: source.post_id,
					action: source.action,
					nonce: source.nonce,
					details: items,
				},
			} ).done( function( response ) {
				setLoading( false );

				if ( ! response.success ) {
					alert( response.data.message );
				} else {
					JetActionWooCheckout.details = items;
					//setSource( { details: items } );
					setWcDetailsModal( false );
				}

			} ).fail( function( jqXHR, textStatus, errorThrown ) {
				setLoading( false );
				alert( errorThrown );
			} );
		}

		return <>
			<BaseControl label={ label( 'product_id_from' ) }>
				<RadioControl
					className='jet-control-clear-full'
					options={ source.product_id_from }
					selected={ settings.product_id_from }
					onChange={ newVal => onChangeSetting( newVal, 'product_id_from' ) }
				/>
			</BaseControl>
			{ 'manual' === settings.product_id_from && <TextControl
				label={ label( 'product_id_manual' ) }
				value={ settings.product_id_manual }
				onChange={ val => onChangeSetting( val, 'product_id_manual' ) }
			/> }
			{ 'field' === settings.product_id_from && <SelectControl
				label={ label( 'product_id_field' ) }
				labelPosition="side"
				value={ settings.product_id_field }
				options={ formFields }
				onChange={ newVal => onChangeSetting( newVal, 'product_id_field' ) }
			/> }
			<SelectControl
				label={ label( 'wc_price' ) }
				help={ help( 'wc_price' ) }
				labelPosition='side'
				value={ settings.wc_price }
				onChange={ val => onChangeSetting( val, 'wc_price' ) }
				options={ formFields }
			/>
			<TextControl
				label={ label( 'wc_heading_order_details' ) }
				value={ settings.wc_heading_order_details }
				onChange={ val => onChangeSetting( val, 'wc_heading_order_details' ) }
			/>
			<BaseControl
				label={ label( 'wc_order_details' ) }
				help={ help( 'wc_order_details' ) }
			>
				<Button
					isSecondary
					onClick={ () => setWcDetailsModal( true ) }
				>{ 'Set up' }</Button>
			</BaseControl>
			<ActionFieldsMap
				label={ label( 'wc_fields_map' ) }
				fields={ wcFields }
				plainHelp={ help( 'wc_fields_map' ) }
			>
				{ ( { fieldId, fieldData, index } ) => <WrapperRequiredControl
					field={ [ fieldId, fieldData ] }
				>
					<SelectControl
						key={ fieldId + index }
						labelPosition='side'
						value={ settings[ `wc_fields_map__${ fieldId }` ] }
						onChange={ val => onChangeSetting( val, `wc_fields_map__${ fieldId }` ) }
						options={ formFields }
					/>
				</WrapperRequiredControl> }
			</ActionFieldsMap>
			{ wcDetailsModal && <ActionModal
				title={ 'Set up WooCommerce order details' }
				onRequestClose={ () => setWcDetailsModal( false ) }
				classNames={ [ 'width-60' ] }
				updateBtnProps={ { isBusy: isLoading } }
			>
				{ ( { actionClick, onRequestClose } ) => <RepeaterWithState
					items={ source.details }
					onSaveItems={ saveWCDetails }
					newItem={ addNewOption }
					onUnMount={ () => {
						if ( ! actionClick ) {
							onRequestClose();
						}
					} }
					isSaveAction={ actionClick }
					addNewButtonLabel={ isLoading ? 'Saving...' : 'Add new item +' }
				>
					{ ( { currentItem, changeCurrentItem } ) => <>
						<TextControl
							label={ label( 'wc_details__label' ) }
							value={ currentItem.label }
							onChange={ label => changeCurrentItem( { label } ) }
						/>
						<SelectControl
							label={ label( 'wc_details__field' ) }
							labelPosition='side'
							value={ currentItem.field }
							onChange={ field => changeCurrentItem( { field } ) }
							options={ formFields }
						/>
					</> }
				</RepeaterWithState> }
			</ActionModal> }
		</>;
	} );