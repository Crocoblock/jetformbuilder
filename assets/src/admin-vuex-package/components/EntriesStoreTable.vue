<template>
	<EntriesTable
		:loading="loadingPage"
		:columns="$store.getters.getColumns"
		:columns-components="columnsComponents"
	/>
</template>

<script>
const { mapState } = Vuex;

const { GetColumnComponent } = JetFBMixins;
const { EntriesTable } = JetFBComponents;

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