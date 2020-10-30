import Tools from "../tools/tools";
import JetFieldsMapControl from "../blocks/controls/fields-map";
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

window.jetFormDefaultActions['update_user'] = class UpdateUserAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data = window.jetFormUpdateUserData;
		this.userFields = this.getUserFieldsList();

		this.metaOption = 'user_meta';

		this.state = {
			type: '',
		};
	}

	getUserFieldsList() {
		let formFieldsList = [ {
			value: '',
			label: __('Select user property...')
		} ];

		this.data.userFields.forEach( field => {

			formFieldsList.push( {
				value: field.value,
				label: field.label
			} );
		} );

		return formFieldsList;
	}

	getFieldMap( name ) {
		const settings = this.props.settings;

		if ( settings && settings.fields_map && settings.fields_map[ name ] ) {
			return settings.fields_map[ name ];
		}
		return '';
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;

		const onChangeValue = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="update_user">
			<BaseControl
				label={ this.data.labels.fields_map }
				key='user_fields_map'
			>
				<div className='jet-user-meta-rows'>
					{ this.fields.map( ( field, index ) => {

						const fieldData = this.getFieldMap( field.name );

						return <div
							className="jet-user-meta__row"
							key={ 'user_meta_' + field.name + index }
						>
							<div className="jet-fields-map__item-field">{ field.name }</div>
							<JetFieldsMapControl
								key={ field.name + index }
								fieldValue={ fieldData }
								fieldName={ field.name }
								index={ index }
								metaProp='user_meta'
								fieldsMap={ settings.fields_map }
								fieldTypes={ this.userFields }
								onChange={ ( newValue ) => {
									onChangeValue( newValue, 'fields_map' );
								} }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ this.data.labels.user_role }
				key="user_role"
			>
				<div className='user-role-select'>
					<SelectControl
						key="user_role_list"
						value={ settings.user_role }
						options={ this.data.userRoles }
						onChange={ ( newValue ) => {
							onChangeValue( newValue, 'user_role' );
						} }
					/>
				</div>


			</BaseControl>

		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
