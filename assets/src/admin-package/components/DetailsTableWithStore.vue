<template>
	<DetailsTable
		:columns="columnsFromStore"
		:source="currentFromStore"
	/>
</template>

<script>
import DetailsTable from './DetailsTable';

export default {
	name: 'DetailsTableWithStore',
	props: {
		getColumns: {
			type: String,
			default: 'getColumns'
		},
		getCurrent: {
			type: String,
			default: 'getCurrent'
		}
	},
	components: { DetailsTable },
	computed: {
		columnsFromStore() {
			return this.$store.getters[ this.getColumns ];
		},
		currentFromStore() {
			return this.$store.getters[ this.getCurrent ];
		},
	}
};
</script>

<style scoped>

</style>