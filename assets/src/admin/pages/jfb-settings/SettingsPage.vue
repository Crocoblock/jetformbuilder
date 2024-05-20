<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Settings', 'jet-form-builder' )"
	>
		<Banner utm-source="dashboard/jet-form-builder-settings-page" />
		<div class="jfb-content">
			<AlertsList/>
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
			<SettingsSideBar/>
		</div>
	</FormBuilderPage>
</template>

<script>
import * as captcha from './tabs/captcha';
import * as mailchimp from './tabs/mailchimp';
import * as getResponse from './tabs/getresponse';
import * as paymentGateways from './tabs/payments-gateways';
import * as options from './tabs/options';
import SettingsSideBar from './sidebar/SettingsSideBar';
import Banner from "../../components/Banner.vue";

const { applyFilters, doAction } = wp.hooks;

const {
	SaveTabByAjax,
	GetIncoming,
	i18n,
} = window.JetFBMixins;

const {
	CxVuiTabsPanel,
	CxVuiTabs,
	AlertsList,
	FormBuilderPage,
} = JetFBComponents;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	options,
	paymentGateways,
	captcha,
	mailchimp,
	getResponse,
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
		Banner,
		AlertsList,
		CxVuiTabsPanel,
		CxVuiTabs,
		SettingsSideBar,
		FormBuilderPage,
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
	mixins: [ SaveTabByAjax, GetIncoming, i18n ],
	created() {
		this.isActivePro = this.getIncoming( 'is_active' );

		jfbEventBus.$on( 'request-state', props => {
			const { state, slug } = props;
			this.$set( this.loadingTab, slug, state === 'begin' );
		} );
		jfbEventBus.$on( 'alert-click-thanks', ( { self } ) => {
			self.closeAlert();
		} );
		jfbEventBus.$on( 'alert-click-check', ( { self } ) => {
			self.closeAlert();
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
};
</script>

<style lang="scss">
.jfb-content {
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
	margin-top: 1em;

	&-main {
		flex: 1;
	}
}
</style>