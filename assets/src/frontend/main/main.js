import initElementor from './init/initElementor';
import BaseSignal from './signals/BaseSignal';
import ReactiveVar from './reactive/ReactiveVar';
import ReactiveHook from './reactive/ReactiveHook';
import ReactiveSet from './reactive/ReactiveSet';
import LoadingReactiveVar from './reactive/LoadingReactiveVar';
import InputData from './inputs/InputData';
import Observable from './Observable';
import ReportingInterface from './reporting/ReportingInterface';
import CheckboxData from './inputs/CheckboxData';
import MultiSelectData from './inputs/MultiSelectData';
import {
	allRejected,
	getLanguage,
	toHTML,
	isEmpty,
	getOffsetTop,
	focusOnInvalidInput,
	isVisible, getScrollParent,
} from './functions';
import Restriction from './reporting/restrictions/Restriction';
import RestrictionError from './reporting/RestrictionError';
import {
	validateInputs,
	validateInputsAll,
	getValidateCallbacks,
} from './reporting/functions';

import './calc.module/main';
import {
	getParsedName,
	populateInputs,
} from './inputs/functions';
import initForm from './init/initForm';
import BaseHtmlAttr from './attrs/BaseHtmlAttr';
import {
	queryByAttrValue,
	iterateComments,
	observeMacroAttr,
	observeComment,
	iterateJfbComments,
} from './html.macro/functions';
import RequiredRestriction from './reporting/restrictions/RequiredRestriction';

window.JetFormBuilderAbstract = {
	...(
		window.JetFormBuilderAbstract ?? {}
	),
	InputData,
	BaseSignal,
	ReactiveVar,
	ReactiveHook,
	LoadingReactiveVar,
	Observable,
	ReportingInterface,
	CheckboxData,
	MultiSelectData,
	Restriction,
	RestrictionError,
	BaseHtmlAttr,
	ReactiveSet,
	RequiredRestriction,
};

window.JetFormBuilderFunctions = {
	...(
		window.JetFormBuilderFunctions ?? {}
	),
	allRejected,
	getLanguage,
	toHTML,
	validateInputs,
	validateInputsAll,
	getParsedName,
	isEmpty,
	getValidateCallbacks,
	getOffsetTop,
	focusOnInvalidInput,
	populateInputs,
	isVisible,
	queryByAttrValue,
	iterateComments,
	observeMacroAttr,
	observeComment,
	iterateJfbComments,
	getScrollParent,
};

jQuery( () => JetPlugins.init() );

JetPlugins.bulkBlocksInit( [
	{
		block: 'jet-forms.form-block',
		callback: initForm,
		condition: () => 'loading' !== document.readyState,
	},
] );

jQuery( window ).on( 'elementor/frontend/init', initElementor );

