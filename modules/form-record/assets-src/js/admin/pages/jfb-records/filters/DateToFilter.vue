<template>
	<input
		type="date"
		class="cx-vui-input size-fullwidth"
		:value="filter.selected"
		@input="onChangeFilter($event.target.value)"
	>
</template>

<script>

const {
	      RowWrapper,
	      ColumnWrapper,
      } = JetFBComponents;

const {
	      i18n,
	      FilterMixin,
      } = JetFBMixins;

export default {
	name: 'DateToFilter',
	components: {
		ColumnWrapper,
	},
	data() {
		return {
			filter_id: 'date_to',
		};
	},
	mixins: [ i18n, FilterMixin ],
};
</script>