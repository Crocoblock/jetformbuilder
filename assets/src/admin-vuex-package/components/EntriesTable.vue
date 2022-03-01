<template>
	<EntriesTableSkeleton
		:list="list"
		:columns="columns"
		:loading="loading"
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
			default: 'default'
		},
	},
	data: () => ({
		components: []
	}),
	components: { EntriesTableSkeleton },
	computed: {
		currentState() {
			return this.$store.state[ 'scope-' + this.scope ];
		},
		list() {
			return this.currentState.list;
		},
		columns() {
			return this.currentState.columns;
		},
		loading() {
			return this.currentState.loading?.table;
		}
	},
	created() {
		this.components = applyFilters( `jet.fb.admin.table.${this.scope}`, [] );
	},
	methods: {},
};
</script>

