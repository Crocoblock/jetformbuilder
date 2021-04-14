<template>
	<div class="wrap">
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
						<component v-bind:is="tab.component"/>
					</keep-alive>
				</cx-vui-tabs-panel>

			</cx-vui-tabs>
		</div>
	</div>
</template>

<script>
import * as captcha from './tabs/captcha'

const { applyFilters } = wp.hooks;

const settingTabs = applyFilters( 'jet.fb.register.settings-page.tabs', [
	captcha
] )

export default {
	name: 'settings',
	data() {
		return {
			activeTabSlug: 'captcha-tab',
			tabs: settingTabs,
		};
	},
	methods: {}
}
</script>