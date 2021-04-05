const {
	Tools,
	addAction,
	getFormFieldsBlocks
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
	useState
} = wp.element;

addAction( 'redirect_to_page', class RedirectToPageAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = getFormFieldsBlocks();
	}

	isChecked( name ) {
		const args_fields = Array.from( this.props.settings.redirect_args || [] );

		return Boolean( args_fields.includes( name ) );
	}

	onChangeRedirectArgs( value, field_name ) {
		let args_fields = Array.from( this.props.settings.redirect_args || [] );

		if ( ! value ) {
			const field_id = args_fields.indexOf( field_name );

			args_fields.splice( field_id, 1 );
		}
		else {
			args_fields.push( field_name );
		}

		this.onChangeSetting( args_fields, 'redirect_args' );
	}

	onChangeSetting( value, key ) {
		this.props.onChange( {
			...this.props.settings,
			[ key ]: value
		} );
	};


	render() {
		const { source, label, settings } = this.props;

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="redirect_to_page">
			<SelectControl
				className="full-width"
				key='redirect_type'
				label={ label( 'redirect_type' ) }
				labelPosition="side"
				value={ settings.redirect_type }
				options={ source.redirect_types }
				onChange={ newVal => this.onChangeSetting( newVal, 'redirect_type' ) }
			/>
			{ 'static_page' === settings.redirect_type && <SelectControl
				key='redirect_type'
				className="full-width"
				label={ label( 'redirect_page' ) }
				labelPosition="side"
				value={ settings.redirect_page }
				options={ source.pages }
				onChange={ newVal => this.onChangeSetting( newVal, 'redirect_page' ) }
			/> }
			{ 'custom_url' === settings.redirect_type && <TextControl
				key='redirect_url_control'
				label={ label( 'redirect_url' ) }
				value={ settings.redirect_url }
				onChange={ newVal => this.onChangeSetting( newVal, 'redirect_url' ) }
			/> }
			<BaseControl
				label={ label( 'redirect_args' ) }
				key="redirect_args_control"
			>
				<div className='redirect_args-control'>
					{ this.fields.map( ( { name }, index ) => <CheckboxControl
							key={ `checkbox_args_${ name }_${ index }` }
							label={ name }
							checked={ this.isChecked( name ) }
							onChange={ newVal => this.onChangeRedirectArgs( newVal, name ) }
						/>
					) }
				</div>
			</BaseControl>
			<TextControl
				key='redirect_hash_control'
				label={ label( 'redirect_hash' ) }
				value={ settings.redirect_hash }
				onChange={ newVal => this.onChangeSetting( newVal, 'redirect_hash' ) }
			/>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
