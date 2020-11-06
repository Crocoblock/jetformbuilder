import Tools from "../tools/tools";
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

window.jetFormDefaultActions['register_user'] = class RegisterUserAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.formFieldsList = this.getFormFieldsList();
		this.data = window.jetFormRegisterUserData;

		this.userFields = Object.entries( this.data.userFields );

		this.setMessages();
	}

	setMessages() {
		if ( this.props.settings && this.props.settings.messages ) {
			return;
		}
		const messages = {};

		Object.entries( this.data.messages ).forEach( ( [ type, data ] ) => {
			messages[ type ] = data.value;
		} )

		this.props.onChange( {
			...this.props.settings,
			messages: messages
		} );
	}

	getFormFieldsList() {

		let formFieldsList = [ {
				value: '',
				label: __('Select field...')
		} ];

		this.fields.forEach( field => {
			let label = field.label ? field.label : field.name;
			let value = field.name;

			formFieldsList.push( { value, label } );
		} );

		return formFieldsList;
	}

	getFieldByName( { source, name } ) {
		const settings = this.props.settings;

		if (settings[ source ] && settings[ source ][ name ]) {
			return settings[ source ][ name ];
		}
		return '';
	}

	getFieldDefault( name ) {
		return this.getFieldByName( {
			source: 'fields_map',
			name
		} );
	}

	getFieldMeta( name ) {
		return this.getFieldByName( {
			source: 'meta_fields_map',
			name
		} );
	}

	getMessage( name ) {
		return this.getFieldByName( {
			source: 'messages',
			name
		} );
	}

	changeFieldsMap( { source, nameField, value } ) {
		const fieldsMap = Object.assign(
			{},
			this.props.settings[ source ],
			{ [ nameField ]: value }
		);

		this.props.onChange( {
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

		const onChangeMessage = ( value, nameField ) => {
			const source = 'messages';

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
		return ( <React.Fragment key="register_user">
			<BaseControl
				label={ this.data.labels.fields_map }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					{ this.userFields.map( ( [ value, label ], index ) => {

						return <div
							className="jet-fields-map__row"
							key={ 'field_map_' + value + index }
						>
							<SelectControl
								key="form_fields"
								value={ this.getFieldDefault( value ) }
								options={ this.formFieldsList }
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
				label={ this.data.labels.user_role }
				key="user_role"
			>
				<div className='user-role-select'>
					<SelectControl
						key="user_role_list"
						value={ settings.user_role }
						options={ this.data.userRoles }
						onChange={ ( newValue ) => {
							onChangeSetting( newValue, 'user_role' );
						} }
					/>
				</div>


			</BaseControl>
			<BaseControl
				label={ this.data.labels.user_meta }
				key='user_meta_list'
			>
				<div className='jet-user-meta-rows'>
				{ this.fields.map( ( { name }, index ) => {
					return <div
						className="jet-user-meta__row"
						key={ 'user_meta_' + name + index }
					>
						<TextControl
							key={ name + index }
							label={ name }
							value={ this.getFieldMeta( name ) }
							onChange={ newVal => {
								onChangeMetaFieldMap( newVal, name )
							} }
						/>
					</div>;
				} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ this.data.labels.log_in }
				key='is_log_in'
			>
				<div className="log-in-control">
					<ToggleControl
						key='log_in'
						checked={ settings.log_in }
						onChange={ ( newValue ) => {
							onChangeSetting( newValue, 'log_in' );
						} }
					/>
				</div>

			</BaseControl>
			<BaseControl
				label={ this.data.labels.add_user_id }
				key='add_user_id'
			>
				<div className="add-user-id-control">
					<ToggleControl
						key='add_user_id_control'
						checked={ settings.add_user_id }
						onChange={ ( newValue ) => {
							onChangeSetting( newValue, 'add_user_id' );
						} }
						help={ Tools.getHelpMessage( this.data, 'add_user_id' ) }
					/>
				</div>
			</BaseControl>
			<BaseControl
				label={ __( 'Messages Settings:' ) }
				key='messages_settings_fields'
			>
				<div className='jet-user-meta-rows'>
					{ settings.messages && Object.entries( settings.messages )
						.map( ( [ type, data ], id ) => {

						return <div
							className="jet-user-meta__row"
							key={ 'message_' + type + id }
						>
							<TextControl
								key={ type + id }
								label={ this.data.messages[ type ].label }
								value={ this.getMessage( type ) }
								onChange={ newValue => onChangeMessage( newValue, type ) }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>

		</React.Fragment> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
