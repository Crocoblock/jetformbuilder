import BaseActionComponent from "./base-action-component";
import Tools from "../helpers/tools";

export default class IntegrationComponent extends BaseActionComponent {

	constructor( props ) {
		super( props );

		this.validateAPIKey = this.validateAPIKey.bind( this );
		this.getApiData = this.getApiData.bind( this );
		this.getLists = this.getLists.bind( this );

		this.formFieldsList = Tools.getFormFieldsBlocksWithPlaceholder();

		this.state = {
			className: [this.getclassNameValidateButton()],
		};
	}

	validateAPIKey() {
		this.setState( { className: ['loading'] } );

		this.getApiData();
	}

	getApiData( event ) {
		const self = this;
		const settings = self.props.settings;

		if ( ! settings.api_key ) {
			self.onChangeSetting( null, 'isValidAPI' );
			self.setState( { className: [] } );
			return;
		}

		jQuery.ajax( {
			url: ajaxurl,
			type: 'POST',
			data: {
				'action': this.props.source.action,
				'api_key': settings.api_key
			},
			success: function ( response ) {
				if ( response.success ) {
					self.onChangeSetting( true, 'isValidAPI' );
					self.onChangeSetting( response.data, 'data' );

					self.setState( { className: ['is-valid'] } );
				} else {
					self.onChangeSetting( false, 'isValidAPI' );
					self.setState( { className: ['is-invalid'] } );
				}
			},
			error: function () {
				self.onChangeSetting( false, 'isValidAPI' );
				self.setState( { className: ['is-invalid'] } );
			}
		} );


	}

	getclassNameValidateButton() {
		const settings = this.props.settings;

		if ( true === settings.isValidAPI ) {
			return 'is-valid';
		} else if ( false === settings.isValidAPI ) {
			return 'is-invalid';
		}
	}
}