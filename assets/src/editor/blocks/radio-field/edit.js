import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';

import FromTermsFields from "../base-select-check-radio/from-terms-fields";
import FromPostsFields from "../base-select-check-radio/from-posts-fields";
import FromGeneratorsFields from "../base-select-check-radio/from-generators-fields";
import FromManualFields from "../base-select-check-radio/from-manual-fields";

const block = 'jet-forms/radio-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const localizeData = window.JetFormRadioFieldData;

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
} = wp.components;

const keyControls = () => block + '-controls-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class RadioEdit extends wp.element.Component {
    render() {
        const props      = this.props;
        const attributes = props.attributes;
        const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

        return [
            hasToolbar && (
                <BlockControls key={ keyControls() }>
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
                    key={ 'inspector' }
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
                        key={ 'checkbox_fields' }
                    >
                        <SelectControl
                            key='field_options_from'
                            label='Fill Options From'
                            labelPosition='top'
                            value={ attributes.field_options_from }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field_options_from: newValue } );
                            } }
                            options={ localizeData.options_from }
                        />
                        { 'manual_input' === attributes.field_options_from && <FromManualFields
                            key='from_manual'
                            attributes={ attributes }
                            parentProps={ props }
                        /> }
                        { 'posts' === attributes.field_options_from && <FromPostsFields
                            key='from_posts'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ localizeData }
                        /> }
                        { 'terms' === attributes.field_options_from && <FromTermsFields
                            key='from_terms'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ localizeData }
                        /> }

                        { 'meta_field' === attributes.field_options_from && <TextControl
                            key='field_options_key'
                            label='Meta field to get value from'
                            value={ attributes.field_options_key }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field_options_key: newValue } );
                            } }
                        /> }

                        { 'generate' === attributes.field_options_from && <FromGeneratorsFields
                            key='from_generators'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ localizeData }
                        /> }

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
                title={ 'Radio Field' }
                subtitle={ [ attributes.label, attributes.name ] }
                isRequired={ attributes.required }
            />
        ];
    }
}