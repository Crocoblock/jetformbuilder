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
import ScopeStoreMixin from '../../../mixins/ScopeStoreMixin';

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

export default {
	name: 'choose--item',
	props: [ 'value', 'full-entry' ],
	mixins: [ ScopeStoreMixin ],
	created() {
		this.commit( 'addToStore', {
			id: this.value,
		} );
	},
	methods: {
		isChecked( value ) {
			return this.getter( 'isChecked', value );
		},
		isCheckedCurrent() {
			return this.isChecked( this.value ) ? this.value : '';
		},
		onChange() {
			this.dispatch( 'changeChecked', {
				id: this.value,
				active: ! this.isCheckedCurrent(),
			} );
		},
	},
};
</script>

<style lang="scss">
.cx-vui-component {
	padding: unset;
}
</style>