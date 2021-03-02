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
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	PanelBody,
	Button,
	ComboboxControl,
	SelectControl,
	TextControl,
	ToggleControl
} = wp.components;

const {
	serverSideRender: ServerSideRender
} = wp;

const { useState } = wp.element;

const formBlock = window.jetFormBuilderBlocks ? window.jetFormBuilderBlocks[ 0 ] : false;

function FormEdit( { attributes, setAttributes, isSelected } ) {
	this.name = 'jet-forms/form-block';

	this.keyControls = function () {

		return this.name + '-controls-edit';
	};
	this.keyGeneral = function () {

		return this.name + '-general-edit';
	};

	const localize = window.JetFormData;

	return [
		isSelected && <InspectorControls
			key={ this.keyControls() }
		>
			<PanelBody
				title={ __( 'Form Settings' ) }
				key={ this.keyGeneral() }
			>
				<SelectControl
					key='form_id'
					label={ __( 'Choose Form' ) }
					labelposition='top'
					value={ attributes.form_id }
					onChange={ newValue => {
						setAttributes( { form_id: Number( newValue ) } );
					} }
					options={ localize.forms_list }
				/>
				{ Boolean( attributes.form_id ) && <React.Fragment>
					<SelectControl
						label={ 'Fields Layout' }
						value={ attributes.fields_layout }
						options={ localize.fields_layout }
						onChange={ newValue => {
							setAttributes( { fields_layout: newValue } );
						} }
					/>
					<TextControl
						label={ 'Required Mark' }
						value={ attributes.required_mark }
						onChange={ newValue => {
							setAttributes( { required_mark: newValue } );
						} }
					/>
					<SelectControl
						label={ 'Submit Type' }
						value={ attributes.submit_type }
						options={ localize.submit_type }
						onChange={ newValue => {
							setAttributes( { submit_type: newValue } );
						} }
					/>
					<ToggleControl
						key={ 'enable_progress' }
						label={ __( 'Enable form pages progress' ) }
						checked={ attributes.enable_progress }
						onChange={ newVal => {
							setAttributes( { enable_progress: Boolean( newVal ) } );
						} }
					/>
				</React.Fragment> }
			</PanelBody>
		</InspectorControls>,
		<ServerSideRender
			block={ formBlock.blockName }
			attributes={ attributes }
			httpMethod={ 'POST' }
		/>
	];

}

function FormSave( props ) {
	return null;
}

registerBlockType(
	formBlock.blockName, {

		title: formBlock.title,
		category: 'layout',
		icon: <span dangerouslySetInnerHTML={ { __html: formBlock.icon } }></span>,
		attributes: formBlock.attributes,
		edit: FormEdit,
		save: FormSave,

		supports: {
			html: false,
		},
	}
);