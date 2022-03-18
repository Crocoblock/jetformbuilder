<template>
	<div class="jet-form-builder-page jet-form-builder-page--settings wrap">
		<h1 class="cs-vui-title">{{ 'JetFormBuilder Settings' }}</h1>
		<div class="jfb-content">
			<div class="jfb-content-main">
				<div class="cx-vui-panel">
					<CxVuiTabs
						:in-panel="false"
						:value="activeTabSlug"
						layout="vertical"
						@input="onChangeActiveTab"
					>
						<CxVuiTabsPanel
							v-for="( { displayButton = true, ...tab }, index ) in tabs"
							:name="tab.component.name"
							:label="tab.title"
							:key="tab.component.name"
							:disabled="tab.disabled"
							:icon="tab.icon"
						>
							<template #default v-if="tab.component.render">
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
							</template>
						</CxVuiTabsPanel>
					</CxVuiTabs>
				</div>
			</div>
			<SideBarBoxes />
		</div>
	</div>
</template>

<script>
import * as captcha from './tabs/captcha';
import * as mailchimp from './tabs/mailchimp';
import * as getResponse from './tabs/getresponse';
import * as activecampaign from './tabs/activecampaign';
import * as paymentGateways from './tabs/payments-gateways';
import SideBarBoxes from './SideBarBoxes';
import '../../../../scss/admin/default.scss';
import './styles/main.scss';

const { applyFilters, doAction } = wp.hooks;

const {
	SaveTabByAjax,
	GetIncoming,
} = window.JetFBMixins;

const {
	CxVuiTabsPanel,
	CxVuiTabs,
} = JetFBComponents;

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
	let tab = settingTabs.find( tab => tab?.component?.name === hash );

	if ( ! tab ) {
		changeHash( first );

		return [ first ];
	}
	changeHash( [ tab.component.name, ...others ].join( '__' ) );

	return [ tab.component.name, others ];
};

export default {
	name: 'jfb-settings',
	components: {
		SideBarBoxes,
		CxVuiTabsPanel,
		CxVuiTabs,
	},
	data() {
		const [ tabSlug, others ] = getActiveTab();
		return {
			activeTabSlug: tabSlug,
			activeTabInnerSlugs: others,
			tabs: settingTabs,
			loadingTab: {},
			isActivePro: false,
		};
	},
	mixins: [ SaveTabByAjax, GetIncoming ],
	created() {
		this.isActivePro = this.getIncoming( 'is_active' );

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

<style lang="scss">
.jfb-content {
	display: flex;
	column-gap: 2em;

	&-main {
		flex: 1;
	}
}
</style>