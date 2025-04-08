import preview from './preview';

const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      AdvancedInspectorControl,
	      ClientSideMacros,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      AttributeHelp,
      } = JetFBComponents;
const {
	      useInsertMacro,
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextControl,
	      PanelBody,
	      __experimentalInputControl,
	      ExternalLink,
      } = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

// eslint-disable-next-line max-lines-per-function
export default function TimeEdit( props ) {
	const {
		      isSelected,
		      attributes,
		      setAttributes,
		      editProps: { uniqKey },
	      } = props;

	const blockProps = useBlockProps();

	const [ minInput, updateMin ] = useInsertMacro( 'min' );
	const [ maxInput, updateMax ] = useInsertMacro( 'max' );
	const isAdvancedValidation    = useIsAdvancedValidation();

	useUniqueNameOnDuplicate();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	const help = <>
		{ __(
			'Plain date should be in hh:mm format.',
			'jet-form-builder',
		) }
		&nbsp;
		{ __( 'Or you can use', 'jet-form-builder' ) }
		&nbsp;
		<ExternalLink
			href="https://github.com/Crocoblock/jetformbuilder/wiki/Frontend-Macros---External-Macros#ctcurrentdate"
		>
			{ __( 'macros', 'jet-form-builder' ) }
		</ExternalLink>
		&nbsp;
		{ __( 'and', 'jet-form-builder' ) }
		&nbsp;
		<ExternalLink
			href="https://github.com/Crocoblock/jetformbuilder/wiki/Frontend-Macros---Filters"
		>
			{ __( 'filters', 'jet-form-builder' ) }
		</ExternalLink>.
	</>;

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<BlockAdvancedValue
					help={ help }
					style={ { marginBottom: '1em' } }
				/>
				<ClientSideMacros>
					<AdvancedInspectorControl
						value={ attributes.min }
						label={ __( 'Starting from time', 'jet-form-builder' ) }
						onChangePreset={ min => setAttributes( { min } ) }
						onChangeMacros={ updateMin }
					>
						{ ( { instanceId } ) => <>
							<TextControl
								id={ instanceId }
								ref={ minInput }
								className="jet-fb m-unset"
								value={ attributes.min }
								onChange={ min => setAttributes( { min } ) }
							/>
							<AttributeHelp>{ help }</AttributeHelp>
						</> }
					</AdvancedInspectorControl>
					<AdvancedInspectorControl
						value={ attributes.max }
						label={ __( 'Limit time to', 'jet-form-builder' ) }
						onChangePreset={ max => setAttributes( { max } ) }
						onChangeMacros={ updateMax }
					>
						{ ( { instanceId } ) => <>
							<TextControl
								id={ instanceId }
								ref={ maxInput }
								className="jet-fb m-unset"
								value={ attributes.max }
								onChange={ max => setAttributes( { max } ) }
							/>
							<AttributeHelp>{ help }</AttributeHelp>
						</> }
					</AdvancedInspectorControl>
				</ClientSideMacros>
			</PanelBody>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					{ Boolean( attributes.min ) && <>
						<ValidationBlockMessage name="date_min"/>
					</> }
					{ Boolean( attributes.max ) && <>
						<ValidationBlockMessage name="date_max"/>
					</> }
					<ValidationBlockMessage name="empty"/>
				</> }
			</PanelBody>
			<AdvancedFields/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					onChange={ () => {
					} }
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ 'Input type="time"' }
				/>
			</FieldWrapper>
		</div>,
	];
}