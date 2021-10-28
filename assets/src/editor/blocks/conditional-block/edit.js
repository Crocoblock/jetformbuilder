import { options } from "./options";

const {
		  RepeaterWithState,
		  ActionModal,
		  FieldWithPreset,
		  DynamicPreset,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const {
		  getFormFieldsBlocks,
		  getInnerBlocks,
		  Tools,
	  } = JetFBActions;

const { __ } = wp.i18n;

const {
		  BlockControls,
		  InnerBlocks,
		  useBlockProps,
		  InspectorControls,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  Button,
		  ToolbarGroup,
		  TextareaControl,
		  SelectControl,
		  TextControl,
	  } = wp.components;

const {
		  useState,
		  useEffect,
	  } = wp.element;

export default function ConditionalBlockEdit( props ) {

	const blockProps = useBlockProps();

	const {
			  setAttributes,
			  attributes,
			  clientId,
			  editProps: { uniqKey },
		  } = props;

	useEffect( () => {
		if ( ! attributes.name ) {
			setAttributes( { name: clientId } )
		}
	}, [] );

	Tools.addConditionForCondType( 'isSingleField', () => {
		return 1 === getInnerBlocks( clientId ).length;
	} )

	const getConditionTypes = Tools.parseConditionsFunc( options.conditionTypes );
	const [ showModal, setShowModal ] = useState( false );
	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		if ( showModal ) {
			setFormFields( getFormFieldsBlocks( [], '--' ) );
		}
	}, [ showModal ] );

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<FieldSettingsWrapper
				key={ uniqKey( 'FieldSettingsWrapper' ) }
				{ ...props }
			>
				<TextControl
					label={ __( 'Last Page Name', 'jet-form-builder' ) }
					key={ uniqKey( 'last_page_name' ) }
					value={ attributes.last_page_name }
					help={ __( 'The value of this field will be set as the name of the last page with the "Progress Bar" block.', 'jet-form-builder' ) }
					onChange={ last_page_name => setAttributes( { last_page_name } ) }
				/>
			</FieldSettingsWrapper>
		</InspectorControls>,
		<BlockControls key={ uniqKey( 'BlockControls' ) }>
			<ToolbarGroup key={ uniqKey( 'ToolbarGroup' ) }>
				<Button
					key={ uniqKey( 'randomize' ) }
					isTertiary
					isSmall
					icon='randomize'
					onClick={ () => setShowModal( true ) }
				/>
			</ToolbarGroup>
		</BlockControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className='jet-form-builder__conditional'>
				<InnerBlocks
					key={ uniqKey( 'conditional-fields' ) }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender key={ uniqKey( 'ButtonBlockAppender' ) }/> }
				/>
			</div>
		</div>,
		showModal && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => setShowModal( false ) }
			title="Conditional Logic"
		>
			{ ( { actionClick, onRequestClose } ) => <RepeaterWithState
				key={ uniqKey( 'RepeaterWithState' ) }
				items={ attributes.conditions }
				isSaveAction={ actionClick }
				onUnMount={ onRequestClose }
				newItem={ options.condition }
				onSaveItems={ conditions => setAttributes( { conditions } ) }
				addNewButtonLabel={ __( "New Condition", 'jet-form-builder' ) }
			>
				{ ( { currentItem, changeCurrentItem } ) => <>
					<SelectControl
						key={ uniqKey( 'SelectControl-type' ) }
						label="Type"
						labelPosition="side"
						value={ currentItem.type }
						options={ getConditionTypes }
						onChange={ newValue => {
							changeCurrentItem( { type: newValue } );
						} }
					/>
					<SelectControl
						key={ uniqKey( 'SelectControl-field' ) }
						label="Field"
						labelPosition="side"
						value={ currentItem.field }
						options={ formFields }
						onChange={ newValue => {
							changeCurrentItem( { field: newValue } );
						} }
					/>
					<SelectControl
						key={ uniqKey( 'SelectControl-operator' ) }
						label="Operator"
						labelPosition="side"
						value={ currentItem.operator }
						options={ options.conditionOperators }
						onChange={ newValue => {
							changeCurrentItem( { operator: newValue } );
						} }
					/>
					<FieldWithPreset
						key={ uniqKey( 'FieldWithPreset-value_to_compare' ) }
						baseControlProps={ {
							label: "Value to Compare",
						} }
						ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
							key={ uniqKey( 'DynamicPreset-value_to_compare' ) }
							value={ currentItem.value }
							isSaveAction={ actionClick }
							onSavePreset={ newValue => {
								changeCurrentItem( { value: newValue } );
							} }
							onUnMount={ onRequestClose }
						/> }
						triggerClasses={ [ 'trigger__textarea' ] }
					>
						<TextareaControl
							key={ uniqKey( 'TextareaControl-value' ) }
							className={ 'jet-control-clear jet-user-fields-map__list' }
							value={ currentItem.value }
							onChange={ newValue => {
								changeCurrentItem( { value: newValue } );
							} }
						/>
					</FieldWithPreset>
					{ 'set_value' === currentItem.type && <FieldWithPreset
						key={ uniqKey( 'FieldWithPreset-value_to_set' ) }
						baseControlProps={ {
							label: __( 'Value to Set', 'jet-form-builder' ),
							help: __( 'Separate values with commas', 'jet-form-builder' ),
						} }
						ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
							key={ uniqKey( 'DynamicPreset-value_to_set' ) }
							value={ currentItem.set_value }
							isSaveAction={ actionClick }
							onSavePreset={ newValue => {
								changeCurrentItem( { set_value: newValue } );
							} }
							onUnMount={ onRequestClose }
						/> }
						triggerClasses={ [ 'trigger__textarea' ] }
					>
						<TextareaControl
							key={ uniqKey( 'TextareaControl-set_value' ) }
							className={ 'jet-control-clear jet-user-fields-map__list' }
							value={ currentItem.set_value }
							onChange={ newValue => {
								changeCurrentItem( { set_value: newValue } );
							} }
						/>
					</FieldWithPreset> }
				</> }
			</RepeaterWithState> }
		</ActionModal>,
	];
}