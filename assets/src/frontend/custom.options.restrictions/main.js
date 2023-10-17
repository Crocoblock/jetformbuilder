import NotEmptyAdvancedWithCustomOption
	from './NotEmptyAdvancedWithCustomOption';
import NotEmptyWithCustomOption from './NotEmptyWithCustomOption';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/with-custom-options',
	function ( restrictions ) {
		restrictions.push( NotEmptyAdvancedWithCustomOption );

		return restrictions;
	},
);

addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/with-custom-options',
	function ( restrictions ) {
		restrictions.push( NotEmptyWithCustomOption );

		return restrictions;
	},
);