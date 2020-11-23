import Tools from "../tools/tools";
import * as fieldsManager from "../tools/form-fields-manager";
import IntegrationComponent from "./integration-component";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl,
	Button,
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions[ 'mailchimp' ] = class MailChimpAction extends IntegrationComponent {

	constructor( props ) {
		super( props );

		this.data = window.jetFormMailchimpData;
	}


	getFields() {
		const settings = this.props.settings;

		if ( settings.list_id
			&& settings.data.fields
			&& settings.data
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
			&& settings.data.groups
			&& settings.list_id ) {
			return this.formatEntriesArray( settings.data.groups[ settings.list_id ] );
		}
		return [];
	}

	formatEntriesArray( entries = [] ) {
		const placeholder = {
			label: '--'
		};
		if ( ! entries ) {
			return [];
		}

		const options = Object.entries( entries ).map( ( [value, label] ) => {
			return { value, label };
		} );

		return [placeholder, ...options];
	}


	render() {
		const settings = this.props.settings;
		const fields = this.getFields();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="mailchimp">
			<BaseControl
				label={ this.data.labels.api_key }
				key={ 'mailchimp_input_key' }
			>
				<div>
					<div className='input_with_button'>
						<TextControl
							key='api_key'
							value={ settings.api_key }
							onChange={ newVal => {
								this.onChangeSetting( newVal, 'api_key' )
							} }
						/>
						<Button
							key={ 'validate_api_key' }
							isPrimary
							onClick={ this.validateAPIKey }
							className={ this.getClassNameValidateButton() }
						>
							{ this.data.labels.validate_api_key }
						</Button>
					</div>
					<div>{ this.data.help.api_key_link_prefix } <a
						href={ this.data.help.api_key_link }>{ this.data.help.api_key_link_suffix }</a></div>
				</div>
			</BaseControl>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					label={ this.data.labels.list_id }
					key={ 'mailchimp_select_lists' }
				>
					<div>
						<SelectControl
							key='list_id'
							value={ settings.list_id }
							onChange={ newVal => {
								this.onChangeSetting( newVal, 'list_id' )
							} }
							options={ this.getLists() }
						/>
						<Button
							key={ 'update_list_ids' }
							isPrimary
							onClick={ this.getApiData }
						>
							{ this.data.labels.update_list_ids }
						</Button>
					</div>

				</BaseControl>

				<BaseControl
					label={ this.data.labels.groups_ids }
					key={ 'mailchimp_groups_ids' }
				>
					<div>
						<SelectControl
							key='groups_ids'
							value={ settings.groups_ids }
							onChange={ newVal => {
								this.onChangeSetting( newVal, 'groups_ids' )
							} }
							options={ this.getGroups() }
						/>
					</div>

				</BaseControl>
				<BaseControl
					label={ this.data.labels.tags }
					key={ 'mailchimp_tags' }
				>
					<div>
						<TextControl
							key='tags'
							value={ settings.tags }
							help={ this.data.help.tags }
							onChange={ newVal => {
								this.onChangeSetting( newVal, 'tags' )
							} }
						/>
					</div>

				</BaseControl>
				<BaseControl
					label={ this.data.labels.double_opt_in }
					key={ 'mailchimp_double_opt_in' }
				>
					<div>
						<ToggleControl
							key={ 'double_opt_in' }
							checked={ settings.double_opt_in }
							onChange={ newVal => {
								this.onChangeSetting( Boolean( newVal ), 'double_opt_in' )
							} }
						/>
					</div>

				</BaseControl>
				<BaseControl
					label={ this.data.labels.fields_map }
					key='mailchimp_fields_map'
				>
					<div className='jet-user-meta-rows'>
						{ fields.map( ( [mcFieldId, mcFieldData], index ) => {
							return <div
								className="jet-user-meta__row"
								key={ 'user_meta_' + mcFieldId + index }
							>
								<SelectControl
									key={ mcFieldId + index }
									label={ mcFieldData.label }
									//labelPosition={'side'}
									value={ this.getFieldDefault( mcFieldId ) }
									onChange={ value => {
										this.onChangeFieldMap( value, mcFieldId )
									} }
									options={ this.formFieldsList }
								/>
							</div>;
						} ) }
					</div>
				</BaseControl>


			</React.Fragment> }

		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
