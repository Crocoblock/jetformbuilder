import Tools from "../../tools";
import ActionModal from "../../components/action-modal";
import RepeaterWithState from "../../components/repeater-with-state";
import FieldWithPreset from "../../components/field-with-preset";
import DynamicPreset from "../../components/presets/dynamic-preset";

const block = 'jet-forms/conditional-block';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
	BlockControls,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	Button,
	ToolbarGroup,
	TextareaControl,
	SelectControl,
	BaseControl,
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

const keyControls = block + '-controls-edit';

const condition = {
	type: 'hide',
	field: '',
	operator: '',
	value: '',
	set_value: '',
};

const conditionTypes = [
	{ label: '--', value: '' },
	{
		label: 'Hide this field if...',
		value: 'hide'
	},
	{
		label: 'Show this field if...',
		value: 'show'
	},
	{
		label: 'Set value for this field if...',
		value: 'set_value',
		condition: 'isSingleField',
	},
];

const conditionOperators = [
	{ label: '--', value: '' },
	{ label: 'Equal', value: 'equal' },
	{ label: 'Greater than', value: 'greater' },
	{ label: 'Less than', value: 'less' },
	{ label: 'Between', value: 'between' },
	{ label: 'In the list', value: 'one_of' },
	{ label: 'Contain text', value: 'contain' },
];


function ConditionalBlockEdit( {
								   isSelected,
								   setAttributes,
								   attributes,
								   clientId
							   } ) {

	Tools.addConditionForCondType( 'isSingleField', () => {
		return 1 === Tools.getInnerBlocks( clientId ).length;
	} )

	const getConditionTypes = Tools.parseConditionsFunc( conditionTypes );
	const [showModal, setShowModal] = useState( false );

	const formFields = Tools.getFormFieldsBlocksWithPlaceholder();

	return [
		<BlockControls key={ keyControls + '-block' }>
			<ToolbarGroup>
				<Button
					isTertiary
					isSmall
					icon='randomize'
					onClick={ () => setShowModal( true ) }
				/>
			</ToolbarGroup>
		</BlockControls>,
		isSelected && (
			<InspectorControls
				key={ keyControls }
			>
			</InspectorControls>
		),
		<InnerBlocks
			key={ 'conditional-fields' }
			renderAppender={ () => <InnerBlocks.ButtonBlockAppender/> }
		/>,
		showModal && <ActionModal
			classNames={ ['width-60'] }
			onRequestClose={ () => setShowModal( false ) }
			title="Conditional Logic"
		>
			{ ( { actionClick, onRequestClose } ) => <RepeaterWithState
				items={ attributes.conditions }
				isSaveAction={ actionClick }
				onUnMount={ onRequestClose }
				newItem={ condition }
				onSaveItems={ conditions => setAttributes( { conditions } ) }
				addNewButtonLabel="New Condition"
				help={ {
					helpVisible: conditions => conditions.length > 1,
					helpSource: window.JetFormEditorData.helpForRepeaters,
					helpKey: 'conditional_block'
				} }
			>
				{ ( { currentItem, changeCurrentItem } ) => <>
					<SelectControl
						label="Type"
						labelPosition="side"
						value={ currentItem.type }
						options={ getConditionTypes }
						onChange={ newValue => {
							changeCurrentItem( { type: newValue } );
						} }
					/>
					<SelectControl
						label="Field"
						labelPosition="side"
						value={ currentItem.field }
						options={ formFields }
						onChange={ newValue => {
							changeCurrentItem( { field: newValue } );
						} }
					/>
					<SelectControl
						label="Operator"
						labelPosition="side"
						value={ currentItem.operator }
						options={ conditionOperators }
						onChange={ newValue => {
							changeCurrentItem( { operator: newValue } );
						} }
					/>
					<FieldWithPreset
						key="value_to_compare"
						ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
							value={ currentItem.value }
							isSaveAction={ actionClick }
							onSavePreset={ newValue => {
								changeCurrentItem( { value: newValue } );
							} }
							onUnMount={ onRequestClose }
						/> }
						triggerClasses={ ['trigger__textarea'] }
					>
						<TextareaControl
							label="Value to Compare"
							value={ currentItem.value }
							onChange={ newValue => {
								changeCurrentItem( { value: newValue } );
							} }
						/>
					</FieldWithPreset>
					{ 'set_value' === currentItem.type && <FieldWithPreset
						key="value_to_set"
						ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
							value={ currentItem.set_value }
							isSaveAction={ actionClick }
							onSavePreset={ newValue => {
								changeCurrentItem( { set_value: newValue } );
							} }
							onUnMount={ onRequestClose }
						/> }
						triggerClasses={ ['trigger__textarea'] }
					>
						<TextareaControl
							label={ __( 'Value to Set', 'jet-form-builder' ) }
							help={ __( 'Separate values with commas', 'jet-form-builder' ) }
							value={ currentItem.set_value }
							onChange={ newValue => {
								changeCurrentItem( { set_value: newValue } );
							} }
						/>
					</FieldWithPreset> }
				</> }
			</RepeaterWithState> }
		</ActionModal>
	];
}

window.jetFormBuilderBlockCallbacks[ block ].edit = ConditionalBlockEdit;