import ActionFieldsMap from './action-fields-map/components/ActionFieldsMap';
import ActionModal from './action-modal/components/ActionModal';
import WrapperRequiredControl
	from './action-fields-map/components/WrapperRequiredControl';
import RequestButton from './actions/components/RequestButton';
import ValidateButton from './actions/components/ValidateButton';
import addAction from './actions/helpers/addAction';
import Tools, {
	classnames,
	event,
	getConvertedName,
	listen,
	maybeCyrToLatin,
	versionCompare,
	convertObjectToOptionsList,
	column,
	assetUrl,
	set,
	isEmpty,
	extendPrototype,
} from './tools';

import getAvailableFields from './blocks/helpers/getAvailableFields';
import getAvailableFieldsString
	from './blocks/helpers/getAvailableFieldsString';
import getBlocksByName from './blocks/helpers/getBlocksByName';
import getFieldsWithoutCurrent from './blocks/helpers/getFieldsWithoutCurrent';
import getFormFieldsBlocks from './blocks/helpers/getFormFieldsBlocks';
import getInnerBlocks from './blocks/helpers/getInnerBlocks';
import appendField from './blocks/helpers/appendField';

import gatewayAttr from './gateways/helpers/gatewayAttr';
import gatewayLabel from './gateways/helpers/gatewayLabel';
import registerGateway from './gateways/helpers/registerGateway';
import renderGateway from './gateways/helpers/renderGateway';
import renderGatewayWithPlaceholder
	from './gateways/helpers/renderGatewayWithPlaceholder';
import useActions from './actions/hooks/useActions';
import useMetaState from './hooks/useMetaState';
import useStateLoadingClasses from './hooks/useStateLoadingClasses';
import useStateValidClasses from './hooks/useStateValidClasses';
import useSuccessNotice from './hooks/useSuccessNotice';
import useRequestFields from './actions/hooks/useRequestFields';
import useSelectPostMeta from './hooks/useSelectPostMeta';
import withRequestFields from './actions/hooks/withRequestFields';
import useOnUpdateModal from './action-modal/hooks/useOnUpdateModal';
import withSelectFormFields from './hooks/withSelectFormFields';
import withSelectGateways from './gateways/hooks/withSelectGateways';
import withDispatchGateways from './gateways/hooks/withDispatchGateways';
import useSanitizeFieldsMap from './actions/hooks/useSanitizeFieldsMap';
import withSelectActionLoading from './actions/hooks/withSelectActionLoading';
import useRequestEvents from './events/hooks/useRequestEvents';
import useBlockConditions from './block-conditions/hooks/useBlockConditions';
import useUniqKey from './blocks/hooks/useUniqKey';
import useIsAdvancedValidation from './blocks/hooks/useIsAdvancedValidation';
import useBlockAttributes from './blocks/hooks/useBlockAttributes';
import useIsHasAttribute from './hooks/useIsHasAttribute';
import globalTab from './actions/helpers/globalTab';

import DynamicPreset from './preset/components/DynamicPreset';
import JetFieldsMapControl from '../editor/blocks/controls/fields-map';
import FieldWithPreset from './preset/components/FieldWithPreset';
import GlobalFieldPreset from './preset/components/GlobalFieldPreset';
import AvailableMapFieldPreset
	from './preset/components/AvailableMapFieldPreset';
import MapFieldPreset from './preset/components/MapFieldPreset';
import useGroupedValidationMessages
	from './validation/hooks/useGroupedValidationMessages';
import FieldWrapper from './blocks/components/FieldWrapper';
import MacrosInserter from './components/MacrosInserter';
import RepeaterWithState from './repeater/components/RepeaterWithState';
import withPreset from './preset/components/withPreset';
import AdvancedFields from './blocks/components/AdvancedFields';
import GeneralFields from './blocks/components/GeneralFields';
import ToolBarFields from './blocks/components/ToolBarFields';
import PlaceholderMessage from './actions/components/PlaceholderMessage';
import ActionMessages from './actions/components/ActionMessages';
import HorizontalLine from './components/HorizontalLine';
import RequestLoadingButton from './actions/components/RequestLoadingButton';
import convertListToFieldsMap from './actions/helpers/convertListToFieldsMap';
import FieldSettingsWrapper from './blocks/components/FieldSettingsWrapper';
import GroupedSelectControl from './components/GroupedSelectControl';
import getBlockControls from './blocks/helpers/getBlockControls';
import BaseHelp from './components/BaseHelp';
import ValidateButtonWithStore
	from './actions/components/ValidateButtonWithStore';
