import initCommon from './init/initCommon';
import initElementor from './init/initElementor';
import BaseSignal from './signals/BaseSignal';
import ReactiveVar from './reactive/ReactiveVar';
import LoadingReactiveVar from './reactive/LoadingReactiveVar';
import InputData from './inputs/InputData';
import Observable from './Observable';
import ReportingInterface from './reporting/ReportingInterface';
import CheckboxData from './inputs/CheckboxData';
import MultiSelectData from './inputs/MultiSelectData';
import { allRejected, getLanguage, toHTML, isEmpty } from './functions';
import Restriction from './reporting/restrictions/Restriction';
import RestrictionError from './reporting/RestrictionError';
import {
	validateInputs,
	validateInputsAll,
	getValidateCallbacks,
} from './reporting/functions';

import './calc.module/main';
import './switch-page-on-change/main';
import { getParsedName } from './inputs/functions';
import initForm from './init/initForm';

window.JetFormBuilderAbstract = {
	...(
		window.JetFormBuilderAbstract ?? {}
	),
	InputData,
	BaseSignal,
	ReactiveVar,
	LoadingReactiveVar,
	Observable,
	ReportingInterface,
	CheckboxData,
	MultiSelectData,
	Restriction,
	RestrictionError,
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
};

jQuery( initCommon );
jQuery( window ).on( 'elementor/frontend/init', initElementor );

JetPlugins.init( false, [
	{
		block: 'jet-forms.form-block',
		callback: initForm,
	},
] );