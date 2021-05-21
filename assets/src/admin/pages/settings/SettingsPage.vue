<template>
	<div class="jet-fb-settings-page wrap">
		<h1 class="cs-vui-title">{{ 'JetForms Settings' }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-tabs
				:in-panel="false"
				:value="activeTabSlug"
				layout="vertical"
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
import SaveTabByAjax from '@admin/mixins/SaveTabByAjax';
import GetIncoming from '@admin/mixins/GetIncoming';

const { applyFilters, doAction } = wp.hooks;

window.jfbEventBus = new Vue();

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	paymentGateways,
	captcha,
	mailchimp,
	getResponse,
	activecampaign,
] );

export default {
	name: 'jfb-settings',
	data() {
		return {
			activeTabSlug: settingTabs[ 0 ].component.name,
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
		onSaveTab( indexTab, tabSlug ) {
			const currentTab = this.$refs.tabComponents[ indexTab ];

			this.saveByAjax( currentTab, tabSlug );
		},
	},
}
</script>