
const {
    registerBlockType,
} = wp.blocks;

const { __ } = wp.i18n;

const {
    ColorPalette,
    RichText,
    Editable,
    MediaUpload,
    BlockControls,
    InspectorControls,
} = wp.blockEditor;

const {
    PanelBody,
    Button,
    ComboboxControl,
    SelectControl
} = wp.components;

const {
    serverSideRender: ServerSideRender
} = wp;

const { useState } = wp.element;

const formBlock = window.jetFormBuilderBlocks ? window.jetFormBuilderBlocks[0] : false;

function FormEdit ( { attributes, setAttributes, isSelected } ) {
    this.name = 'jet-forms/form-block';

    this.keyControls = function () {

        return this.name + '-controls-edit';
    };
    this.keyGeneral = function () {

        return this.name + '-general-edit';
    };

    const forms_list = window.JetFormData.forms_list;
    //const [ filteredOptions, setFilteredOptions ] = useState( forms_list );

    return [
        isSelected && <InspectorControls
            key={ this.keyControls() }
        >
            <PanelBody
                title={ __('Form Settings') }
                key={ this.keyGeneral() }
            >
                {/*<ComboboxControl
                    label='Select from'
                    name='_form_id'
                    value={ attributes.form_id }
                    onChange={ val => {
                        if ( ! val ) {
                            val = 0;
                        }
                        setAttributes( { form_id: val } )
                    } }
                    options={ filteredOptions }
                />*/}
                <SelectControl
                    key='form_id'
                    label={ __( 'Choose Form' ) }
                    labelposition='top'
                    value={ attributes.form_id }
                    onChange={ newValue => {
                        setAttributes( { form_id: Number( newValue ) } );
                    } }
                    options={ [
                        { label: __( 'Select form...' ) },
                        ...forms_list
                    ] }
                />
            </PanelBody>
        </InspectorControls>,
        <ServerSideRender
            block={ formBlock.blockName }
            attributes={ attributes }
        />
    ];

}

function FormSave( props ) {
    return null;
}




registerBlockType(
    formBlock.blockName, {

        title:  formBlock.title,
        category: 'layout',
        icon: 'feedback',
        attributes: formBlock.attributes,
        edit: FormEdit,
        save: FormSave,

        supports: {
            html: false,
        },
    }
);