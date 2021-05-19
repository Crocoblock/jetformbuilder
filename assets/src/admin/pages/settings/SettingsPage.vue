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
					v-for="( tab, index ) in activeTabs"
					:name="tab.module.component.name"
					:label="tab.module.title"
					:key="tab.module.component.name"
				>
					<keep-alive>
						<component
							v-bind:is="tab.module.component"
							:incoming="getIncoming( tab.module.component.name )"
							ref="tabComponents"
						/>
					</keep-alive>
					<cx-vui-button
						button-style="accent"
						:loading="loadingTab"
						@click="onSaveTab( index, tab.module.component.name )"
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
import * as advanced from './tabs/advanced'
import * as paypal from './tabs/paypal';

const { applyFilters, doAction } = wp.hooks;

window.jfbEventBus = new Vue();

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	advanced,
	paypal,
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
			tabs: [],
			loadingTab: false,
		};
	},
	created() {
		const { __visible: enables } = this.getIncoming( 'advanced' );

		jfbEventBus.$on( 'change-show', this.onChangeShow.bind( this ) )

		this.tabs = settingTabs.map( tab => {
			return { module: tab, visible: enables[ tab.component.name ] || true }
		} );
	},
	computed: {
		activeTabs() {
			return this.tabs.filter( ( { visible } ) => visible );
		},
	},
	methods: {
		onChangeShow( slug, isVisibleTab ) {
			this.tabs.forEach( ( tab, index ) => {
				if ( slug === tab.module.component.name ) {
					this.$set( this.tabs[ index ], 'visible', isVisibleTab );
				}
			} );
		},
		onSaveTab( indexTab, tabSlug ) {
			const currentTab = this.$refs.tabComponents[ indexTab ];
			const self = this;

			const ajaxRequest = {
				...{
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
				},
				...currentTab.getRequestOnSave(),
			};
			ajaxRequest.data = {
				action: `jet_fb_save_tab__${ tabSlug }`,
				...ajaxRequest.data,
			};

			self.loadingTab = true;

			jQuery.ajax( ajaxRequest )
				.done( function( response ) {

					if ( 'function' === typeof currentTab.onSaveDone ) {
						currentTab.onSaveDone( response );
					} else {
						if ( response.success ) {
							self.$CXNotice.add( {
								message: response.data.message,
								type: 'success',
								duration: 5000,
							} );
							if ( 'function' === typeof currentTab.onSaveDoneSuccess ) {
								currentTab.onSaveDoneSuccess( response );
							}
						} else {
							self.$CXNotice.add( {
								message: response.data.message,
								type: 'error',
								duration: 5000,
							} );
							if ( 'function' === typeof currentTab.onSaveDoneError ) {
								currentTab.onSaveDoneError( response );
							}
						}
					}

					self.loadingTab = false;
				} )
				.fail( function( jqXHR, textStatus, errorThrown ) {
					if ( 'function' === typeof currentTab.onSaveFail ) {
						currentTab.onSaveFail( jqXHR, textStatus, errorThrown );
					} else {
						self.$CXNotice.add( {
							message: errorThrown,
							type: 'error',
							duration: 5000,
						} );
					}
					self.loadingTab = false;
				} );
		},
		getIncoming( tabName ) {
			return window.JetFBPageConfig[ tabName ];
		},
	},
}
</script>