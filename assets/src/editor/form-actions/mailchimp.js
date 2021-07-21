import IntegrationComponent from "./integration-component";

const {
		  addAction,
		  globalTab,
	  } = JetFBActions;

/**
 * Internal dependencies
 */
const {
		  TextControl,
		  ToggleControl,
		  SelectControl,
		  CheckboxControl,
		  BaseControl,
		  Button,
	  } = wp.components;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
	  } = JetFBComponents;

const { __ } = wp.i18n;

addAction( 'mailchimp', class MailChimpAction extends IntegrationComponent {

	getFields() {
		const { settings } = this.props;

		if ( settings.list_id
			&& settings.data
			&& settings.data.fields
			&& settings.data.fields[ settings.list_id ] ) {
			return Object.entries( settings.data.fields[ settings.list_id ] );
		}
		return [];
	}

	getLists() {
		const settings = this.props.settings;

		if ( settings.data && settings.data.lists ) {
			return this.formatEntriesArray( settings.data.lists );
		}
		return [];
	}

	getGroups() {
		const settings = this.props.settings;

		if ( settings.data
			&& settings.data.groups ) {
			return settings.data.groups[ settings.list_id ];
		}
		return [];
	}

	formatEntriesArray( entries = [] ) {
		if ( ! entries ) {
			return [];
		}

		const options = Object.entries( entries ).map( ( [ value, label ] ) => {
			return { value, label };
		} );

		return [ { label: '--', value: '' }, ...options ];
	}

	isCheckedGroup( value ) {
		const settings = this.props.settings;

		return ( value && settings.groups_ids && settings.groups_ids[ value ] ) ? settings.groups_ids[ value ] : false;
	}

	render() {
		const { settings, source, label, help } = this.props;
		const fields = this.getFields();
		const currentTab = globalTab( { slug: 'mailchimp-tab' } );

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="mailchimp">
			<ToggleControl
				key={ 'use_global' }
				label={ label( 'use_global' ) }
				checked={ settings.use_global }
				onChange={ use_global => {
					this.onChangeSetting( Boolean( use_global ), 'use_global' )
				} }
			/>
			<BaseControl
				key={ 'mailchimp_key_inputs' }
				className="input-with-button"
				label={ label( 'api_key' ) }
			>
				<TextControl
					key='api_key'
					className='jet-control-clear-full'
					disabled={ settings.use_global }
					value={ settings.use_global
						? currentTab.api_key
						: settings.api_key
					}
					onChange={ newVal => {
						this.onChangeSetting( newVal, 'api_key' )
					} }
				/>
				<Button
					key={ 'validate_api_key' }
					isPrimary
					onClick={ () => {
						settings.use_global
							? this.validateAPIKey( currentTab.api_key )
							: this.validateAPIKey()
					} }
					className={ this.state.className.join( ' ' ) + ' jet-form-validate-button' }
				>
					<i className="dashicons"/>
					{ label( 'validate_api_key' ) }
				</Button>
			</BaseControl>
			<div/>
			<div className='margin-bottom--small'>{ help( 'api_key_link_prefix' ) } <a
				href={ help( 'api_key_link' ) }>{ help( 'api_key_link_suffix' ) }</a>
			</div>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					key={ 'mailchimp_select_lists' }
					className="input-with-button"
					label={ label( 'list_id' ) }
				>
					<BaseControl
						key={ 'mailchimp_select_lists_select' }
						className="jet-control-clear-full"
					>
						<SelectControl
							key='list_id'
							labelPosition='top'
							value={ settings.list_id }
							onChange={ newVal => this.onChangeSetting( newVal, 'list_id' ) }
							options={ this.getLists() }
						/>
					</BaseControl>
					<Button
						key={ 'update_list_ids' }
						isPrimary
						onClick={ () => {
							settings.use_global
								? this.getApiData( settings.api_key )
								: this.getApiData( currentTab.api_key )
						} }
					>
						{ label( 'update_list_ids' ) }
					</Button>
				</BaseControl>
				{ Boolean( settings.list_id ) && <>
					<BaseControl
						label={ label( 'groups_ids' ) }
					>
						<div className='jet-user-fields-map__list'>
							{ this.getGroups().map( group => <CheckboxControl
								key={ `groups_ids_${ group.value }` }
								checked={ this.isCheckedGroup( group.value ) }
								label={ group.label }
								onChange={ active => this.onChangeSetting( {
									...( settings.groups_ids || {} ),
									[ group.value ]: active,
								}, 'groups_ids' ) }
							/> ) }
						</div>
					</BaseControl>
					<TextControl
						key='mailchimp_tags'
						value={ settings.tags }
						label={ label( 'tags' ) }
						help={ help( 'tags' ) }
						onChange={ newVal => this.onChangeSetting( newVal, 'tags' ) }
					/>
					<ToggleControl
						key={ 'double_opt_in' }
						label={ label( 'double_opt_in' ) }
						checked={ settings.double_opt_in }
						onChange={ newVal => this.onChangeSetting( Boolean( newVal ), 'double_opt_in' ) }
					/>
					<ActionFieldsMap
						label={ label( 'fields_map' ) }
						key='mailchimp'
						fields={ fields }
					>
						{ ( { fieldId, fieldData, index } ) => <WrapperRequiredControl
							field={ [ fieldId, fieldData ] }
						>
							<SelectControl
								className="full-width"
								key={ fieldId + index }
								value={ this.getFieldDefault( fieldId ) }
								onChange={ value => this.onChangeFieldMap( value, fieldId ) }
								options={ this.formFieldsList }
							/>
						</WrapperRequiredControl> }
					</ActionFieldsMap>
				</> }
			</React.Fragment> }
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
