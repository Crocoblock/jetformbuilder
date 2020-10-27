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

    render() {
        const props = this.props;
        const attributes = props.attributes;
        const parentProps = props.parentProps;
        const localizeData = props.localizeData;

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
                    options={ localizeData.generators_list }
                />
                <TextControl
                    key='from_generator__field_name'
                    label='Field Name'
                    value={ attributes.from_generator__field_name }
                    help={ Tools.getHelpMessage( localizeData, 'field_name' ) }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__field_name: newValue } );
                    } }
                />
                <TextControl
                    key='from_generator__value_from_meta'
                    label='Value from meta field'
                    help={ Tools.getHelpMessage( localizeData,'value_from_meta' ) }
                    value={ attributes.from_generator__value_from_meta }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_generator__value_from_meta: newValue } );
                    } }
                />
                <TextControl
                    key='from_generator__calc_value_from_meta'
                    label='Calculated value from meta field'
                    help={ Tools.getHelpMessage( localizeData,'calc_value_from_meta' ) }
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