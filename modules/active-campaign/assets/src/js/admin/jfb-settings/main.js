import * as activeCampaignTab from './tab';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.settings-page.tabs',
	'jet-form-builder/active-campaign',
	tabs => {
		tabs.push( activeCampaignTab );

		return tabs;
	},
);