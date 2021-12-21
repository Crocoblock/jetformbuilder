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
		icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="42" height="2" rx="1" fill="#162B40"/>
			<path
				d="M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z"
				fill="#162B40"/>
			<rect x="1" y="2" width="62" height="61" rx="3" fill="white" stroke="#162B40" stroke-width="2"/>
			<rect x="7" y="19" width="50" height="11" rx="2" fill="#6F8CFF" stroke="#162B40" stroke-width="2"/>
			<rect x="7" y="35" width="50" height="11" rx="2" fill="#4AF3BA" stroke="#162B40" stroke-width="2"/>
			<rect x="39" y="51" width="18" height="7" rx="2" fill="white" stroke="#162B40" stroke-width="2"/>
		</svg>,
		attributes: metadata.attributes,
		edit: FormEdit,
	},
);