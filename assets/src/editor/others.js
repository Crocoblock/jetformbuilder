
const {
    registerBlockType,
} = wp.blocks;

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
    PanelBody,
    Button,
} = wp.components;

function FormEdit ( props ) {
    this.name = 'jet-forms/form';

    this.keyControls = function () {
        return this.name + '-controls-edit';
    }
    this.keyGeneral = function () {
        return this.name + '-general-edit';
    }
    
    const attributes = props.attributes;

    return props.isSelected && (
        <InspectorControls
            key={this.keyControls()}
        >
            <PanelBody
                title={__('Form Settings')}
                key={this.keyGeneral()}
            >


            </PanelBody>
        </InspectorControls>);

}

function FormSave( props ) {
    return null;
}

const formBlock = window.jetFormBuilderBlocks ? window.jetFormBuilderBlocks[0] : false;


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
            multiple: false,
        },
    }
);