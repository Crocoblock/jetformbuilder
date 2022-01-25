import metadata from "@blocks/form-block/block.json"

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
						label={ __( 'Fields Layout', 'jet-form-builder' ) }
						value={ attributes.fields_layout }
						options={ localize.fields_layout }
						onChange={ fields_layout => setAttributes( { fields_layout } ) }
					/>
					<TextControl
						label={ __( 'Required Mark', 'jet-form-builder' ) }
						value={ attributes.required_mark }
						onChange={ required_mark => setAttributes( { required_mark } ) }
					/>
					<SelectControl
						label={ __( 'Fields label HTML tag', 'jet-form-builder' ) }
						value={ attributes.fields_label_tag }
						options={ localize.fields_label_tag }
						onChange={ fields_label_tag => setAttributes( { fields_label_tag } ) }
					/>
					<SelectControl
						label={ __( 'Submit Type', 'jet-form-builder' ) }
						value={ attributes.submit_type }
						options={ localize.submit_type }
						onChange={ submit_type => setAttributes( { submit_type } ) }
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
		</div>,
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
	},
);