<template>
	<cx-vui-checkbox
		:options-list="[ { value: 'checked' } ]"
		:value="$store.state.chooseHead"
		@input="onClick"
		return-type="single"
		name="jfb_record_all"
	>
	</cx-vui-checkbox>
</template>

<script>
export default {
	name: 'choose--head',
	methods: {
		onClick() {
			this.$store.commit( 'toggleHead' );

			this.$store.commit( this.$store.getters.isCheckedHead ? 'activeAll' : 'removeAll' );
		},
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	padding: unset;
}
</style>