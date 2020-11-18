import BaseActionComponent from "./base-action-component";
import * as fieldsManager from "../tools/form-fields-manager";


export default class IntegrationComponent extends BaseActionComponent {

    constructor( props ) {
        super( props );

        this.validateAPIKey = this.validateAPIKey.bind( this );
        this.getLists 		= this.getLists.bind( this );

        this.formFieldsList = fieldsManager.getFormFieldsList();

        this.state = {
            requestProcessing: false,
        };
    }

    validateAPIKey( isValidate ) {
        const self = this;
        const settings = self.props.settings;

        if ( ! settings.api_key ) {
            self.onChangeSetting( false, 'isValidAPI' );
            return;
        }

        isValidate = isValidate || false;

        if ( isValidate ) {
            self.state.requestProcessing = 'validate';
        } else {
            self.state.requestProcessing = 'loading';
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

        if ( this.state.requestProcessing === 'validate' ) {
            return 'loading';
        } else if ( true === settings.isValidAPI &&
            'validate' !==  this.state.requestProcessing )
        {
            return 'is-valid';

        } else if ( false === settings.isValidAPI &&
            'validate' !== this.state.requestProcessing )
        {
            return 'is-invalid';
        }
    }
}