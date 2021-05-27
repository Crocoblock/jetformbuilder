import ActionFieldsMap from "./components/action-fields-map";
import ActionModal from "./components/action-modal";
import WrapperRequiredControl from "./components/wrapper-required-control";
import RequestButton from "./components/request-button";
import ValidateButton from "./components/validate-button";
import addAction from "./helpers/actions/action-manager";
import Tools, {
	event,
	listen,
	versionCompare,
} from "./helpers/tools";
import DynamicPreset from "./components/presets/dynamic-preset";
import JetFieldsMapControl from "../editor/blocks/controls/fields-map";
import FieldWithPreset from "./components/fields/field-with-preset";
import {
	GlobalField,
	AvailableMapField,
	MapField,
} from "./components/presets/preset-render";

import {
	getAvailableFields,
	getAvailableFieldsString,
	getFieldsWithoutCurrent,
	getFormFieldsBlocks,
	getFormFieldsByBlock,
	getInnerBlocks,
} from "./helpers/blocks/blocks-helper";
import {
	gatewayAttr,
	gatewayLabel,
	registerGateway,
	renderGateway,
} from "./helpers/gateways/gateway-helper";
import {
	useActions,
	useMetaState,
	useStateValidClasses,
	useStateLoadingClasses,
} from "./helpers/hooks/hooks-helper";
import FieldWrapper from "./components/fields/field-wrapper";
import MacrosInserter from "./components/fields/macros-inserter";
import RepeaterWithState from "./components/fields/repeater-with-state";
import withPreset from "./components/presets/preset-editor";
import {
	AdvancedFields,
	GeneralFields,
	ToolBarFields,
	FieldControl,
} from "./components/fields/field-control";
import PlaceholderMessage from "./components/actions/placeholder-message";
import HorizontalLine from "./components/horizontal-line";
import RequestLoadingButton from "./components/request-loading-button";
import {
	actionByTypeList,
	fromLocalizeHelper,
	getActionSettings,
} from "./helpers/actions/action-helper";
import gatewayActionAttributes from "./helpers/gateways/gateway-action-attrubites";
import { globalTab } from "./helpers/settings/helper";
import FieldSettingsWrapper from './components/fields/field-settings-wrapper';

// JFBComponents
window.JetFBComponents = {
	ActionFieldsMap,
	ActionModal,
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
	gatewayActionAttributes,
	globalTab,
	versionCompare,
};

// JFBHooks
window.JetFBHooks = {
	useActions,
	useMetaState,
	useStateValidClasses,
	useStateLoadingClasses,
};

