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

window.jetFormDefaultActions['activecampaign'] = class ActiveCampaignAction extends IntegrationComponent {

	constructor( props ) {
		super( props );

		this.data = window.jetFormActiveCampaignData;
	}



	getLists() {
		const settings = this.props.settings;

		if ( settings.data && settings.data.lists ) {
			return this.formatEntriesArray( settings.data.lists );
		}
		return [];
	}


	formatEntriesArray( entries = [], isNeedPlaceholder = true ) {
		const placeholder = {
			label: '--'
		};
		if ( ! entries ) {
			return [];
		}

		const options = Object.entries( entries ).map( ( [ value, label ] ) => {
			return { value, label };
		} );

		return isNeedPlaceholder ? [ placeholder, ...options ] : options ;
	}

	render() {
		const settings = this.props.settings;
		const fields = this.getFields();

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <React.Fragment key="activecampaign">
			<BaseControl
				label={ this.data.labels.api_key }
				key={'activecampaign_input_key'}
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
					<div>{ this.data.help.api_key_link_prefix } <a href={ this.data.help.api_key_link }>{ this.data.help.api_key_link_suffix }</a></div>
				</div>
			</BaseControl>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					label={ this.data.labels.list_id }
					key={'getresponse_select_lists'}
				>
					<div className='input_with_button'>
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
							onClick={ this.updateLists }
						>
							{ this.data.labels.update_list_ids }
						</Button>
					</div>

				</BaseControl>

				<BaseControl
					label={ this.data.labels.day_of_cycle }
					key={'getresponse_day_of_cycle'}
				>
					<div>
						<NumberControl
							key='day_of_cycle'
							value={ settings.day_of_cycle }
							onChange={ newVal => {
								this.onChangeSetting( Number( newVal ), 'day_of_cycle' )
							} }
						/>
					</div>

				</BaseControl>
				<BaseControl
					label={ this.data.labels.fields_map }
					key='getresponse_fields_map'
				>
					<div className='jet-user-meta-rows'>
						{ fields.map( ( [ fieldName, fieldData ], index ) => {

							return <div
								className="jet-user-meta__row"
								key={ 'user_meta_' + fieldName + index }
							>
								<SelectControl
									key={ fieldName + index }
									label={ fieldData.label }
									//labelPosition={'side'}
									value={ this.getFieldDefault( fieldName ) }
									onChange={ value => {
										this.onChangeFieldMap( value, fieldName )
									} }
									options={ this.formFieldsList }
								/>
							</div>;
						} ) }
					</div>
				</BaseControl>

			</React.Fragment> }

		</React.Fragment> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
