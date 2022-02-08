<template>
	<div class="jet-form-builder-page jet-form-builder-page--settings wrap">
		<h1 class="cs-vui-title">{{ 'JetFormBuilder Settings' }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-tabs
				:in-panel="false"
				:value="activeTabSlug"
				layout="vertical"
				@input="onChangeActiveTab"
			>
				<cx-vui-tabs-panel
					v-for="( { displayButton = true, ...tab }, index ) in tabs"
					:name="tab.component.name"
					:label="tab.title"
					:key="tab.component.name"
				>
					<keep-alive>
						<component
							v-bind:is="tab.component"
							:incoming="getIncoming( tab.component.name )"
							:inner-slugs="activeTabInnerSlugs || []"
							ref="tabComponents"
						/>
					</keep-alive>
					<cx-vui-button
						v-if="displayButton"
						button-style="accent"
						:loading="loadingTab[ tab.component.name ]"
						@click="onSaveTab( index, tab.component.name )"
					>
						<template #label>
							<span>Save</span>
						</template>
					</cx-vui-button>
				</cx-vui-tabs-panel>
			</cx-vui-tabs>
		</div>
	</div>
</template>

<script>
import * as captcha from './tabs/captcha'
import * as mailchimp from './tabs/mailchimp'
import * as getResponse from './tabs/getresponse'
import * as activecampaign from './tabs/activecampaign'
import * as paymentGateways from './tabs/payments-gateways'

import '../../../../scss/admin/default.scss';

const { applyFilters, doAction } = wp.hooks;

const { SaveTabByAjax, GetIncoming } = window.JetFBMixins;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	paymentGateways,
	captcha,
	mailchimp,
	getResponse,
	activecampaign,
] );

const changeHash = hash => {
	window.location.hash = '#' + hash;
};

const getActiveTab = () => {
	const first = settingTabs[ 0 ].component.name;

	if ( ! window.location.hash ) {
		changeHash( first );

		return [ first ];
	}
	let [ hash, ...others ] = window.location.hash.replace( '#', '' ).split( '__' );
	let tab = settingTabs.find( tab => tab.component.name === hash );

	if ( ! tab ) {
		changeHash( first );

		return [ first ];
	}
	changeHash( [ tab.component.name, ...others ].join( '__' ) );

	return [ tab.component.name, others ];
};

export default {
	name: 'jfb-settings',
	data() {
		const [ tabSlug, others ] = getActiveTab();
		return {
			activeTabSlug: tabSlug,
			activeTabInnerSlugs: others,
			tabs: settingTabs,
			loadingTab: {},
		};
	},
	mixins: [ SaveTabByAjax, GetIncoming ],
	created() {
		jfbEventBus.$on( 'request-state', props => {
			const { state, slug } = props;
			this.$set( this.loadingTab, slug, state === 'begin' );
		} );
	},
	methods: {
		onChangeActiveTab( activeTab ) {
			const currentUrl = new URL( document.URL );
			currentUrl.hash = '#' + activeTab;

			document.location.href = currentUrl.href;

			jfbEventBus.$emit( 'change-tab', { slug: activeTab } );
		},
		onSaveTab( indexTab, tabSlug ) {
			const currentTab = this.$refs.tabComponents[ indexTab ];

			this.saveByAjax( currentTab, tabSlug );
		},
	},
}
</script>