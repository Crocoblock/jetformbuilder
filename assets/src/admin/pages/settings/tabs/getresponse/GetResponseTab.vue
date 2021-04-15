<template>
	<cx-vui-input
		:label="label.api_key"
		:wrapper-css="[ 'equalwidth' ]"
		:description='`${ help.apiPref } <a href="${ help.apiLink }" target="_blank">${ help.apiLinkLabel }</a>`'
		:size="'fullwidth'"
		v-model="api_key"
	/>
</template>

<script>

import {
	help,
	label
} from "./source";

export default {
	name: 'get-response-tab',
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
		};
	},
	created() {
		this.api_key = this.incoming.api_key || ''
	},
	methods: {
		getRequestOnSave() {
			return {
				data: {
					api_key: this.api_key,
				}
			};
		}
	}
}

</script>