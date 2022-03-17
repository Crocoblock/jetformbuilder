<template>
	<cx-vui-checkbox
		:options-list="[ { value: 'checked' } ]"
		:value="chooseHeadValue"
		@input="onClick"
		return-type="single"
		name="jfb_record_all"
	>
	</cx-vui-checkbox>
</template>

<script>
import ScopeStoreMixin from '../../../mixins/ScopeStoreMixin';

export default {
	name: 'choose--head',
	mixins: [ ScopeStoreMixin ],
	computed: {
		chooseHeadValue() {
			return this.getter( 'chooseHeadValue' );
		},
	},
	methods: {
		onClick() {
			this.commit( 'toggleHead' );

			if ( this.getter( 'isCheckedHead' ) ) {
				this.dispatch( 'activeAll' );
			} else {
				this.commit( 'setChecked' );
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	padding: unset;
}
</style>