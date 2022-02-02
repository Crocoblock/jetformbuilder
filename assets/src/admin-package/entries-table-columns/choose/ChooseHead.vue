<template>
	<cx-vui-checkbox
		:options-list="[ { value: 'checked' } ]"
		:value="value"
		@input="onClick"
		return-type="single"
		name="jfb_record_all"
	>
	</cx-vui-checkbox>
</template>

<script>
export default {
	name: 'choose--head',
	data() {
		return {
			isChecked: false,
			value: ''
		};
	},
	methods: {
		onClick() {
			this.isChecked = ! this.isChecked;
			this.value = this.isChecked ? 'checked' : '';

			this.$store.commit( this.isChecked ? 'activeAll' : 'removeAll' );
		},
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	padding: unset;
}
</style>