const {
	      getFormFieldsBlocks,
      } = JetFBActions;

const {
	      AdvancedModalControl,
      } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
	      TextControl,
	      ToggleControl,
	      SelectControl,
	      BaseControl,
	      CheckboxControl,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
	      useEffect,
      } = wp.element;

const { withRequestFields } = JetFBHooks;

const { withSelect } = wp.data;

const { applyFilters } = wp.hooks;

function RedirectToPageRender( props ) {

	const {
		      source,
		      label,
		      settings,
		      onChangeSetting,
		      onChangeSettingObj,
		      requestFields,
	      } = props;

	const [ typePages, setTypePages ] = useState( source.redirect_types );
	const [ fields, setFields ]       = useState( [] );

	useEffect( () => {
		const hasInserted = requestFields.findIndex(
			field => 'inserted_post_id' === field.value );

		if ( -1 === hasInserted ) {
			setTypePages(
				prev => prev.filter( type => 'inserted_post' !== type.value ) );
		}

		const filterTypes = applyFilters( 'jet.fb.redirect_to_page.types', [],
			props );

		if ( filterTypes.length ) {
			setTypePages( prev => (
				[ ...prev, ...filterTypes ]
			) );
		}

		setFields( [ ...getFormFieldsBlocks(), ...requestFields ] );
	}, [] );

	const isChecked = function ( name ) {
		const args_fields = Array.from( settings.redirect_args || [] );

		return Boolean( args_fields.includes( name ) );
	};

	const onChangeRedirectArgs = function ( value, field_name ) {
		let redirect_args = Array.from( settings.redirect_args || [] );

		if ( !value ) {
			const field_id = redirect_args.indexOf( field_name );

			redirect_args.splice( field_id, 1 );
		}
		else {
			redirect_args.push( field_name );
		}

		onChangeSettingObj( { redirect_args } );
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<div key="redirect_to_page">
			<SelectControl
				className="full-width"
				key="redirect_type"
				label={ label( 'redirect_type' ) }
				labelPosition="side"
				value={ settings.redirect_type }
				options={ typePages }
				onChange={ redirect_type => onChangeSettingObj(
					{ redirect_type } ) }
			/>
			{ 'static_page' === settings.redirect_type && <SelectControl
				key="redirect_type_page"
				className="full-width"
				label={ label( 'redirect_page' ) }
				labelPosition="side"
				value={ settings.redirect_page }
				options={ source.pages }
				onChange={ redirect_page => onChangeSettingObj(
					{ redirect_page } ) }
			/> }

			{ 'custom_url' === settings.redirect_type && <AdvancedModalControl
				value={ settings.redirect_url }
				label={ label( 'redirect_url' ) }
				macroWithCurrent
				onChangePreset={ redirect_url => onChangeSettingObj(
					{ redirect_url },
				) }
				onChangeMacros={ name => onChangeSettingObj( {
					redirect_url: (
						settings.redirect_url ?? ''
					) + name,
				} ) }
			>
				{ ( { instanceId } ) => <TextControl
					id={ instanceId }
					value={ settings.redirect_url }
					onChange={ redirect_url => onChangeSettingObj(
						{ redirect_url },
					) }
				/> }
			</AdvancedModalControl> }
			<BaseControl
				label={ label( 'redirect_args' ) }
				key="redirect_args_control"
			>
				<div className="jet-user-fields-map__list">
					{ fields.map( ( { name }, index ) => <CheckboxControl
							key={ `checkbox_args_${ name }_${ index }` }
							label={ name }
							checked={ isChecked( name ) }
							onChange={ newVal => onChangeRedirectArgs( newVal,
								name ) }
						/>,
					) }
				</div>
			</BaseControl>
			<TextControl
				key="redirect_hash_control"
				label={ label( 'redirect_hash' ) }
				value={ settings.redirect_hash }
				onChange={ redirect_hash => onChangeSettingObj(
					{ redirect_hash } ) }
			/>
			<ToggleControl
				key="open_in_new_tab"
				label={ label( 'open_in_new_tab' ) }
				help="Works with AJAX submit type only."
				checked={ settings.open_in_new_tab || false }
				onChange={
					open_in_new_tab => onChangeSettingObj( { open_in_new_tab } )
				}
			/>
		</div>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withSelect( withRequestFields )( RedirectToPageRender );

