import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../tools";
import FieldWrapper from '../../components/field-wrapper';
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
	set_value: ''
};

const conditionTypes = [
	{ label: 'Hide this field if...', value: 'hide' },
	{ label: 'Show this field if...', value: 'show' },
	{ label: 'Set value for this field if...', value: 'set_value' },
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

window.jetFormBuilderBlockCallbacks[ block ].edit = function ConditionalBlockEdit( { isSelected, setAttributes, attributes } ) {

	const [ showModal, setShowModal ] = useState( false );
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
			>
				{ ( { currentItem, changeCurrentItem } ) => <>
					<SelectControl
						label="Type"
						labelPosition="side"
						value={ currentItem.type }
						options={ conditionTypes }
						onChange={ newValue => {
							changeCurrentItem( {
								value: newValue,
								name: 'type',
							} );
						} }
					/>
					<SelectControl
						label="Field"
						labelPosition="side"
						value={ currentItem.field }
						options={ formFields }
						onChange={ newValue => {
							changeCurrentItem( {
								value: newValue,
								name: 'field',
							} );
						} }
					/>
					<SelectControl
						label="Operator"
						labelPosition="side"
						value={ currentItem.operator }
						options={ conditionOperators }
						onChange={ newValue => {
							changeCurrentItem( {
								value: newValue,
								name: 'operator',
							} );
						} }
					/>
					<FieldWithPreset
						ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
							value={ currentItem.value }
							isSaveAction={ actionClick }
							onSavePreset={ newValue => {
								changeCurrentItem( {
									value: newValue,
									name: 'value',
								} );
							} }
							onUnMount={ onRequestClose }
						/> }
						triggerClasses={ ['trigger--unset-margin-top'] }
					>
						<TextareaControl
							label="Value to Compare"
							value={ currentItem.value }
							onChange={ newValue => {
								changeCurrentItem( {
									value: newValue,
									name: 'value',
								} );
							} }
						/>
					</FieldWithPreset>
				</> }
			</RepeaterWithState> }
		</ActionModal>
	];
}