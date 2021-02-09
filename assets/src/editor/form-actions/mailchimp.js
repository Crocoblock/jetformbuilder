import IntegrationComponent from "./integration-component";
import WrapperRequiredControl from "../components/wrapper-required-control";
import { addAction } from "../helpers/action-helper";
import { ActionFieldsMap } from "../components/actions/action-fields-map";

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
		const { settings, source, label, help } = this.props;
		const fields = this.getFields();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="mailchimp">
			<BaseControl
				key={ 'mailchimp_key_inputs' }
				className="input-with-button"
			>
				<TextControl
					key='api_key'
					label={ label( 'api_key' ) }
					value={ settings.api_key }
					onChange={ newVal => {
						this.onChangeSetting( newVal, 'api_key' )
					} }
				/>
				<Button
					key={ 'validate_api_key' }
					isPrimary
					onClick={ this.validateAPIKey }
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
				>
					<SelectControl
						key='list_id'
						className="full-width"
						label={ label( 'list_id' ) }
						labelPosition="side"
						value={ settings.list_id }
						onChange={ newVal => this.onChangeSetting( newVal, 'list_id' ) }
						options={ this.getLists() }
					/>
					<Button
						key={ 'update_list_ids' }
						isPrimary
						onClick={ this.getApiData }
					>
						{ label( 'update_list_ids' ) }
					</Button>
				</BaseControl>

				<SelectControl
					key='groups_ids'
					className="full-width"
					label={ label( 'groups_ids' ) }
					labelPosition="side"
					value={ settings.groups_ids }
					onChange={ newVal => this.onChangeSetting( newVal, 'groups_ids' ) }
					options={ this.getGroups() }
				/>
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
						field={ [fieldId, fieldData] }
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
			</React.Fragment> }
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
