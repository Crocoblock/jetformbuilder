import Tools from "../../helpers/tools";
import ActionModal from "../../components/actions/action-modal";
import RepeaterWithState from "../../components/repeater-with-state";
import FieldWithPreset from "../../components/field-with-preset";
import DynamicPreset from "../../components/presets/dynamic-preset";
import {
	getFormFieldsBlocks,
	getInnerBlocks
} from "../../helpers/blocks-helper";

const { __ } = wp.i18n;

const {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps
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


export default function ConditionalBlockEdit( props ) {

	const blockProps = useBlockProps();

	const {
		setAttributes,
		attributes,
		clientId,
		editProps: { uniqKey }
	} = props;

	Tools.addConditionForCondType( 'isSingleField', () => {
		return 1 === getInnerBlocks( clientId ).length;
	} )

	const getConditionTypes = Tools.parseConditionsFunc( conditionTypes );
	const [ showModal, setShowModal ] = useState( false );

	const formFields = getFormFieldsBlocks( [], '--' );

	return [
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
			<InnerBlocks
				key={ uniqKey( 'conditional-fields' ) }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender key={ uniqKey( 'ButtonBlockAppender' ) }/> }
			/>
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
				newItem={ condition }
				onSaveItems={ conditions => setAttributes( { conditions } ) }
				addNewButtonLabel={ __( "New Condition" ) }
				help={ {
					helpVisible: conditions => conditions.length > 1,
					helpSource: window.JetFormEditorData.helpForRepeaters,
					helpKey: 'conditional_block'
				} }
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
						options={ conditionOperators }
						onChange={ newValue => {
							changeCurrentItem( { operator: newValue } );
						} }
					/>
					<FieldWithPreset
						key={ uniqKey( 'FieldWithPreset-value_to_compare' ) }
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
							label="Value to Compare"
							value={ currentItem.value }
							onChange={ newValue => {
								changeCurrentItem( { value: newValue } );
							} }
						/>
					</FieldWithPreset>
					{ 'set_value' === currentItem.type && <FieldWithPreset
						key={ uniqKey( 'FieldWithPreset-value_to_set' ) }
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