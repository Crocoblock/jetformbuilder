<template>
	<EntriesTable
		:loading="loadingPage"
		:columns="$store.getters.getColumns"
		:columns-components="columnsComponents"
	/>
</template>

<script>
import EntriesTable from './EntriesTable';

const { mapState } = Vuex;

const { GetColumnComponent } = JetFBMixins;

export default {
	name: 'EntriesStoreTable',
	mixins: [ GetColumnComponent ],
	components: {
		EntriesTable,
	},
	computed: {
		...mapState( [
			'loading',
		] ),
		loadingPage() {
			return this.loading?.page;
		}
	},
};
</script>

<style>

</style>