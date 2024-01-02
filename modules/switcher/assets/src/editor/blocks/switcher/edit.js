import preview from './preview';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      StylePanel,
	      StyleColorItem,
	      StyleColorItemsWrapper,
	      StyleBorderItem,
	      StyleBorderRadiusItem,
      } = JetFBComponents;

const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
	      useJetStyle,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      PanelBody,
	      RangeControl,
	      ToggleControl,
      } = wp.components;

export default function WysiwygEdit( props ) {

	const {
		      editProps: { uniqKey },
		      isSelected,
		      attributes,
		      setAttributes,
	      } = props;

	const jetStyle = useJetStyle?.( {
		className: [
			'jet-form-builder-row',
			'field-type-switcher',
		].join( ' ' ),
	} ) ?? {};

	const blockProps           = useBlockProps( jetStyle );
	const isAdvancedValidation = useIsAdvancedValidation();

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

	return <>
		{ isSelected && <>
			<ToolBarFields
				key={ uniqKey( 'ToolBarFields' ) }
				{ ...props }
			/>
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields hasMacro={ false }/>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		</> }
		<div { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<input
					type="checkbox"
					role="switch"
					className="jet-form-builder__field"
				/>
			</FieldWrapper>
		</div>
	</>;

}