import metadata from '@blocks/form-block/block.json';
import preview from './form-block.preview';

const {
	      registerBlockType,
      } = wp.blocks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	      PanelBody,
	      SelectControl,
	      TextControl,
	      ToggleControl,
      } = wp.components;

const {
	      serverSideRender: ServerSideRender,
      } = wp;

const uniqKey = suffix => `${ metadata.name }/${ suffix }`;

// eslint-disable-next-line max-lines-per-function
function FormEdit( { attributes, setAttributes, isSelected } ) {

	const localize   = window.JetFormData;
	const blockProps = useBlockProps();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return [
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody
				title={ __( 'Form Settings', 'jet-form-builder' ) }
				key={ uniqKey( 'PanelBody' ) }
			>
				<SelectControl
					key="form_id"
					label={ __( 'Choose Form', 'jet-form-builder' ) }
					labelposition="top"
					value={ attributes.form_id }
					onChange={ newValue => {
						setAttributes( { form_id: Number( newValue ) } );
					} }
					options={ localize.forms_list }
				/>
				{ Boolean( attributes.form_id ) && <>
					<SelectControl
						label={ __( 'Fields Layout', 'jet-form-builder' ) }
						value={ attributes.fields_layout }
						options={ localize.fields_layout }
						onChange={ val => setAttributes(
							{ fields_layout: val },
						) }
					/>
					<TextControl
						label={ __( 'Required Mark', 'jet-form-builder' ) }
						value={ attributes.required_mark }
						onChange={ val => setAttributes(
							{ required_mark: val },
						) }
					/>
					<SelectControl
						label={ __( 'Fields label HTML tag',
							'jet-form-builder' ) }
						value={ attributes.fields_label_tag }
						options={ localize.fields_label_tag }
						onChange={ val => setAttributes(
							{ fields_label_tag: val },
						) }
					/>
					<SelectControl
						label={ __( 'Submit Type', 'jet-form-builder' ) }
						value={ attributes.submit_type }
						options={ localize.submit_type }
						onChange={ val => setAttributes(
							{ submit_type: val },
						) }
					/>
					<ToggleControl
						key={ 'enable_progress' }
						label={ __( 'Enable form pages progress',
							'jet-form-builder' ) }
						checked={ attributes.enable_progress }
						onChange={ newVal => {
							setAttributes(
								{ enable_progress: Boolean( newVal ) } );
						} }
					/>
				</> }
			</PanelBody>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<ServerSideRender
				block={ metadata.name }
				attributes={ attributes }
				httpMethod={ 'POST' }
			/>
		</div>,
	];
}

registerBlockType(
	metadata.name,
	{
		...metadata,
		title: __( 'JetForm', 'jet-form-builder' ),
		description: __(
			`Display the created form on any WordPress page with the JetForm widget or block. Set the fields layout, required mark, and submit type.`,
			'jet-form-builder',
		),
		icon: <span
			dangerouslySetInnerHTML={ { __html: metadata.icon } }></span>,
		attributes: metadata.attributes,
		edit: FormEdit,
		example: {
			attributes: {
				isPreview: true,
			},
		},
	},
);