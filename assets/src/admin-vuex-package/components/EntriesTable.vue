<template>
	<EntriesTableSkeleton
		:list="storeGetters.list"
		:columns="storeGetters.columns"
		:loading="storeGetters.isLoading( 'page' )"
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
		storeGetters() {
			return this.$store.getters[ 'scope-' + this.scope ] ?? this.$store.getters;
		},
	},
	created() {
		this.components = applyFilters( `jet.fb.admin.table.${this.scope}`, [] );
	},
	methods: {},
};
</script>

