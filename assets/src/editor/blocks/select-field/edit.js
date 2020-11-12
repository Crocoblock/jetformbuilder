import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';

import FromTermsFields from "../base-select-check-radio/from-terms-fields";
import FromPostsFields from "../base-select-check-radio/from-posts-fields";
import FromGeneratorsFields from "../base-select-check-radio/from-generators-fields";
import FromManualFields from "../base-select-check-radio/from-manual-fields";
import Tools from "../../tools/tools";

const block = 'jet-forms/select-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const localizeData = window.JetFormSelectFieldData;

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

window.jetFormBuilderBlockCallbacks[ block ].edit = class SelectEdit extends wp.element.Component {

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
                        key={ 'select_fields' }
                    >
                        <SelectControl
                            key='field_options_from'
                            label={ __( 'Fill Options From' ) }
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
                        /> }
                        { 'terms' === attributes.field_options_from && <FromTermsFields
                            key='from_terms'
                            attributes={ attributes }
                            parentProps={ props }
                            localizeData={ window.JetFormSelectFieldData }
                        /> }

                        { 'meta_field' === attributes.field_options_from && <TextControl
                            key='field_options_key'
                            label={ __( 'Meta field to get value from' ) }
                            value={ attributes.field_options_key }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { field_options_key: newValue } );
                            } }
                        /> }

                        { 'generate' === attributes.field_options_from && <FromGeneratorsFields
                            key='from_generator'
                            attributes={ attributes }
                            parentProps={ props }
                        /> }

                        <ToggleControl
                            key='is_switch_page'
                            label={ __( 'Switch page on change' ) }
                            checked={ attributes.is_switch_page }
                            help={ Tools.getHelpMessage( window.JetFormSelectFieldData, 'is_switch_page' ) }
                            onChange={ ( newValue ) => {
                                props.setAttributes( { is_switch_page: Boolean(newValue) } );
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
            <SelectControl
                key={`place_holder_block_${block}`}
                label={ attributes.label }
                labelposition='top'
                options={ [
                    { label: 'Sample 1' },
                    { label: 'Sample 2' },
                    { label: 'Sample 3' },
                    { label: 'Sample 4' },
                ] }
            />
        ];
    }
}