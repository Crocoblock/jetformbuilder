const {
		  Tools,
		  addAction,
		  getFormFieldsBlocks,
	  } = JetFBActions;

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

function RedirectToPageAction( props ) {

	const {
			  source,
			  label,
			  settings,
			  onChangeSetting,
			  onChangeSettingObj,
			  requestFields,
		  } = props;

	const [ fields, setFields ] = useState( [] );

	useEffect( () => {
		setFields( [ ...getFormFieldsBlocks(), ...requestFields ] );
	}, [] );

	const isChecked = function( name ) {
		const args_fields = Array.from( settings.redirect_args || [] );

		return Boolean( args_fields.includes( name ) );
	}

	const onChangeRedirectArgs = function( value, field_name ) {
		let redirect_args = Array.from( settings.redirect_args || [] );

		if ( ! value ) {
			const field_id = redirect_args.indexOf( field_name );

			redirect_args.splice( field_id, 1 );
		} else {
			redirect_args.push( field_name );
		}

		onChangeSettingObj( { redirect_args } );
	}

	/* eslint-disable jsx-a11y/no-onchange */
	return ( <div key="redirect_to_page">
		<SelectControl
			className="full-width"
			key='redirect_type'
			label={ label( 'redirect_type' ) }
			labelPosition="side"
			value={ settings.redirect_type }
			options={ source.redirect_types }
			onChange={ redirect_type => onChangeSettingObj( { redirect_type } ) }
		/>
		{ 'static_page' === settings.redirect_type && <SelectControl
			key='redirect_type'
			className="full-width"
			label={ label( 'redirect_page' ) }
			labelPosition="side"
			value={ settings.redirect_page }
			options={ source.pages }
			onChange={ redirect_page => onChangeSettingObj( { redirect_page } ) }
		/> }
		{ 'custom_url' === settings.redirect_type && <TextControl
			key='redirect_url_control'
			label={ label( 'redirect_url' ) }
			value={ settings.redirect_url }
			onChange={ redirect_url => onChangeSettingObj( { redirect_url } ) }
		/> }
		<BaseControl
			label={ label( 'redirect_args' ) }
			key="redirect_args_control"
		>
			<div className='jet-user-fields-map__list'>
				{ fields.map( ( { name }, index ) => <CheckboxControl
						key={ `checkbox_args_${ name }_${ index }` }
						label={ name }
						checked={ isChecked( name ) }
						onChange={ newVal => onChangeRedirectArgs( newVal, name ) }
					/>,
				) }
			</div>
		</BaseControl>
		<TextControl
			key='redirect_hash_control'
			label={ label( 'redirect_hash' ) }
			value={ settings.redirect_hash }
			onChange={ redirect_hash => onChangeSettingObj( { redirect_hash } ) }
		/>
	</div> );
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction( 'redirect_to_page', withSelect( withRequestFields )( RedirectToPageAction ) );

