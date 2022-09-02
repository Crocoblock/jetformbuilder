import NotEmptyRestriction from './NotEmptyRestriction';
import NotEnoughChars from './NotEnoughChars';
import ReachLimitChars from './ReachLimitChars';
import NotEmptyRepeater from './NotEmptyRepeater';
import NotCompleteInputmask from './NotCompleteInputmask';
import NotEmail from './NotEmail';
import NotUrl from './NotUrl';
import ReachLimitNumbers from './ReachLimitNumbers';
import NotEnoughNumbers from './NotEnoughNumbers';
import CustomRulesRestriction from './CustomRulesRestriction';
import MustContainCharacters from './MustContainCharacters';
import MustNotContainCharacters from './MustNotContainCharacters';
import MatchRegexp from './MatchRegexp';
import NotMatchRegexp from './NotMatchRegexp';

const {
	      applyFilters,
      } = wp.hooks;

const restrictions = applyFilters(
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
 * @type {array<AdvancedRestriction>}
 */
const advancedRules = applyFilters(
	'jet.fb.advanced.rules',
	[
		MustContainCharacters,
		MustNotContainCharacters,
		MatchRegexp,
		NotMatchRegexp,
	],
);

/**
 * @param reporting {AdvancedReporting}
 * @return {Restriction[]}
 */
function setRestrictions( reporting ) {

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

	for ( const rule of rules ) {
		for ( const advancedRule of advancedRules ) {
			const current = new advancedRule();

			if ( rule.type !== current.getSlug() ) {
				continue;
			}
			delete rule.type;

			current.setReporting( reporting );
			current.attrs = { ...rule };

			response.push( current );
			break;
		}
	}

	return response;
}

export {
	setRestrictions,
	getPreparedRules,
};