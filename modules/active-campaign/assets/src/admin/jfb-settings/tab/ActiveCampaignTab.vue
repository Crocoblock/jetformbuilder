<template>
	<div>
		<cx-vui-input
			:label="label.api_key"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="api_key"
		/>
		<cx-vui-input
			:label="label.api_url"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="api_url"
		/>
		<p class="fb-description">{{ help.apiPref }} <a :href="help.apiLink" target="_blank">{{ help.apiLinkLabel }}</a>
		</p>
	</div>
</template>

<script>

import {
	help,
	label
} from "./source";

export default {
	name: 'active-campaign-tab',
	props: {
		incoming: {
			type: Object,
			default: {},
		},
	},
	data() {
		return {
			label, help,
			api_key: '',
			api_url: ''
		};
	},
	created() {
		this.api_key = this.incoming.api_key || ''
		this.api_url = this.incoming.api_url || ''
	},
	methods: {
		getRequestOnSave() {
			return {
				data: {
					api_key: this.api_key,
					api_url: this.api_url
				}
			};
		}
	}
}

</script>