import GatewayFetchButton from './gateways/components/GatewayFetchButton';
import './store.manager';
import ActionModalContext from './action-modal/context/ActionModalContext';
import SafeDeleteContext from './repeater/context/safe.delete';
import RepeaterItemContext from './repeater/context/repeater.item';
import ActionListItemContext from './actions/context/ActionListItemContext';
import RepeaterBodyContext from './repeater/context/repeater.custom.item.body';
import RepeaterHeadContext from './repeater/context/repeater.custom.item.head';
import RepeaterButtonsContext
	from './repeater/context/repeater.custom.item.buttons';
import BlockValueItemContext from './context/block.value.item.context';
import SafeDeleteToggle from './repeater/components/safe.delete.toggle';
import RepeaterAddNew from './repeater/components/repeater.add.new';
import Repeater from './repeater/components/repeater';
import ValidationToggleGroup
	from './validation/components/ValidationToggleGroup';
import ValidationBlockMessage
	from './validation/components/ValidationBlockMessage';
import ValidationMetaMessage
	from './validation/components/ValidationMetaMessage';
import CurrentActionEditContext
	from './actions/context/CurrentActionEditContext';
import ActionFieldsMapContext
	from './action-fields-map/context/ActionFieldsMapContext';
import CurrentPropertyMapContext
	from './action-fields-map/context/CurrentPropertyMapContext';
import DynamicPropertySelect
	from './action-fields-map/components/DynamicPropertySelect';
import ActionFetchButton from './actions/components/ActionFetchButton';
import DynamicValues from './dynamic.value/components/DynamicValues';
import RepeaterAddOrOperator from './repeater/components/repeater.add.or';
import EditAdvancedRulesButton
	from './validation/components/EditAdvancedRulesButton';
import RepeaterStateContext from './repeater/context/repeater.state';
import RepeaterState from './repeater/components/repeater.state';
import FieldControl from './blocks/components/FieldControl';
import BlockLabel from './blocks/components/BlockLabel';
import BlockName from './blocks/components/BlockName';
import BlockDescription from './blocks/components/BlockDescription';
import BlockDefaultValue from './blocks/components/BlockDefaultValue';
import BlockPlaceholder from './blocks/components/BlockPlaceholder';
import BlockAddPrevButton from './blocks/components/BlockAddPrevButton';
import BlockPrevButtonLabel from './blocks/components/BlockPrevButtonLabel';
import BlockVisibility from './blocks/components/BlockVisibility';
import BlockClassName from './blocks/components/BlockClassName';
import BlockAdvancedValue from './blocks/components/BlockAdvancedValue';
import MacrosFieldsTemplate
	from './macros.button/components/MacrosFieldsTemplate';
import MacrosButtonTemplate
	from './macros.button/components/MacrosButtonTemplate';
import MacrosFields from './macros.button/components/MacrosFields';
import PopoverContext from './macros.button/context/PopoverContext';
import PopoverItem from './macros.button/context/PopoverItem';
import PresetButton from './preset/components/PresetButton';
import ConditionItem from './block-conditions/components/ConditionItem';
import AdvancedInspectorControl from './components/AdvancedInspectorControl';
import AdvancedModalControl from './components/AdvancedModalControl';
import ClientSideMacros
	from './macros.button/components/ClientSideMacros';
import { insertMacro } from './macros.button/functions';
import useInsertMacro from './macros.button/hooks/useInsertMacro';
import addDetail from './actions/helpers/addDetail';
import ToggleControl from './components/ToggleControl';
import BaseAction from './actions/abstract/BaseAction';
import addComputedField from './actions/helpers/addComputedField';
import BaseComputedField from './actions/abstract/BaseComputedField';
import DetailsContainer from './components/DetailsContainer';
import HoverContainer from './components/HoverContainer';
import getCurrentInnerBlocks from './blocks/helpers/getCurrentInnerBlocks';
import ContainersList from './components/ContainersList';
import HumanReadableConditions
	from './block-conditions/components/HumanReadableConditions';
