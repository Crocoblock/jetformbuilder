<template>
	<cx-vui-select
		:options-list="filter.options || []"
		:wrapper-css="[ 'equalwidth' ]"
		:value="filter.selected"
		:placeholder="label( 'filter_form_title' )"
		class="jet-fb-filter-form-select"
		@input="onChangeFilter"
	></cx-vui-select>
</template>

<script>
const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

const {
	      FilterMixin,
      } = JetFBMixins;

export default {
	name: 'FormFilter',
	data() {
		return {
			filter_id: 'form',
		};
	},
	mixins: [ FilterMixin ],
	computed: {
		...mapGetters( 'messages', [
			'label',
		] ),
	},
};
</script>

<style lang="scss">
.jet-fb-filter-form-select.cx-vui-component {
	display: block;
	padding: unset;

	.cx-vui-select {
		min-width: 150px;
	}
}
</style>
