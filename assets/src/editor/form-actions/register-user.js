import Tools from "../tools/tools";
/**
 * Internal dependencies
 */
const {
	TextControl,
	TextareaControl,
	SelectControl,
	Button,
	Popover,
	PanelBody,
	PanelRow,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions['register_user'] = class RegisterUserAction extends wp.element.Component {

	getFormFieldsList() {
		const formFields = Tools.getFormFieldsBlocks();

		let formFieldsList = [ {
				value: '',
				label: __('Select field...')
		} ];

		formFields.forEach( field => {
			let label = field.label ? field.label : field.name;
			let value = field.name;

			formFieldsList.push( { value, label } );
		} );

		return formFieldsList;
	}

	getFieldByName( name ) {
		const settings = this.props.settings;

		if (settings.fields_map && settings.fields_map[name]) {
			return settings.fields_map[name];
		}
		return '';

	}

	changeFieldsMap( { source, nameField, value } ) {
		const fieldsMap = Object.assign( {}, this.props.settings[ source ] );

		fieldsMap[ nameField ] = value;

		onChange( {
			...this.props.settings,
			[ source ]: fieldsMap
		} );
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;

		const onChangeFieldMap = ( value, nameField ) => {
			const source = 'fields_map';

			this.changeFieldsMap(
				{ value, nameField, source }
			);
		};

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

		const userFields = Object.entries( window.jetFormRegisterUserData.userFields );
		const formFields = this.getFormFieldsList();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="register_user">
			<BaseControl
				label={ window.jetFormInsertPostData.labels.fields_map }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					{ userFields.map( ( [ value, label ], index ) => {


						return <div
							className="jet-fields-map__row"
							key={ 'field_map_' + value + index }
						>
							<SelectControl
								key="form_fields"
								value={ this.getFieldByName( value ) }
								options={ formFields }
								label={ label }
								labelPosition='side'
								onChange={ ( newValue ) => {
									onChangeFieldMap( newValue, value );
								} }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ window.jetFormRegisterUserData.labels.user_role }
				key="user_role"
			>
				<SelectControl
					key="user_role_list"
					value={ settings.user_role }
					options={ window.jetFormRegisterUserData.userRoles }
					onChange={ ( newValue ) => {
						onChangeSetting( newValue, 'user_role' );
					} }
				/>

			</BaseControl>

		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
