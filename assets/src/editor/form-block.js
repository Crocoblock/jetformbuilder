import metadata from "./blocks/form-block/block.json"
import {
	fieldsLayout,
	submitTypes
} from "./blocks/form-block/options";

const {
	registerBlockType,
} = wp.blocks;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl
} = wp.components;

const {
	serverSideRender: ServerSideRender
} = wp;

const uniqKey = suffix => `${ metadata.name }/${ suffix }`;

function FormEdit( { attributes, setAttributes, isSelected } ) {

	const localize = window.JetFormData;
	const blockProps = useBlockProps();

	return [
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody
				title={ __( 'Form Settings' ) }
				key={ uniqKey( 'PanelBody' ) }
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
						options={ fieldsLayout }
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
						options={ submitTypes }
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
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<ServerSideRender
				block={ metadata.name }
				attributes={ attributes }
				httpMethod={ 'POST' }
			/>
		</div>
	];
}

registerBlockType(
	metadata.name,
	{
		...metadata,
		title: __( 'JetForm' ),
		icon: <span dangerouslySetInnerHTML={ { __html: metadata.icon } }></span>,
		attributes: metadata.attributes,
		edit: FormEdit,
	}
);