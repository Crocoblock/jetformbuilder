<template>
	<section>
		<cx-vui-input
			:label="label.client_id"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.client_id"
		></cx-vui-input>
		<cx-vui-input
			:label="label.secret"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.secret"
		></cx-vui-input>
	</section>
</template>

<script>

import {
	help,
	label,
} from "./source";

export default {
	name: 'paypal',
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