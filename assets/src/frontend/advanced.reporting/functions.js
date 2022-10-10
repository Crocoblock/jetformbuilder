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

/**
 * @type {Restriction[]}
 */
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

		if (
			!current.isSupported( reporting.getNode(), reporting ) ||
			(
				!reporting.isRequired && current.runOnlyIfRequired()
			)
		) {
			continue;
		}
		current.setReporting( reporting );
		current.onReady();

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
			current.onReady();

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

	if ( message ) {
		return message;
	}

	const form        = reporting.input.getSubmit();
	const allMessages = window.JetFormsValidation ?? false;

	if ( false === allMessages ) {
		return '';
	}

	const { messages } = allMessages[ form.getFormId() ] ?? {};

	return messages[ slug ] ?? '';
}

/**
 * @this {AdvancedRestriction}
 */
function observeFieldRestriction() {
	if ( !this.attrs?.field ) {
		return;
	}
	const { root } = this.reporting.input;
	const input    = root.getInput( this.attrs.field );

	input.watch( () => {
		this.attrs.value = input.value.current;
		this.reporting.validateWithNotice().then( () => {} ).catch( () => {} );
	} );
}

export {
	getNodeValidationType,
	getInheritValidationType,
	getMessageBySlug,
	getValidationMessages,
	getPreparedRules,
	setRestrictions,
	observeFieldRestriction,
};