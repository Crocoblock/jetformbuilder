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
					v-for="( tab, index ) in tabs"
					:name="tab.component.name"
					:label="tab.title"
					:key="tab.component.name"
				>
					<keep-alive>
						<component v-bind:is="tab.component" ref="tabComponents"
								   :incoming="getIncoming( tab.component.name )"/>
					</keep-alive>
					<cx-vui-button
						button-style="accent"
						@click="onSaveTab( index, tab.component.name )"
					>
						<span slot="label">Save</span>
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

const { applyFilters } = wp.hooks;

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	captcha,
	mailchimp,
	getResponse,
	activecampaign,
] )

export default {
	name: 'jfb-settings',
	data() {
		return {
			activeTabSlug: settingTabs[0].component.name,
			tabs: settingTabs,
		};
	},
	methods: {
		onSaveTab( indexTab, tabSlug ) {
			const currentTab = this.$refs.tabComponents[ indexTab ];
			const self = this;

			const ajaxRequest = {
				...{
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
				},
				...currentTab.getRequestOnSave()
			};
			ajaxRequest.data = {
				action: `jet_fb_save_tab__${ tabSlug }`,
				...ajaxRequest.data
			};

			jQuery.ajax( ajaxRequest )
			.done( function ( response ) {

				if ( 'function' === typeof currentTab.onSaveDone ) {
					currentTab.onSaveDone( response );
				}
				else {
					if ( response.success ) {
						self.$CXNotice.add( {
							message: response.data.message,
							type: 'success',
							duration: 5000,
						} );
					}
					else {
						self.$CXNotice.add( {
							message: response.data.message,
							type: 'error',
							duration: 10000,
						} );
					}
				}
			} )
			.fail( function ( jqXHR, textStatus, errorThrown ) {
				if ( 'function' === typeof currentTab.onSaveFail ) {
					currentTab.onSaveFail( jqXHR, textStatus, errorThrown );
					return;
				}
				self.$CXNotice.add( {
					message: errorThrown,
					type: 'error',
					duration: 10000,
				} );
			} );
		},
		getIncoming( tabName ) {
			return window.JetFBPageConfig[ tabName ];
		}
	}
}
</script>