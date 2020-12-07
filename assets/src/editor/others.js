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
	SelectControl,
	TextControl
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

	const forms_list = window.JetFormData.forms_list;

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
					options={ [
						{ label: __( 'Select form...' ), value: 0 },
						...forms_list
					] }
				/>
				{ Boolean( attributes.form_id ) && <React.Fragment>
					<SelectControl
						label={ 'Fields Layout' }
						value={ attributes.fields_layout }
						options={ [
							{ value: 'column', label: 'Column' },
							{ value: 'row', label: 'Row' }
						] }
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
						options={ [
							{ value: 'reload', label: 'Page Reload' },
							{ value: 'ajax', label: 'AJAX' }
						] }
						onChange={ newValue => {
							setAttributes( { submit_type: newValue } );
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
		icon: 'feedback',
		attributes: formBlock.attributes,
		edit: FormEdit,
		save: FormSave,

		supports: {
			html: false,
		},
	}
);