import Tools from "../tools";
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

window.jetFormDefaultActions[ 'active_campaign' ] = class ActiveCampaignAction extends IntegrationComponent {

	constructor( props ) {
		super( props );

		this.data = window.jetFormActiveCampaignData;
		this.validateActiveCampaignData = this.validateActiveCampaignData.bind( this );
		this.getActiveCampaignData = this.getActiveCampaignData.bind( this );
	}

	validateActiveCampaignData() {
		this.setState( { className: ['loading'] } );
		this.getActiveCampaignData( true );
	}

	getActiveCampaignData( isValidate = false ) {
		const self = this,
			settings = this.props.settings,
			lists = [],
			api_url = settings.api_url,
			api_key = settings.api_key,
			endpoint = '/admin/api.php?api_action=list_list';


		const url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';

		jQuery.getJSON( url )
			.success( function ( data ) {
				if ( undefined !== data.result_code && data.result_code ) {

					for ( var prop in data ) {
						if ( undefined === data[ prop ].id ) {
							continue;
						}
						lists.push( {
							value: data[ prop ].id,
							label: data[ prop ].name
						} );
					}

					self.onChangeSetting( lists, 'data' );
					self.onChangeSetting( true, 'isValidAPI' );
					self.setState( { className: ['is-valid'] } );

				} else {
					self.onChangeSetting( false, 'isValidAPI' );
					self.setState( { className: ['is-invalid'] } );
				}
			} )
			.error( function () {
				self.onChangeSetting( false, 'isValidAPI' );
				self.setState( { className: ['is-invalid'] } );
			} );
	}

	getLists() {
		const settings = this.props.settings;

		if ( settings.data && settings.data ) {
			return this.addPlaceholderForSelect( settings.data );
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

		const options = Object.entries( entries ).map( ( [value, label] ) => {
			return { value, label };
		} );

		return isNeedPlaceholder ? [placeholder, ...options] : options;
	}


	render() {
		const settings = this.props.settings;
		const fields = Object.entries( this.data.activecampaign_fields );

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <React.Fragment key="activecampaign">
			<BaseControl
				label={ this.data.labels.api_data }
				key={ 'activecampaign_input_key' }
			>
				<div>
					<div className='input_with_button'>
						<div>
							<label>{ this.data.labels.api_key }</label>
							<TextControl
								key='api_key'
								value={ settings.api_key }
								onChange={ newVal => {
									this.onChangeSetting( newVal, 'api_key' )
								} }
							/>
						</div>
						<div>
							<label>{ this.data.labels.api_url }</label>
							<TextControl
								key='api_url'
								value={ settings.api_url }
								onChange={ newVal => {
									this.onChangeSetting( newVal, 'api_url' )
								} }
							/>
						</div>
					</div>
					<div>{ this.data.help.api_key_link_prefix } <a
						href={ this.data.help.api_key_link }>{ this.data.help.api_key_link_suffix }</a></div>
					{ ( settings.api_key && settings.api_url ) && <Button
						key={ 'validate_api_key' }
						isPrimary
						onClick={ this.validateActiveCampaignData }
						className={ this.state.className.join( ' ' ) + ' jet-form-validate-button' }
					>
						<i className="dashicons"/>
						{ this.data.labels.validate_api_key }
					</Button> }
				</div>
			</BaseControl>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					label={ this.data.labels.list_id }
					key={ 'activecampaign_select_lists' }
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
							onClick={ this.getActiveCampaignData }
						>
							{ this.data.labels.update_list_ids }
						</Button>
					</div>

				</BaseControl>

				<BaseControl
					label={ this.data.labels.tags }
					key={ 'activecampaign_tags' }
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
					label={ this.data.labels.fields_map }
					key='activecampaign_fields_map'
				>
					<div className='jet-user-meta-rows'>
						{ fields.map( ( [fieldName, fieldLabel], index ) => {

							return <div
								className="jet-user-meta__row"
								key={ 'user_meta_' + fieldName + index }
							>
								<SelectControl
									key={ fieldName + index }
									label={ fieldLabel }
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
