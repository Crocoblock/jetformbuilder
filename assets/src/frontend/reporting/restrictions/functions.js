import NotEmptyRestriction from './NotEmptyRestriction';
import NotEnoughChars from './NotEnoughChars';
import ReachLimitChars from './ReachLimitChars';
import NotEmptyRepeater from './NotEmptyRepeater';
import NotCompleteInputmask from './NotCompleteInputmask';

const restrictions = () => (
	[
		new NotCompleteInputmask(),
		new NotEmptyRepeater(),
		new NotEnoughChars(),
		new ReachLimitChars(),
		new NotEmptyRestriction(),
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