import humanReadableCondition
	from './block-conditions/helpers/humanReadableCondition';
import ConditionsRepeaterContextProvider
	from './block-conditions/components/ConditionsRepeaterContextProvider';
import ServerSideMacros from './macros.button/components/ServerSideMacros';
import convertFlow from './actions/helpers/convertFlow';
import ActionsFlow from './actions/abstract/ActionsFlow';
import useCurrentAction from './actions/hooks/useCurrentAction';
import useUpdateCurrentAction from './actions/hooks/useUpdateCurrentAction';
import useUpdateCurrentActionMeta
	from './actions/hooks/useUpdateCurrentActionMeta';
import useActionsEdit from './actions/hooks/useActionsEdit';
import useActionCallback from './actions/hooks/useActionCallback';
import useActionDetail from './actions/hooks/useActionDetail';
import useUniqueNameOnDuplicate from './blocks/hooks/useUniqueNameOnDuplicate';
import useFields from './blocks/hooks/useFields';
import SelectVariations from './blocks/components/SelectVariations';
import ToggleGroupVariations from './blocks/components/ToggleGroupVariations';
import BaseLabel from './components/BaseLabel';
import useSupport from './blocks/hooks/useSupport';
import AttributeHelp from './blocks/components/AttributeHelp';
import ActionMessagesSlotFills
	from './actions/components/ActionMessagesSlotFills';
import ListActionItem from './actions/components/ListActionItem';
import ActionItemWrapper from './actions/components/ActionItemWrapper';
import ActionItemHeader from './actions/components/ActionItemHeader';
import ActionItemFooter from './actions/components/ActionItemFooter';
import EditActionSettingsButton
	from './actions/components/EditActionSettingsButton';
import AllProActionsLink from './actions/components/AllProActionsLink';
import AddActionButton from './actions/components/AddActionButton';
import ActionsAfterNewButtonSlotFill
	from './actions/components/ActionsAfterNewButtonSlotFill';
import EditActionConditionsButton
	from './actions/components/EditActionConditionsButton';
import ActionItemDetails from './actions/components/ActionItemDetails';
import ActionItemDetailsSlotFill
	from './actions/components/ActionItemDetailsSlotFill';
import ActionItemMoreButton from './actions/components/ActionItemMoreButton';
import useLoopedAction from './actions/hooks/useLoopedAction';
import SelectActionsControl from './actions/components/SelectActionsControl';
import ActionModalHeaderSlotFill
	from './actions/components/ActionModalHeaderSlotFill';
import ActionButtonPlaceholder
	from './action-buttons/components/ActionButtonPlaceholder';
import ActionModalFooterSlotFill
	from './action-modal/components/ActionModalFooterSlotFill';
import useScopedAttributesContext
	from './blocks/hooks/useScopedAttributesContext';
import ScopedAttributesProvider
	from './blocks/components/ScopedAttributesProvider';
import getSupport from './blocks/helpers/getSupport';
import useEvents from './events/hooks/useEvents';
import useTriggerPopover from './hooks/useTriggerPopover';
import useOpenEditorPanel from './hooks/useOpenEditorPanel';

