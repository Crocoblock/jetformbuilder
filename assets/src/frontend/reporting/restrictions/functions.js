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

const restrictions = () => (
	[
		new ReachLimitNumbers(),
		new NotEnoughNumbers(),
		new NotUrl(),
		new NotEmail(),
		new NotCompleteInputmask(),
		new NotEmptyRepeater(),
		new NotEnoughChars(),
		new ReachLimitChars(),
		new NotEmptyRestriction(),
		new CustomRulesRestriction(),
	]
);

/**
 * @param reporting {AdvancedReporting}
 * @return {Restriction[]}
 */
function getRestrictions( reporting ) {
	return restrictions().filter(
		current => current.isSupported( reporting.getNode(), reporting ),
	).map(
		item => {
			item.setReporting( reporting );
			return item;
		},
	);
}

export {
	getRestrictions,
};