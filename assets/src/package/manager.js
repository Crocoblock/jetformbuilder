import ActionFieldsMap from "./components/action-fields-map";
import ActionModal from "./components/action-modal";
import WrapperRequiredControl from "./components/wrapper-required-control";
import RequestButton from "./components/request-button";
import ValidateButton from "./components/validate-button";
import addAction from "./helpers/actions/action-manager";
import Tools, { event, listen } from "./helpers/tools";
import DynamicPreset from "./components/presets/dynamic-preset";
import JetFieldsMapControl from "../editor/blocks/controls/fields-map";
import FieldWithPreset from "./components/fields/field-with-preset";
import {
	GlobalField,
	AvailableMapField,
	MapField
} from "./components/presets/preset-render";

import {
	getAvailableFields,
	getAvailableFieldsString,
	getFieldsWithoutCurrent,
	getFormFieldsBlocks,
	getFormFieldsByBlock,
	getInnerBlocks
} from "./helpers/blocks/blocks-helper";
import {
	gatewayAttr,
	gatewayLabel,
	registerGateway
} from "./helpers/gateways/gateway-helper";
import {
	useActions,
	useMetaState,
	useStateClasses
} from "./helpers/hooks/hooks-helper";
import FieldWrapper from "./components/fields/field-wrapper";
import MacrosInserter from "./components/fields/macros-inserter";
import RepeaterWithState from "./components/fields/repeater-with-state";
import withPreset from "./components/presets/preset-editor";
import {
	AdvancedFields,
	GeneralFields,
	ToolBarFields
} from "./components/fields/field-control";
import PlaceholderMessage from "./components/actions/placeholder-message";
import HorizontalLine from "./components/horizontal-line";

window.JFBComponents = {
	ActionFieldsMap,
	ActionModal,
	RequestButton,
	ValidateButton,
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
	PlaceholderMessage,
	HorizontalLine
};

window.JFBFunctions = {
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
	listen
};

window.JFBHooks = {
	useActions,
	useStateClasses,
	useMetaState
};

