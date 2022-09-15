import ReachLimitNumbers from './restrictions/ReachLimitNumbers';
import NotEnoughNumbers from './restrictions/NotEnoughNumbers';
import NotUrl from './restrictions/NotUrl';
import NotEmail from './restrictions/NotEmail';
import NotCompleteInputmask from './restrictions/NotCompleteInputmask';
import NotEmptyRepeater from './restrictions/NotEmptyRepeater';
import NotEnoughChars from './restrictions/NotEnoughChars';
import ReachLimitChars from './restrictions/ReachLimitChars';
import NotEmptyRestriction from './restrictions/NotEmptyRestriction';
import CustomRulesRestriction from './restrictions/CustomRulesRestriction';
import MustContainCharacters from './restrictions/MustContainCharacters';
import MustNotContainCharacters from './restrictions/MustNotContainCharacters';
import MatchRegexp from './restrictions/MatchRegexp';
import NotMatchRegexp from './restrictions/NotMatchRegexp';
import ServerSideCallback from './restrictions/ServerSideCallback';
import ValueMacro from './macros/ValueMacro';
import MinAttrMacro from './macros/MinAttrMacro';
import MaxAttrMacro from './macros/MaxAttrMacro';
import RemainingMacro from './macros/RemainingMacro';
import LengthFilter from './filters/LengthFilter';
import FallBackFilter from './filters/FallBackFilter';
import MustEqual from './restrictions/MustEqual';

const { applyFilters } = wp.hooks;

const getRestrictions = () => applyFilters(
	'jet.fb.restrictions',
	[
		ReachLimitNumbers,
		NotEnoughNumbers,
		NotUrl,
		NotEmail,
		NotCompleteInputmask,
		NotEmptyRepeater,
		NotEnoughChars,
		ReachLimitChars,
		NotEmptyRestriction,
		CustomRulesRestriction,
	],
);

let restrictions = [];

const getAdvancedRules = () => applyFilters(
	'jet.fb.advanced.rules',
	[
		MustContainCharacters,
		MustNotContainCharacters,
		MatchRegexp,
		NotMatchRegexp,
		ServerSideCallback,
		MustEqual,
	],
);

/**
 * @type {array<AdvancedRestriction>}
 */
let advancedRules = [];

const getMacros = () => applyFilters(
	'jet.fb.restrictions.macros',
	[
		ValueMacro,
		MinAttrMacro,
		MaxAttrMacro,
		RemainingMacro,
	],
);

/**
 * @type {array<DynamicMacro>}
 */
let macros = [];

const getFilterItems = () => applyFilters(
	'jet.fb.restrictions.filters',
	[
		LengthFilter,
		FallBackFilter,
	],
);

/**
 * @type {array<Filter>}
 */
let filters  = [];
let response = [];

function pushFilter( name, props = '' ) {
	if ( !filters.length ) {
		filters = getFilterItems().map( current => new current() );
	}

	const filter = filters.find(
		current => name === current.getSlug(),
	);

	if ( !filter ) {
		return;
	}
	props = props.split( ',' ).map(
		item => item.trim(),
	);

	filter.setProps( props );
	response.push( filter );
}

function getFilters( filtersList ) {

	for ( let filterName of filtersList ) {
		const matches = filterName.match( /^(\w+)\(([^()]+)\)/ );

		if ( null === matches ) {
			pushFilter( filterName );

			continue;
		}

		pushFilter( matches[ 1 ], matches[ 2 ] );
	}

	const tempResponse = [ ...response ];
	response           = [];

	return tempResponse;
}

/**
 * @param restriction {Restriction}
 */
function getSupportedMacros( restriction ) {
	const response = {};

	if ( !macros.length ) {
		macros = getMacros();
	}

	for ( const macro of macros ) {
		const current = new macro();

		if ( !current.isSupported( restriction ) ) {
			continue;
		}
		current.setRestriction( restriction );

		response[ current.getSlug() ] = current;
	}

	return response;
}

/**
 * @param reporting {AdvancedReporting}
 * @return {Restriction[]}
 */
function setRestrictions( reporting ) {
	if ( !restrictions.length ) {
		restrictions = getRestrictions();
	}

	for ( const restriction of restrictions ) {
		const current = new restriction();

		if ( !current.isSupported( reporting.getNode(), reporting ) ) {
			continue;
		}
		current.setReporting( reporting );

		reporting.restrictions.push( current );
	}
}

function getPreparedRules( rules, reporting ) {
	const response = [];

	if ( !advancedRules.length ) {
		advancedRules = getAdvancedRules();
	}

	for ( const rule of rules ) {
		for ( const advancedRule of advancedRules ) {
			const current = new advancedRule();

			if ( rule.type !== current.getSlug() ) {
				continue;
			}
			delete rule.type;

			current.setReporting( reporting );
			current.setAttrs( { ...rule } );

			response.push( current );
			break;
		}
	}

	return response;
}

/**
 * @param node {HTMLElement}
 */
function getWrapper( node ) {
	return node.closest( '.jet-form-builder-row' );
}

/**
 * @param node {HTMLElement}
 */
function getNodeValidationType( node ) {
	const wrapper                 = getWrapper( node );
	const { validationType = '' } = wrapper?.dataset ?? {};

	return validationType;
}

/**
 * @param input {InputData}
 */
function getInheritValidationType( input ) {
	const form          = input.getSubmit();
	const { type = '' } = window.JetFormsValidation[ form.getFormId() ] ??
	{};

	return type;
}

function getValidationMessages( node ) {
	const wrapper                       = getWrapper( node );
	const { validationMessages = '{}' } = wrapper?.dataset ?? {};

	return JSON.parse( validationMessages );
}

/**
 * @param restriction {Restriction}
 * @param slug {string}
 * @return {string}
 */
function getMessageBySlug( restriction, slug ) {
	const { reporting } = restriction;
	const message       = reporting.messages[ slug ] ?? '';

	if ( message && 'inherit' !== reporting.type ) {
		return message;
	}

	const form         = reporting.input.getSubmit();
	const { messages } = window.JetFormsValidation[ form.getFormId() ] ??
	{};

	return messages[ slug ] ?? '';
}

export {
	getNodeValidationType,
	getFilters,
	getInheritValidationType,
	getSupportedMacros,
	getMessageBySlug,
	getValidationMessages,
	getPreparedRules,
	setRestrictions,
};