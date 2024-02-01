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
	      SelectControl,
	      BaseControl,
	      CheckboxControl,
      } = wp.components;

const {
	      useState,
	      useEffect,
      } = wp.element;

const { withRequestFields } = JetFBHooks;
const { withSelect }        = wp.data;
const { applyFilters }      = wp.hooks;

// eslint-disable-next-line max-lines-per-function, complexity
function RedirectToPageRender( props ) {

	const {
		      source,
		      label,
		      settings,
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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const isChecked = function ( name ) {
		const argsFields = Array.from( settings.redirect_args || [] );

		return Boolean( argsFields.includes( name ) );
	};

	const onChangeRedirectArgs = function ( value, fieldName ) {
		const redirectArgs = Array.from( settings.redirect_args || [] );

		if ( !value ) {
			const fieldId = redirectArgs.indexOf( fieldName );

			redirectArgs.splice( fieldId, 1 );
		}
		else {
			redirectArgs.push( fieldName );
		}

		onChangeSettingObj( { redirect_args: redirectArgs } );
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
				onChange={ val => onChangeSettingObj(
					{ redirect_type: val },
				) }
			/>
			{ 'static_page' === settings.redirect_type && <SelectControl
				key="redirect_type_page"
				className="full-width"
				label={ label( 'redirect_page' ) }
				labelPosition="side"
				value={ settings.redirect_page }
				options={ source.pages }
				onChange={ val => onChangeSettingObj(
					{ redirect_page: val },
				) }
			/> }

			{ 'custom_url' === settings.redirect_type && <AdvancedModalControl
				value={ settings.redirect_url }
				label={ label( 'redirect_url' ) }
				macroWithCurrent
				onChangePreset={ val => onChangeSettingObj(
					{ redirect_url: val },
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
					onChange={ val => onChangeSettingObj(
						{ redirect_url: val },
					) }
				/> }
			</AdvancedModalControl> }
			{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */}
			<BaseControl
				label={ label( 'redirect_args' ) }
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
				onChange={ val => onChangeSettingObj(
					{ redirect_hash: val },
				) }
			/>
		</div>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withSelect( withRequestFields )( RedirectToPageRender );

