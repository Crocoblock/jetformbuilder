import Tools from "../tools/tools";
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

window.jetFormDefaultActions['mailchimp'] = class MailChimpAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.data 	= window.jetFormMailchimpData;
		this.validateAPIKey = this.validateAPIKey.bind( this );
		this.getLists 		= this.getLists.bind( this );

		this.state = {
			requestProcessing: false,
		};
	}

	onChangeSetting( value, key ) {
		this.props.onChange( {
			...this.props.settings,
			[ key ]: value
		} );
	};

	validateAPIKey( isValidate ) {
		const self = this;
		const settings = self.props.settings;

		if ( ! settings.api_key ) {
			self.onChangeSetting( false, 'isValidAPI' );
			return;
		}

		isValidate = isValidate || false;

		if ( isValidate ) {
			self.state.requestProcessing = 'validateMailChimpAPI';
		} else {
			self.state.requestProcessing = 'loadingAMailChimpData';
		}

		jQuery.ajax( {
			url: ajaxurl,
			type: 'POST',
			data: {
				'action': this.data.action,
				'api_key': settings.api_key
			},
			success: function( response ) {
				if ( response.success ) {
					self.onChangeSetting( true, 'isValidAPI' );
					self.onChangeSetting( response.data, 'data' );

				} else {
					self.onChangeSetting( false, 'isValidAPI' );
				}

				self.state.requestProcessing = false;
			},
			error: function() {
				self.onChangeSetting( false, 'isValidAPI' );
				self.state.requestProcessing = false;
			}
		} );
	}

	getClassNameValidateButton() {
		const settings = this.props.settings;

		if ( this.state.requestProcessing === 'validateMailChimpAPI' ) {
			return 'loading';
		} else if ( true === settings.isValidAPI &&
			'validateMailChimpAPI' !==  this.state.requestProcessing )
		{
			return 'is-valid';

		} else if ( false === settings.isValidAPI &&
			'validateMailChimpAPI' !== this.state.requestProcessing )
		{
			return 'is-invalid';
		}
	}

	getFieldByName( { source = 'fields_map', name } ) {
		const settings = this.props.settings;

		if (settings[ source ] && settings[ source ][ name ]) {
			return settings[ source ][ name ];
		}
		return '';
	}

	changeFieldsMap( { source = 'fields_map', nameField, value } ) {
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

	getFields() {
		const settings = this.props.settings;

		if ( settings.list_id
			&& settings.data.fields
			&& settings.data
			&& settings.data.fields[ settings.list_id ] )
		{
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
			&& settings.list_id )
		{
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

		const options = Object.entries( entries ).map( ( [ value, label ] ) => {
			return { value, label };
		} );

		return [ placeholder, ...options ];
	}


	updateLists() {

	}

	render() {
		const settings = this.props.settings;
		const fields = this.getFields();

		console.log( settings.data );

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="mailchimp">
			<BaseControl
				label={ this.data.labels.api_key }
				key="mailchimp_input_key"
			>
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
			</BaseControl>
			{ settings.isValidAPI && <React.Fragment>
				<BaseControl
					label={ this.data.labels.list_id }
					key="mailchimp_select_lists"
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
					label={ this.data.labels.groups_ids }
					key="mailchimp_groups_ids"
				>
					<div>
						<SelectControl
							key='list_id'
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
					key="mailchimp_tags"
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
					key="mailchimp_double_opt_in"
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
					key='user_meta_list'
				>
					<div className='jet-user-meta-rows'>
						{ fields.map( ( [ mcFieldId, mcFieldData ], index ) => {
							return <div
								className="jet-user-meta__row"
								key={ 'user_meta_' + mcFieldId + index }
							>
								<TextControl
									key={ mcFieldId + index }
									label={ mcFieldData.label }
									value={ this.getFieldByName( { name: mcFieldId } ) }
									onChange={ value => {
										this.changeFieldsMap( { nameField: mcFieldId, value } )
									} }
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
