import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
import Tools from "../../tools/tools";

const block = 'jet-forms/range-field';

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
    RadioControl,
    Disabled,
    __experimentalNumberControl,
} = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
    NumberControl = __experimentalNumberControl;
}

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';


window.jetFormBuilderBlockCallbacks[ block ].edit = class RangeEdit extends wp.element.Component {
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
                        <NumberControl
                            label={ __( 'Min Value' ) }
                            labelPosition='top'
                            key='min'
                            value={ attributes.min }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { min: parseInt(newValue) } );
                            } }
                        />
                        <NumberControl
                            label={ __( 'Max Value' ) }
                            labelPosition='top'
                            key='max'
                            value={ attributes.max }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { max: parseInt(newValue) } );
                            } }
                        />
                        <NumberControl
                            label={ __( 'Step' ) }
                            labelPosition='top'
                            key='step'
                            value={ attributes.step }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { step: parseInt(newValue) } );
                            } }
                        />
                        <TextControl
                            key='prefix'
                            label={ __( 'Value prefix' ) }
                            value={ attributes.prefix }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { prefix: newValue } );
                            } }
                        />
                        <TextControl
                            key='suffix'
                            label={ __( 'Value suffix' ) }
                            value={ attributes.suffix }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { suffix: newValue } );
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
            <RangeControl
                label={ attributes.label }
                min={ 0 }
                max={ 100 }
            />
        ];
    }
}