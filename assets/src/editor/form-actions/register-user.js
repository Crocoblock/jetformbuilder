import BaseActionComponent from "./base-action-component";

const {
		  WrapperRequiredControl,
		  ActionMessages,
	  } = JetFBComponents;
const {
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
	  } = wp.components;

const { __ } = wp.i18n;

const {
		  useState,
	  } = wp.element;

addAction( 'register_user', class RegisterUserAction extends BaseActionComponent {

	constructor( props ) {
		super( props );

		this.fields = getFormFieldsBlocks();
		this.formFieldsList = [ { value: '', label: '--' }, ...this.fields ];
	}

	render() {
		const { settings, source, label, help } = this.props;

		const userFields = Object.entries( source.userFields );

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <React.Fragment key="register_user">
			<BaseControl
				label={ label( 'fields_map' ) }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					<span
						className={ 'description-controls' }>{ __( 'Set form fields names to to get user data from', 'jet-form-builder' ) }</span>
					{ userFields.map( ( [ value, data ] ) => {

						return <WrapperRequiredControl
							field={ [ value, data ] }
						>
							<SelectControl
								className="full-width"
								key={ `form_fields_${ value }` }
								value={ this.getFieldDefault( value ) }
								options={ this.formFieldsList }
								onChange={ newValue => this.onChangeFieldMap( newValue, value ) }
							/>
						</WrapperRequiredControl>;
					} ) }
				</div>
			</BaseControl>
			<SelectControl
				key="user_role_list"
				className="full-width"
				label={ label( 'user_role' ) }
				labelPosition="side"
				value={ settings.user_role }
				options={ source.userRoles }
				onChange={ ( newValue ) => {
					this.onChangeSetting( newValue, 'user_role' );
				} }
			/>
			<BaseControl
				label={ label( 'user_meta' ) }
				key='user_meta_list'
			>
				<div className='jet-user-fields-map__list'>
					<span
						className={ 'description-controls' }>{ __( 'Set user meta fields to save appropriate form fields into', 'jet-form-builder' ) }</span>
					{ this.fields.map( ( { name }, index ) => {
						return <div
							className="jet-user-meta__row"
							key={ 'user_meta_' + name + index }
						>
							<TextControl
								key={ name + index }
								label={ name }
								value={ this.getFieldMeta( name ) }
								onChange={ newVal => this.onChangeMetaFieldMap( newVal, name ) }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<ToggleControl
				key='log_in'
				label={ label( 'log_in' ) }
				checked={ settings.log_in }
				onChange={ ( newValue ) => {
					this.onChangeSetting( newValue, 'log_in' );
				} }
			/>
			<ToggleControl
				key='add_user_id_control'
				label={ label( 'add_user_id' ) }
				checked={ settings.add_user_id }
				onChange={ ( newValue ) => this.onChangeSetting( newValue, 'add_user_id' ) }
				help={ help( 'add_user_id' ) }
			/>
			<ActionMessages
				{ ...this.props }
			/>
		</React.Fragment> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

} );
