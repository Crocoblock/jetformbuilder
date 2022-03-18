<template>
	<div class="cx-vui-tabs-panel" v-show="show">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'cx-vui-tabs-panel',
	props: {
		tab: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: [ Object, String ],
			default: '',
		}
	},
	data() {
		return {
			show: false,
		};
	},
};
</script>

<style>

</style>