<template>
	<section>
		<cx-vui-input
			:label="label.key"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.key"
		></cx-vui-input>
		<cx-vui-input
			:label="label.secret"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.secret"
		></cx-vui-input>
		<cx-vui-input
			type="number"
			:min="0"
			:max="1"
			:step="0.1"
			:label="label.threshold"
			:description="help.threshold"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.threshold"
		></cx-vui-input>
		<p class="fb-description">{{ help.apiPref }} <a :href="help.apiLink" target="_blank">{{ help.apiLinkLabel }}</a>
		</p>
	</section>
</template>

<script>

import {
	help,
	label,
} from "./source";

export default {
	name: 'google',
	props: {
		incoming: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			label, help,
			storage: {},
		};
	},
	created() {
		this.storage = JSON.parse( JSON.stringify( this.incoming ) );
	},
	methods: {
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
}

</script>