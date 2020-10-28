import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';

import FromTermsFields from "../base-select-check-radio/from-terms-fields";
import FromPostsFields from "../base-select-check-radio/from-posts-fields";
import FromGeneratorsFields from "../base-select-check-radio/from-generators-fields";
import FromManualFields from "../base-select-check-radio/from-manual-fields";

const block = 'jet-forms/checkbox-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const localizeData = window.JetFormCheckboxFieldData;

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

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class CheckboxEdit extends wp.element.Component {
    render() {
        const props      = this.props;
        const attributes = props.attributes;
        const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

        return [
            hasToolbar && (
                <BlockControls>
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
                        key={ 'checkbox_fields' }
                    >
                        <SelectControl
                            key='fill_options_from'
                            label='Fill Options From'
                            labelPosition='top'
                            value={ attributes.fill_options_from }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { fill_options_from: newValue } );
                            } }
                            options={ localizeData.options_from }
                        />
                        { 'manual_input' === attributes.fill_options_from && <FromManualFields
                            key='from_manual'
                            attributes={ attributes }
                            parentProps={ props }
                        /> }
                        { 'posts' === attributes.fill_options_from && <FromPostsFields
                            key='form_posts'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ localizeData }
                        /> }
                        { 'terms' === attributes.fill_options_from && <FromTermsFields
                            key='form_terms'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ localizeData }
                        /> }

                        { 'meta_field' === attributes.fill_options_from && <TextControl
                            key='from_meta_field'
                            label='Meta field to get value from'
                            value={ attributes.from_meta_field }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { from_meta_field: newValue } );
                            } }
                        /> }

                        { 'generate' === attributes.fill_options_from && <FromGeneratorsFields
                            key='form_generators'
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
                key={ keyPlaceHolder }
                title={ 'Checkbox Field' }
                subtitle={ [ attributes.name ] }
                isRequired={ attributes.required }
            />
        ];
    }
}