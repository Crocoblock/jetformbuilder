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

		jfbEventBus.$on( 'change-tab-advanced', this.onChangeTab.bind( this ) )
	},
	methods: {
		onChangeTab( value ) {
			jfbEventBus.$emit( 'change-show', this.$options.name, Boolean( value.use_gateways ) );
		},
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
}

</script>