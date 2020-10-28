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

const { __ } = wp.i18n;

const localizeData = window.JetFormSelectFieldData;

class FromPostsFields extends wp.element.Component {

    constructor( props ) {
        super( props );
    }

    render() {
        const props = this.props;
        const attributes = props.attributes;
        const parentProps = props.parentProps;

        return (
            <div>
                <SelectControl
                    key='from__posts'
                    label={ __( 'Post Type' ) }
                    labelPosition='top'
                    value={ attributes.from_posts__type }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_posts__type: newValue } );
                    } }
                    options={ localizeData.post_types_list }
                />
                <TextControl
                    key='from_posts__value_from_meta'
                    label={ __( 'Value from meta field' ) }
                    value={ attributes.from_posts__value_from_meta }
                    help={ Tools.getHelpMessage( localizeData, 'value_from_meta' ) }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_posts__value_from_meta: newValue } );
                    } }
                />
                <TextControl
                    key='from_posts__calc_value_from_meta'
                    label={ __( 'Calculated value from meta field' ) }
                    value={ attributes.from_posts__calc_value_from_meta }
                    help={ Tools.getHelpMessage( localizeData, 'calc_value_from_meta' ) }
                    onChange={ ( newValue ) => {
                        parentProps.setAttributes( { from_posts__calc_value_from_meta: newValue } );
                    } }
                />
            </div>
        );
    }
}

export default FromPostsFields;