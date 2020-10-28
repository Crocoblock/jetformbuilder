import Tools from "../../tools/tools";

const {
    PanelColor,
    IconButton,
    TextControl,
    TextareaControl,
    SelectControl,
    ToggleControl,
    PanelBody,
    Button,
    RangeControl,
    CheckboxControl,
    Disabled,
} = wp.components;

class FromGeneratorsFields extends wp.element.Component {

    constructor( props ) {
        super( props );
    }

    getHelpMessage( name = '' ) {
        const messages = window.JetFormSelectFieldData.help_messages;
        const func = this.props.attributes.from_generator__function;

        if( typeof messages[ name ] !== 'undefined' ) {
            return messages[ name ];
        }

        if ( func && typeof messages[ func ] === 'object' ) {
            return messages[ func ][ name ];
        }
    }

    render() {
        const props = this.props;
        const attributes = props.attributes;
        const parentProps = props.parentProps;

        return (
            <div>
                <SelectControl
                    key='from_generator__function'
                    label='Generator Function'
                    labelPosition='top'
                    value={ attributes.from_generator__function }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__function: newValue } );
                    } }
                    options={ window.JetFormSelectFieldData.generators_list }
                />
                <TextControl
                    key='from_generator__field_name'
                    label='Field Name'
                    value={ attributes.from_generator__field_name }
                    help={ this.getHelpMessage( 'field_name' ) }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__field_name: newValue } );
                    } }
                />
                <TextControl
                    key='from_generator__value_from_meta'
                    label='Value from meta field'
                    help={ this.getHelpMessage( 'value_from_meta' ) }
                    value={ attributes.from_generator__value_from_meta }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__value_from_meta: newValue } );
                    } }
                />
                <TextControl
                    key='from_generator__calc_value_from_meta'
                    label='Calculated value from meta field'
                    help={ this.getHelpMessage( 'calc_value_from_meta' ) }
                    value={ attributes.from_generator__calc_value_from_meta }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__calc_value_from_meta: newValue } );
                    } }
                />
            </div>
        );
    }
}

export default FromGeneratorsFields;