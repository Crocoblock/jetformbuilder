<template>
	<CxVuiSelect
		:value="filter.selected"
		@input="onChangeFilter"
	>
		<option v-for="option in filter.options || []" v-bind:value="option.value">
			{{ option.label }}
		</option>
	</CxVuiSelect>
</template>

<script>
import FilterMixin from '../../../mixins/FilterMixin';

const {
	      __,
      } = wp.i18n;

const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

const {
	      i18n,
      } = JetFBMixins;

const {
	      ColumnWrapper,
	      CxVuiSelect,
      } = JetFBComponents;


export default {
	name: 'StatusFilter',
	components: {
		ColumnWrapper,
		CxVuiSelect,
	},
	data() {
		return {
			filter_id: 'status',
		};
	},
	created() {
		this.setCurrentFilter( {
			options: [
				{
					value: '',
					label: __( 'All statuses', 'jet-form-builder' ),
				},
				{
					value: 'COMPLETED',
					label: __( 'Only completed ones', 'jet-form-builder' ),
				},
				{
					value: 'VOIDED',
					label: __( 'Only not completed ones', 'jet-form-builder' ),
				},
			],
		} );
	},
	mixins: [ FilterMixin, i18n ],
};
</script>

<style lang="scss">

</style>
