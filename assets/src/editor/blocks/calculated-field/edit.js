import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
import Tools from "../../tools/tools";

const block = 'jet-forms/calculated-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
    ColorPalette,
    RichText,
    Editable,
    MediaUpload,
    ServerSideRender,
    BlockControls,
    InspectorControls,
} = wp.blockEditor;

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
    __experimentalNumberControl,
} = wp.components;

const NumberControl = __experimentalNumberControl;

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class CalculatedEdit extends wp.element.Component {
    render() {
        const props      = this.props;
        const attributes = props.attributes;
        const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

        return [
            hasToolbar && (
                <BlockControls key={ keyControls + '-block' }>
                    <JetFormToolbar
                        values={ attributes }
                        controls={ window.jetFormBuilderControls.toolbar[ block ] }
                        onChange={ ( newValues ) => {
                            props.setAttributes( newValues );
                        }}
                    />
                </BlockControls>
            ),
            props.isSelected && (
                <InspectorControls
                    key={ keyControls }
                >
                    { window.jetFormBuilderControls.general[ block ] && window.jetFormBuilderControls.general[ block ].length && <JetFormGeneral
                        key={ keyGeneral }
                        values={ attributes }
                        controls={ window.jetFormBuilderControls.general[ block ] }
                        onChange={ ( newValues ) => {
                            props.setAttributes( newValues );
                        }}
                    /> }
                    <PanelBody
                        title={ __( 'Field Settings' ) }
                    >
                        <TextareaControl
                            label={ __( 'Calculation Formula' ) }
                            value={ attributes.calc_formula }

                            /* TODO: Need to add line break between fields */
                            help={ Tools.getAvailableFieldsString( block ) }

                            onChange={ ( newValue ) => {
                                props.setAttributes( { calc_formula: newValue } );
                            } }
                        />
                        <NumberControl
                            label={ __( 'Decimal Places Number' ) }
                            labelPosition='top'
                            key='precision'
                            value={ attributes.precision }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { precision: parseInt( newValue ) } );
                            } }
                        />
                        <TextControl
                            key='calc_prefix'
                            label={ __( 'Calculated Value Prefix' ) }
                            value={ attributes.calc_prefix }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { calc_prefix: newValue } );
                            } }
                        />
                        <TextControl
                            key='calc_suffix'
                            label={ __( 'Calculated Value Suffix' ) }
                            value={ attributes.calc_suffix }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { calc_suffix: newValue } );
                            } }
                        />
                        <ToggleControl
                            key={ 'calc_hidden' }
                            label={ __( 'Hidden' ) }
                            checked={ attributes.calc_hidden }
                            help={ Tools.getHelpMessage(
                                window.jetFormCalculatedFieldData,
                                'calc_hidden'
                            ) }
                            onChange={ newVal => {
                                props.setAttributes( {
                                    calc_hidden: Boolean(newVal),
                                } );
                            } }
                        />

                    </PanelBody>
                    { window.jetFormBuilderControls.advanced[ block ] && window.jetFormBuilderControls.advanced[ block ].length && <JetFormAdvanced
                        values={ attributes }
                        controls={ window.jetFormBuilderControls.advanced[ block ] }
                        onChange={ ( newValues ) => {
                            props.setAttributes( newValues );
                        }}
                    /> }
                </InspectorControls>
            ),
            <JetFieldPlaceholder
                key={ keyPlaceHolder }
                title={ 'Calculated Field' }
                subtitle={ [ attributes.label, attributes.name ] }
                isRequired={ attributes.required }
            />
        ];
    }
}