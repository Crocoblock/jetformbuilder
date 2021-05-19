<template>
	<section>
		<cx-vui-switcher
			name="use_gateways"
			:wrapper-css="[ 'equalwidth' ]"
			:label="label.use_gateways"
			:value="storage.use_gateways"
			@input="setWithEmit( 'use_gateways', $event )"
		></cx-vui-switcher>
		<cx-vui-switcher
			v-if="storage.use_gateways"
			name="enable_test_mode"
			:wrapper-css="[ 'equalwidth' ]"
			:label="label.enable_test_mode"
			v-model="storage.enable_test_mode"
		></cx-vui-switcher>
	</section>
</template>

<script>

import {
	help,
	label,
} from "./source";

export default {
	name: 'advanced',
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
		setWithEmit( key, value ) {
			this.$set( this.storage, key, value );

			jfbEventBus.$emit( `change-tab-${ this.$options.name }`, this.storage );
			//this.$emit( 'change-tab', this.$options.name, this.storage );
		},
	},
}

</script>