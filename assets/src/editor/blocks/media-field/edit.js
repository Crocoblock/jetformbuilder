import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
import Tools from "../../tools/tools";

const block = 'jet-forms/media-field';

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
    TextHighlight,
    __experimentalNumberControl,
} = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
    NumberControl = __experimentalNumberControl;
}

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

const localizeData = window.jetFormMediaFieldData;

window.jetFormBuilderBlockCallbacks[ block ].edit = class MediaEdit extends wp.element.Component {
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
                        <SelectControl
                            key='field__user_access'
                            label={ __( 'User access' ) }
                            labelPosition='top'
                            value={ attributes.field__user_access }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field__user_access: newValue } );
                            } }
                            options={ localizeData.user_access }
                        />
                        <ToggleControl
                            key='field__is_insert_attachment'
                            label={ __( 'Insert attachment' ) }
                            checked={ attributes.field__is_insert_attachment }
                            help={ Tools.getHelpMessage( window.jetFormMediaFieldData, 'field__is_insert_attachment' ) }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field__is_insert_attachment: Boolean(newValue) } );
                            } }
                        />
                        <NumberControl
                            key='field__max_allowed_to_upload'
                            label={ __( 'Maximum allowed files to upload' ) }
                            labelPosition='top'
                            help={ Tools.getHelpMessage( window.jetFormMediaFieldData, 'field__max_allowed_to_upload' ) }
                            value={ attributes.field__max_allowed_to_upload }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field__max_allowed_to_upload: parseInt(newValue) } );
                            } }
                        />
                        <NumberControl
                            label={ __( 'Maximum size in Mb' ) }
                            labelPosition='top'
                            key='field__max_size_mb'
                            help={ Tools.getHelpMessage( window.jetFormMediaFieldData, 'field__max_size_mb' ) }
                            value={ attributes.field__max_size_mb }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field__max_size_mb: parseInt(newValue) } );
                            } }
                        />
                        <SelectControl
                            multiple
                            key='field__mime_types'
                            label={ __( 'Allow MIME types' ) }
                            labelPosition='top'
                            help={ Tools.getHelpMessage( window.jetFormMediaFieldData, 'field__mime_types' ) }
                            value={ attributes.field__mime_types }
                            onChange={ ( newValue ) => {
                                console.log( newValue );
                                props.setAttributes( { field__mime_types: newValue } );
                            } }
                            options={ localizeData.mime_types }
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
                title={ 'Media Field' }
                subtitle={ [ attributes.label, attributes.name ] }
                isRequired={ attributes.required }
            />
        ];
    }
}