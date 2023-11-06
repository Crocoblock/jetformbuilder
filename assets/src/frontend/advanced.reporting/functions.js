import ReachLimitNumbers from './restrictions/ReachLimitNumbers';
import NotEnoughNumbers from './restrictions/NotEnoughNumbers';
import NotUrl from './restrictions/NotUrl';
import NotEmail from './restrictions/NotEmail';
import NotEnoughChars from './restrictions/NotEnoughChars';
import ReachLimitChars from './restrictions/ReachLimitChars';
import NotEmptyRestriction from './restrictions/NotEmptyRestriction';
import NotCompleteInputmask from './restrictions/NotCompleteInputmask';
import CustomRulesRestriction from './restrictions/CustomRulesRestriction';
import MustContainCharacters from './restrictions/MustContainCharacters';
import MustNotContainCharacters from './restrictions/MustNotContainCharacters';
import MatchRegexp from './restrictions/MatchRegexp';
import NotMatchRegexp from './restrictions/NotMatchRegexp';
import ServerSideCallback from './restrictions/ServerSideCallback';
import MustEqual from './restrictions/MustEqual';
import TooEarlyTimestamp from './restrictions/TooEarlyTimestamp';
import TooLateTimestamp from './restrictions/TooLateTimestamp';

const {
	      applyFilters,
      } = JetPlugins.hooks;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

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
 * @type {array<CustomBaseRestriction>}
 */
let advancedRules = [];

const getRestrictions = () => applyFilters(
	'jet.fb.restrictions',
	[
		TooEarlyTimestamp,
		TooLateTimestamp,
		ReachLimitNumbers,
		NotEnoughNumbers,
		NotUrl,
		NotEmail,
		NotCompleteInputmask,
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

function getPreparedRules( rules, reporting ) {
	const response = [];

	if ( !advancedRules.length ) {
		advancedRules = getAdvancedRules();
	}

	for ( const [ index, rule ] of Object.entries( rules ) ) {
		for ( const advancedRule of advancedRules ) {
			const current = new advancedRule();

			if ( rule.type !== current.getSlug() ) {
				continue;
			}
			delete rule.type;

			current.setReporting( reporting );
			current.setAttrs( { ...rule, index } );
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
	const formId   = input.getSubmit().getFormId();
	const allForms = window?.JetFormsValidation ?? false;

	if ( false === allForms ) {
		return '';
	}

	const { type = '' } = allForms[ formId ] ?? {};

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
	const allMessages = window?.JetFormsValidation ?? false;

	if ( false === allMessages ) {
		return '';
	}

	const { messages } = allMessages[ form.getFormId() ] ?? {};

	return messages[ slug ] ?? '';
}

/**
 * @this {CustomBaseRestriction}
 */
function observeFieldRestriction() {
	if ( !this.attrs?.field ) {
		return;
	}
	const { root } = this.reporting.input;
	const input    = root.getInput( this.attrs.field );

	input.watch( () => {
		this.attrs.value = input.value.current;

		/**
		 * Here we need to reset the `valuePrev` property,
		 * because reporting logic remember previous value, which it check.
		 *
		 * And if .valuePrev === .current.value -> reporting will be skipped
		 *
		 * @see AdvancedReporting.getErrors
		 * @see ReportingInterface.hasChangedValue
		 * @type {null}
		 */
		this.reporting.valuePrev = null;
		this.reporting.validateOnChange();
	} );

	if ( !isEmpty( input.value.current ) ) {
		this.attrs.value = input.value.current;
	}
}

/**
 * @param reporting {ReportingInterface}
 */
function setRestrictions( reporting ) {
	if ( !restrictions.length ) {
		restrictions = getRestrictions();
	}

	for ( const restriction of restrictions ) {
		const current = new restriction();

		if (
			!current.isSupported( reporting.getNode(), reporting )
		) {
			continue;
		}
		current.setReporting( reporting );
		current.onReady();

		reporting.restrictions.push( current );
	}
}

/**
 * You cannot use node.querySelector in this function,
 * because the Repeater Field validation will return
 * an error element from the internal field.
 *
 * @param wrapper {Element}
 * @returns {boolean|Element}
 */
function getErrorNode( wrapper ) {
	for ( const child of wrapper.children ) {
		if ( !child.classList.contains( 'error-message' ) ) {
			continue;
		}
		return child;
	}

	const colEndNode = wrapper.querySelector(
		'.jet-form-builder-col__end',
	);

	if ( !colEndNode ) {
		return false;
	}

	return getErrorNode( colEndNode );
}

export {
	getNodeValidationType,
	getInheritValidationType,
	getMessageBySlug,
	getValidationMessages,
	getPreparedRules,
	setRestrictions,
	observeFieldRestriction,
	getWrapper,
	getErrorNode,
};