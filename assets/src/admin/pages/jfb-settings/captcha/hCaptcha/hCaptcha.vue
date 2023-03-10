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
	</section>
</template>

<script>

import {
	label,
} from './source';

export default {
	name: 'hcaptcha',
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
			label,
			storage: {},
		};
	},
	created() {
		if ( !Object.keys( this.incoming )?.length ) {
			return;
		}
		this.storage = JSON.parse( JSON.stringify( this.incoming ) );
	},
	methods: {
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
};

</script>