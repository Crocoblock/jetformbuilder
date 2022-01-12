<template>
	<EntriesTable
		:loading="loadingPage"
		:columns="$store.getters.getColumns"
		:columns-components="columnsComponents"
	/>
</template>

<script>
import GetColumnComponent from '../mixins/GetColumnComponent';
import EntriesTable from './EntriesTable';

const { mapState } = Vuex;

export default {
	name: "EntriesStoreTable",
	mixins: [ GetColumnComponent ],
	components: {
		EntriesTable,
	},
	computed: {
		...mapState( [
			'loadingPage',
		] ),
	},
}
</script>

<style>

</style>