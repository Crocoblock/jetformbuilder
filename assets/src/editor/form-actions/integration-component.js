import BaseActionComponent from "./base-action-component";

const { getFormFieldsBlocks } = JetFBActions;

export default class IntegrationComponent extends BaseActionComponent {

	constructor( props ) {
		super( props );

		this.validateAPIKey = this.validateAPIKey.bind( this );
		this.getApiData = this.getApiData.bind( this );
		this.getLists = this.getLists.bind( this );

		this.formFieldsList = getFormFieldsBlocks( [], '--' );

		this.state = {
			className: [ this.getclassNameValidateButton() ],
		};
	}

	validateAPIKey( customApiKey = false ) {
		this.setState( { className: [ 'loading' ] } );

		if ( customApiKey && 'string' === typeof customApiKey ) {
			this.getApiData( customApiKey );
			return;
		}
		const settings = this.props.settings;
		this.getApiData( settings.api_key );
	}

	getApiData( apiKey ) {
		const self = this;

		if ( ! apiKey ) {
			self.onChangeSetting( null, 'isValidAPI' );
			self.setState( { className: [] } );
			return;
		}

		jQuery.ajax( {
			url: ajaxurl,
			type: 'POST',
			data: {
				'action': this.props.source.action,
				'api_key': apiKey
			},
			success ( response ) {
				if ( response.success ) {
					self.onChangeSettingObj( {
						isValidAPI: true,
						data: response.data
					} );

					self.setState( { className: [ 'is-valid' ] } );
				}
				else {
					self.onChangeSettingObj( { isValidAPI: false } );
					self.setState( { className: [ 'is-invalid' ] } );
				}
			},
			error () {
				self.onChangeSettingObj( { isValidAPI: false } );
				self.setState( { className: [ 'is-invalid' ] } );
			}
		} );


	}

	getclassNameValidateButton() {
		const settings = this.props.settings;

		if ( true === settings.isValidAPI ) {
			return 'is-valid';
		}
		else if ( false === settings.isValidAPI ) {
			return 'is-invalid';
		}
	}
}