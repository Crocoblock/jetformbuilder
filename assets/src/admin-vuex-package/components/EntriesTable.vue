<template>
	<EntriesTableSkeleton
		:list="list"
		:columns="columns"
		:loading="isLoading( 'page' )"
		:columns-components="components"
	></EntriesTableSkeleton>
</template>

<script>
import EntriesTableSkeleton from './EntriesTableSkeleton';

const {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} = window.Vuex;

const { applyFilters } = wp.hooks;

export default {
	name: 'entries-table',
	props: {
		scope: {
			type: String,
			default: 'default',
		},
	},
	data: () => (
		{
			components: [],
		}
	),
	components: { EntriesTableSkeleton },
	computed: {
		store() {
			const getters = mapGetters( 'scope-' + this.scope, [
				'list',
				'columns',
				'isLoading',
			] );

			debugger;

			return getters;
		},

	},
	created() {
		this.components = applyFilters( `jet.fb.admin.table.${ this.scope }`, [] );
	},
};
</script>

