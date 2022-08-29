import ActionFieldsMap from './components/action-fields-map';
import ActionModal from './components/action-modal';
import WrapperRequiredControl from './components/wrapper-required-control';
import RequestButton from './components/request-button';
import ValidateButton from './components/validate-button';
import addAction from './helpers/actions/action-manager';
import Tools, {
	classnames,
	event,
	getConvertedName,
	listen,
	maybeCyrToLatin,
	versionCompare,
	convertObjectToOptionsList,
} from './helpers/tools';
import DynamicPreset from './components/presets/dynamic-preset';
import JetFieldsMapControl from '../editor/blocks/controls/fields-map';
import FieldWithPreset from './components/fields/field-with-preset';
import {
	GlobalField,
	AvailableMapField,
	MapField,
} from './components/presets/preset-render';

import {
	getAvailableFields,
	getAvailableFieldsString,
	getBlocksByName,
	getFieldsWithoutCurrent,
	getFormFieldsBlocks,
	getFormFieldsByBlock,
	getInnerBlocks,
	appendField,
} from './helpers/blocks/blocks-helper';
import {
	gatewayAttr,
	gatewayLabel,
	registerGateway,
	renderGateway,
	renderGatewayWithPlaceholder,
} from './helpers/gateways/gateway-helper';
import {
	useActions,
	useMetaState,
	useStateValidClasses,
	useStateLoadingClasses,
	useSuccessNotice,
	useRequestFields,
	useSelectPostMeta,
	withRequestFields,
	withSelectActionLoading,
	withDispatchMeta,
	withSelectMeta,
	withDispatchNotice,
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
	withSelectActionsByType,
} from './helpers/hooks/hooks-helper';
import {
	useRequestEvents,
} from './helpers/hooks/event-types';
import {
	useBlockConditions,
} from './helpers/hooks/block-conditions';
import {
	useUniqKey,
	useIsAdvancedValidation,
	useBlockAttributes,
} from './helpers/hooks/blocks';
import {
	useActionButtonEdit,
} from './helpers/hooks/action.buttons';
import {
	useGroupedValidationMessages,
} from './components/validation/hooks';
import FieldWrapper from './components/fields/field-wrapper';
import MacrosInserter from './components/fields/macros-inserter';
import RepeaterWithState from './components/fields/repeater-with-state';
import withPreset from './components/presets/preset-editor';
import {
	AdvancedFields,
	GeneralFields,
	ToolBarFields,
	FieldControl,
} from './components/fields/field-control';
import PlaceholderMessage from './components/actions/placeholder-message';
import ActionMessages from './components/actions/action-messages';
import HorizontalLine from './components/horizontal-line';
import RequestLoadingButton from './components/request-loading-button';
import {
	actionByTypeList,
	convertListToFieldsMap,
	fromLocalizeHelper,
	getActionSettings,
	prepareActionsListByType,
} from './helpers/actions/action-helper';
import gatewayActionAttributes
	from './helpers/gateways/gateway-action-attrubites';
import { globalTab } from './helpers/settings/helper';
import FieldSettingsWrapper from './components/fields/field-settings-wrapper';
import GroupedSelectControl from './components/grouped-select-control';
import {
	getBlockControls,
} from './components/fields/controls';
import BaseHelp from './components/controls/base-help';
import ValidateButtonWithStore from './components/validate-button-with-store';
import GatewayFetchButton from './components/gateway-fetch-button';
import './stores/manager';
import ActionModalContext from './context/action.modal';
import SafeDeleteContext from './context/safe.delete';
import RepeaterItemContext from './context/repeater.item';
import ActionListItemContext from './context/action.list.item';
import RepeaterBodyContext from './context/repeater.custom.item.body';
import RepeaterHeadContext from './context/repeater.custom.item.head';
import RepeaterButtonsContext from './context/repeater.custom.item.buttons';
import BlockValueItemContext from './context/block.value.item.context';
import SafeDeleteToggle from './components/fields/safe.delete.toggle';
import RepeaterAddNew from './components/fields/repeater.add.new';
import Repeater from './components/fields/repeater';
import ValidationToggleGroup
	from './components/validation/validationToggleGroup';
import ValidationBlockMessage
	from './components/validation/ValidationBlockMessage';
import ValidationMetaMessage
	from './components/validation/ValidationMetaMessage';
import CurrentActionEditContext from './context/current.action.edit';
import ActionFieldsMapContext from './context/action.fields.map.context';
import CurrentPropertyMapContext from './context/current.property.map';
import DynamicPropertySelect from './components/dynamic.property.select';
import ActionFetchButton from './components/action.fetch.button';
import DynamicValues from './components/dynamic.value/DynamicValues';
import RepeaterAddOrOperator from './components/fields/repeater.add.or';

// JFBComponents
window.JetFBComponents = {
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
	GlobalField,
	AvailableMapField,
	MapField,
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
};

// JFBFunctions
window.JetFBActions = {
	addAction,
	withPreset,
	getFormFieldsByBlock,
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
	actionByTypeList,
	getActionSettings,
	fromLocalizeHelper,
	renderGateway,
	renderGatewayWithPlaceholder,
	gatewayActionAttributes,
	globalTab,
	versionCompare,
	convertListToFieldsMap,
	maybeCyrToLatin,
	getConvertedName,
	getBlockControls,
	classnames,
	getBlocksByName,
	convertObjectToOptionsList,
	prepareActionsListByType,
	appendField,
};

// JFBHooks
window.JetFBHooks = {
	useActions,
	useMetaState,
	useSelectPostMeta,
	useStateValidClasses,
	useStateLoadingClasses,
	useSuccessNotice,
	useRequestEvents,
	useBlockConditions,
	useUniqKey,
	useBlockAttributes,
	useIsAdvancedValidation,
	useActionButtonEdit,
	useGroupedValidationMessages,
	withRequestFields,
	useRequestFields,
	withSelectActionLoading,
	withDispatchMeta,
	withSelectMeta,
	withDispatchNotice,
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
	withSelectActionsByType,
};