// JFBComponents
window.JetFBComponents = {
	BaseLabel,
	ActionFieldsMap,
	ActionModal,
	ActionModalContext,
	SafeDeleteContext,
	RepeaterItemContext,
	ActionListItemContext,
	RepeaterBodyContext,
	RepeaterHeadContext,
	RepeaterButtonsContext,
	CurrentActionEditContext,
	ActionFieldsMapContext,
	CurrentPropertyMapContext,
	BlockValueItemContext,
	DynamicPropertySelect,
	SafeDeleteToggle,
	RepeaterAddNew,
	RepeaterAddOrOperator,
	Repeater,
	RequestButton,
	ValidateButton,
	RequestLoadingButton,
	WrapperRequiredControl,
	DynamicPreset,
	JetFieldsMapControl,
	FieldWithPreset,
	GlobalField: GlobalFieldPreset,
	AvailableMapField: AvailableMapFieldPreset,
	MapField: MapFieldPreset,
	FieldWrapper,
	MacrosInserter,
	RepeaterWithState,
	AdvancedFields,
	GeneralFields,
	ToolBarFields,
	FieldControl,
	PlaceholderMessage,
	HorizontalLine,
	FieldSettingsWrapper,
	ActionMessages,
	GroupedSelectControl,
	BaseHelp,
	ValidateButtonWithStore,
	GatewayFetchButton,
	ValidationToggleGroup,
	ValidationBlockMessage,
	ValidationMetaMessage,
	ActionFetchButton,
	DynamicValues,
	EditAdvancedRulesButton,
	RepeaterStateContext,
	RepeaterState,
	BlockLabel,
	BlockName,
	BlockDescription,
	BlockDefaultValue,
	BlockPlaceholder,
	BlockAddPrevButton,
	BlockPrevButtonLabel,
	BlockVisibility,
	BlockClassName,
	BlockAdvancedValue,
	MacrosFields,
	MacrosButtonTemplate,
	MacrosFieldsTemplate,
	ShowPopoverContext: PopoverContext,
	PopoverItem,
	PresetButton,
	ConditionItem,
	AdvancedInspectorControl,
	AdvancedModalControl,
	ClientSideMacros,
	ToggleControl,
	BaseAction,
	BaseComputedField,
	DetailsContainer,
	HoverContainer,
	ContainersList,
	HumanReadableConditions,
	ConditionsRepeaterContextProvider,
	ServerSideMacros,
	ActionsFlow,
	SelectVariations,
	ToggleGroupVariations,
	AttributeHelp,
	ActionMessagesSlotFills,
	ActionsAfterNewButtonSlotFill,
	ListActionItem,
	ActionItemWrapper,
	ActionItemHeader,
	ActionItemFooter,
	EditActionSettingsButton,
	AllProActionsLink,
	AddActionButton,
	EditActionConditionsButton,
	ActionItemDetails,
	ActionItemDetailsSlotFill,
	ActionItemMoreButton,
	SelectActionsControl,
	ActionModalHeaderSlotFill,
	ActionButtonPlaceholder,
	ActionModalFooterSlotFill,
	ScopedAttributesProvider,
};

// JFBFunctions
window.JetFBActions = {
	addAction,
	withPreset,
	getInnerBlocks,
	getAvailableFieldsString,
	getAvailableFields,
	getFormFieldsBlocks,
	getFieldsWithoutCurrent,
	gatewayAttr,
	gatewayLabel,
	registerGateway,
	Tools,
	event,
	listen,
	renderGateway,
	renderGatewayWithPlaceholder,
	globalTab,
	versionCompare,
	convertListToFieldsMap,
	maybeCyrToLatin,
	getConvertedName,
	getBlockControls,
	classnames,
	getBlocksByName,
	convertObjectToOptionsList,
	appendField,
	insertMacro,
	addDetail,
	column,
	addComputedField,
	getCurrentInnerBlocks,
	humanReadableCondition,
	convertFlow,
	assetUrl,
	set,
	isEmpty,
	getSupport,
	extendPrototype,
};

// JFBHooks
window.JetFBHooks = {
	useActions,
	useMetaState,
	useSelectPostMeta,
	useStateValidClasses,
	useStateLoadingClasses,
	useSuccessNotice,
	useEvents,
	useRequestEvents,
	useBlockConditions,
	useUniqKey,
	useBlockAttributes,
	useIsAdvancedValidation,
	useGroupedValidationMessages,
	useSanitizeFieldsMap,
	withRequestFields,
	useRequestFields,
	withSelectActionLoading,
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
	useOnUpdateModal,
	useInsertMacro,
	useIsHasAttribute,
	useCurrentAction,
	useUpdateCurrentAction,
	useUpdateCurrentActionMeta,
	useActionsEdit,
	useActionCallback,
	useActionDetail,
	useUniqueNameOnDuplicate,
	useFields: useFields,
	useSupport,
	useLoopedAction,
	useScopedAttributesContext,
	useTriggerPopover,
	useOpenEditorPanel,
};

