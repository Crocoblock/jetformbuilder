<template>
	<cx-vui-checkbox
		:options-list="[ { value } ]"
		:value="isCheckedCurrent()"
		@input="onChange"
		return-type="single"
		name="jfb_record_row"
	>
	</cx-vui-checkbox>
</template>

<script>

window.jfbEventBus = window.jfbEventBus || new Vue();

export default {
	name: 'choose--item',
	props: [ 'value', 'full-entry' ],
	created() {
		this.$store.commit( 'addToStore', {
			id: this.value,
		} );
	},
	methods: {
		isChecked( value ) {
			return this.$store.getters.isChecked( value );
		},
		isCheckedCurrent() {
			return this.isChecked( this.value ) ? this.value : '';
		},
		onChange() {
			this.$store.dispatch( 'changeChecked', {
				id: this.value,
				active: ! this.isCheckedCurrent(),
			} );
		},
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	padding: unset;
}
</style>