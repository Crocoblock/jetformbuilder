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
	      ColumnWrapper,
      } = JetFBComponents;

const {
	      i18n,
	      FilterMixin,
      } = JetFBMixins;

export default {
	name: 'DateFromFilter',
	components: {
		ColumnWrapper,
	},
	data() {
		return {
			filter_id: 'date_from',
		};
	},
	mixins: [ i18n, FilterMixin ],
};
</script>
