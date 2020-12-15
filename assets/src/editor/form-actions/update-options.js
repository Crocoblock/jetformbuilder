import Tools from "../tools";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions[ 'update_options' ] = class UpdateOptionsAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data = window.jetFormUpdateOptionsData;
	}


	getFieldByName( { source, name } ) {
		const settings = this.props.settings;

		if ( settings[ source ] && settings[ source ][ name ] ) {
			return settings[ source ][ name ];
		}
		return '';
	}

	getFieldMeta( name ) {
		return this.getFieldByName( {
			source: 'meta_fields_map',
			name
		} );
	}

	changeFieldsMap( { source, nameField, value } ) {
		const fieldsMap = Object.assign( {}, this.props.settings[ source ] );

		fieldsMap[ nameField ] = value;

		this.props.onChange( {
			...this.props.settings,
			[ source ]: fieldsMap
		} );
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;


		const onChangeMetaFieldMap = ( value, nameField ) => {
			const source = 'meta_fields_map';

			this.changeFieldsMap(
				{ value, nameField, source }
			);
		};

		const onChangeSetting = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="register_user">

			<SelectControl
				key="options_page_list"
				className="full-width"
				label={ this.data.labels.options_page }
				labelPosition="side"
				value={ settings.options_page }
				options={ this.data.optionsPages }
				onChange={ ( newValue ) => {
					onChangeSetting( newValue, 'options_page' );
				} }
			/>
			<BaseControl
				label={ this.data.labels.options_map }
				key='options_meta_list'
			>
				<div className='jet-user-meta-rows'>
					{ this.fields.map( ( { name }, index ) => <TextControl
						key={ 'options_meta_' + name + index }
						label={ name }
						value={ this.getFieldMeta( name ) }
						onChange={ newVal => {
							onChangeMetaFieldMap( newVal, name )
						} }
					/> ) }
				</div>
			</BaseControl>

		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
