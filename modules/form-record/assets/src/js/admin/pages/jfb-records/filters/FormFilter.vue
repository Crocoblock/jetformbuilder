<template>
	<CxVuiSelect
		:value="filter.selected"
		@input="onChangeFilter"
	>
		<option value="">{{ __( 'All forms', 'jet-form-builder' ) }}</option>
		<option v-for="option in filter.options || []" v-bind:value="option.value">
			{{ option.label }}
		</option>
	</CxVuiSelect>
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
	      i18n,
      } = JetFBMixins;

const {
	      ColumnWrapper,
	      CxVuiSelect,
      } = JetFBComponents;

export default {
	name: 'FormFilter',
	components: {
		ColumnWrapper,
		CxVuiSelect
	},
	data() {
		return {
			filter_id: 'form',
		};
	},
	mixins: [ FilterMixin, i18n ],
};
</script>

<style lang="scss">

</style>
